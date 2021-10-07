import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Image, ImageBackground} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../utils/Loader';
import {getPosts} from '../actions/posts';
import moment from "moment";
import styles from './styles';

const Home = () => {
  const dispatch = useDispatch();
  let stateData = useSelector(state => state); //for checking full global state
  let posts = useSelector(state => state?.posts?.data);
  const [postsData, setPostsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getPosts(1));
  }, []);

  useEffect(() => {
    if (posts?.data != null) {
      setLoading(false);
    } else {
      setLoading(true);
    }

    if (posts?.currentPage == 1) {
      setPostsData(posts.data);
    } else if (posts?.currentPage > 1) {
      Array.prototype.push.apply(postsData, posts?.data);
      setPostsData(postsData);
    }
  }, [posts]);

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.cardImageContainer}>
        <ImageBackground
          style={styles.image}
          imageStyle={styles.imageStyles}
          source={{uri: item.selectedFile}}>
          <View style={styles.imageChild}>
            <View style={styles.overlayTextContainer}>
            <Text numberOfLines={1} style={styles.overlayName}>{item.name}</Text>
            <Text numberOfLines={1} style={styles.overlayDate}>{moment(item.createdAt).fromNow()}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.cardContentContainer}></View>
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
      />
    </View>
  );
};

export default Home;
