import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';

const Search = () => {
  const [postData, setPostData] = useState('');
  const [tagsData, setTagsData] = useState('');

  return (
    <View style={styles.searchDetailContainer}>
      <View style={styles.searchBoxContainer}>
        <TextInput
          name="Post Search"
          type="text"
          placeholder="Search Post"
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
          style={styles.boxContainer}
          value={tagsData}
          onChangeText={value => {
            setTagsData(value);
          }}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button1}
          // onPress={() => {
          //   validateData(formData);
          // }}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
