import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {getPostsBySearchv2} from '../actions/posts';
import Loader from '../utils/Loader';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';

const Search = ({route, navigation}) => {
  const [postData, setPostData] = useState('');
  const [tagsData, setTagsData] = useState('');
  let searchPosts = useSelector(state => state?.posts?.searchPosts);
  let isLoading = useSelector(state => state?.posts?.isLoading);
  const dispatch = useDispatch();

  const onSearchPress = () => {
    if (postData?.length > 0 || tagsData?.length > 0)
      dispatch(getPostsBySearchv2({search: postData, tags: tagsData}));
  };

  return (
    <View style={styles.searchDetailContainer}>
      <Loader activeStatus={isLoading} />
      <View style={styles.searchBoxContainer}>
        <TextInput
          name="Post Search"
          type="text"
          placeholder="Search Post"
          placeholderTextColor='#d2d2d2'
          style={styles.boxContainer}
          value={postData}
          onChangeText={value => {
            setPostData(value);
          }}
        />
        <TextInput
          name="Tag Search"
          type="text"
          placeholder="Search Tags (Tag1,Tag2,....)"
          placeholderTextColor='#d2d2d2'
          style={styles.boxContainer}
          value={tagsData}
          onChangeText={value => {
            setTagsData(value);
          }}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button1}
          onPress={() => {
            onSearchPress();
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.recommendationPostsContainer}>
        {searchPosts && searchPosts?.data.length == 0 && (
          <View style={styles.emptyMessageContainer}>
            <Text  style={styles.emptyMessage}>No Posts</Text>
          </View>
        )}
        {searchPosts &&
          searchPosts?.data.length > 0 &&
          searchPosts?.data.map((post, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.imageRecContainer}
                onPress={() =>
                  navigation.navigate('PostDetail', {
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
      </ScrollView>
    </View>
  );
};

export default Search;
