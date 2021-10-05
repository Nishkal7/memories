import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../utils/Loader';
import {getPosts} from '../actions/posts';
import styles from './styles';

const Home = () => {
  const dispatch = useDispatch();
  let stateData = useSelector(state => state);
  let posts = useSelector(state => state?.posts?.data);
  const [postsData, setPostsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getPosts(1));
  }, []);

  useEffect(() => {
    console.log('stateData', stateData);

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
      <Text>{item.title}</Text>
      <Image style={styles.image} source={{uri: item.selectedFile}} />
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
