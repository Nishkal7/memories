import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../utils/Loader';
import {getPostsBySearch} from '../actions/posts';
import styles from './styles';
import * as Animatable from 'react-native-animatable';

const PostDetail = ({route, navigation}) => {
  const {post} = route.params;
  const dispatch = useDispatch();
  let postsList = useSelector(state => state?.posts?.recPosts);
  let isLoading = useSelector(state => state?.posts?.isLoading);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({search: 'none', tags: post?.tags.join(',')}));
    }
  }, [post]);

  const recommendedPosts = postsList?.data?.filter(({_id}) => _id !== post._id);

  return (
    <ScrollView style={styles.postDetailContainer}>
      <Loader activeStatus={isLoading} />
      <Animatable.View
        animation="slideInDown"
        duration={1000}
        style={styles.imageContainer}>
        <Image style={styles.imageView} source={{uri: post.selectedFile}} />
      </Animatable.View>
      <Animatable.View
        animation="slideInUp"
        duration={1000}
        style={styles.postContentContainer}>
        <View style={styles.postContentTitle}>
          <Text numberOfLines={1} style={styles.postContentTitleText}>
            {post.title}
          </Text>
        </View>
        {post?.tags?.length > 0 ? (
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.tagsContainer}>
            {post?.tags.map((tag, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.5}
                  style={styles.tags}>
                  <Text style={styles.tagsText}>{tag}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ) : null}
        <View style={styles.postContentMessageContainer}>
          <Text style={styles.postContentMessageText}>{post.message}</Text>
        </View>
        <View style={styles.postContentMessageContainer}>
          <Text numberOfLines={1} style={styles.postContentTitleText}>
            {'Created by : ' + post.name}
          </Text>
          <Text numberOfLines={1} style={styles.postContentDate}>
            {moment(post.createdAt).fromNow()}
          </Text>
        </View>
        {recommendedPosts && recommendedPosts?.length > 0 ? (
          <Text numberOfLines={1} style={styles.postContentRecText}>
            {'You might also like : '}
          </Text>
        ) : null}
        <View style={styles.recommendationPostsContainer}>
          {recommendedPosts &&
            recommendedPosts?.length > 0 &&
            recommendedPosts?.map((post, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.imageRecContainer}
                  onPress={() =>
                    navigation.replace('PostDetail', {
                      post: post,
                    })
                  }>
                  <Image
                    style={styles.imageRecView}
                    source={{uri: post.selectedFile}}
                  />
                </TouchableOpacity>
              );
            })}
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default PostDetail;

// To use original Image sizes
// const [imageHeight, setImageHeight] = useState(null);
// const [imageWidth, setImageWidth] = useState(null);

// Image.getSize(post.selectedFile, (width, height) => {
//   setImageHeight(height);
//   setImageWidth(width);
// });
