import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';

const Create = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Create Memory</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.inputViewContainer}>
          <Text style={styles.inputText}>Title</Text>
          <TextInput
            name="Title"
            type="text"
            style={styles.boxContainer}
            // value={formData.email}
            // onChangeText={value => {
            //   setFormData({...formData, email: value.trim()});
            // }}
          />
        </View>
        <View style={styles.largeInputViewContainer}>
          <Text style={styles.inputText}>Message</Text>
          <TextInput
            name="Message"
            type="text"
            multiline={true}
            style={styles.largeBoxContainer}
            // value={formData.email}
            // onChangeText={value => {
            //   setFormData({...formData, email: value.trim()});
            // }}
          />
        </View>
        <View style={styles.inputViewContainer}>
          <Text style={styles.inputText}>Tags</Text>
          <TextInput
            name="Tags"
            type="text"
            style={styles.boxContainer}
            // value={formData.email}
            // onChangeText={value => {
            //   setFormData({...formData, email: value.trim()});
            // }}
          />
        </View>
        <View style={styles.inputViewContainer}>
          <Text style={styles.inputText}>Upload Image</Text>
          <TextInput
            name="image"
            type="text"
            style={styles.boxContainer}
            // value={formData.email}
            // onChangeText={value => {
            //   setFormData({...formData, email: value.trim()});
            // }}
          />
        </View>
        <View style={styles.inputViewContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button1}
            // onPress={() => {
            //   validateData(formData);
            // }}
          >
            <Text style={styles.buttonText}>Upload Image</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Create;
