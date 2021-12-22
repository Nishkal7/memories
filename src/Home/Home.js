import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import * as Constants from '../utils/Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../utils/Loader';
import {getPosts, likePost} from '../actions/posts';
import moment from 'moment';
import styles from './styles';

const Home = ({navigation, route}) => {
  const dispatch = useDispatch();
  let stateData = useSelector(state => state); //for checking full global state
  let posts = useSelector(state => state?.posts?.data);
  const [postsData, setPostsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    dispatch(getPosts(1));
    setRefreshing(true);
    wait(5000).then(() => {
      setRefreshing(false);
    });
  }, []);

  useEffect(async () => {
    if (route?.params?.status == 'create') {
      await onRefresh();
      route.params = undefined;
    }
  }, [route?.params]);

  useEffect(() => {
    dispatch(getPosts(1));
    console.log('stateData', stateData);
  }, []);

  useEffect(() => {
    if (posts?.data != null) {
      setLoading(false);
      // } else {
      //   setLoading(true); // commented due to issue after liking any post ( reloading due to Posts local state change)
    }

    if (posts?.currentPage == 1) {
      setPostsData(posts.data);
    } else if (posts?.currentPage > 1) {
      Array.prototype.push.apply(postsData, posts?.data);
      setPostsData(postsData);
    }
  }, [posts]);

  function checkSelfLike(post) {
    let likeBool = post.likes.find(
      like =>
        like ===
        (stateData.login.authData?.result?.googleId ||
          stateData.login.authData?.result?._id),
    );
    return likeBool;
  }

  const updateLocalLike = (post) => {
      //TODO - Update like state locally in redux and API call related data can be updated on DATA reload or refresh later
  }

  const renderItem = ({item, index}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.cardImageContainer}
        onPress={() =>
          navigation.navigate('PostDetail', {
            post: item,
          })
        }>
        <ImageBackground
          style={styles.image}
          imageStyle={styles.imageStyles}
          source={{uri: item.selectedFile}}>
          <View style={styles.imageChild}>
            <View style={styles.overlayTextContainer}>
              <Text numberOfLines={1} style={styles.overlayName}>
                {item.name}
              </Text>
              <Text numberOfLines={1} style={styles.overlayDate}>
                {moment(item.createdAt).fromNow()}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.cardContentContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.cardContentTitle}
          onPress={() =>
            navigation.navigate('PostDetail', {
              post: item,
            })
          }>
          <Text numberOfLines={1} style={styles.cardContentTitleText}>
            {item.title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.cardContentDesc}
          onPress={() =>
            navigation.navigate('PostDetail', {
              post: item,
            })
          }>
          <Text numberOfLines={4} style={styles.cardContentDescText}>
            {item.message}
          </Text>
        </TouchableOpacity>
        <View style={styles.cardContentIconsContainer}>
          {/* Currently like and bookmark will be applied to all items in the list, this issue will be resolved once the 
              api functional logic is implemented and we can add condition based on post and user information*/}
          <View style={styles.cardContentIconsLeftContainer}>
            <MaterialCommunityIcons
              name={
                checkSelfLike(item) ? 'thumb-up' : 'thumb-up-outline'
              }
              color={'#585858'}
              size={25}
              style={{paddingRight: 15}}
              onPress={() => {
                updateLocalLike(item);
                dispatch(likePost(item._id));
              }}
            />
            {/* <MaterialCommunityIcons
              name={bookmark ? 'bookmark' : 'bookmark-outline'}
              color={'#585858'}
              size={25}
              onPress={() => setBookmark(!bookmark)}
            /> */}
          </View>
          <View>
            <MaterialCommunityIcons
              name="trash-can-outline"
              color={'#585858'}
              size={25}
              style={{paddingRight: 10}}
            />
          </View>
        </View>
      </View>
    </View>
  );

  const loadPosts = () => {
    setPageNumber(posts?.currentPage + 1);
    setLoading(true);
    dispatch(getPosts(posts?.currentPage + 1));
  };

  return (
    <View style={styles.container}>
      <Loader activeStatus={loading} />
      <FlatList
        style={styles.listContainer}
        data={postsData}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        onEndReachedThreshold={0.1}
        onEndReached={posts?.numberOfPages != pageNumber ? loadPosts : null}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default Home;
