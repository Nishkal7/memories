import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../utils/Loader';
import {signin} from '../actions/login';
import styles from './styles';

const Home = () => {
  const dispatch = useDispatch();
  let posts = useSelector(state => state?.login?.authData);
  const [postsData, setPostsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
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
    dispatch(signin(posts?.currentPage + 1));
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
