import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AlertModal from '../utils/AlertModal';
import Loader from '../utils/Loader';
import * as api from '../api/index';

const Create = ({navigation}) => {
  let stateData = useSelector(state => state);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
    name: stateData?.login?.authData?.result?.name,
  });
  const [toggleAlert, setToggleAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const options = {
    title: 'Select Image',
    includeBase64: true,
    // customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  //data:image/png;base64,iVBORw
  const uploadImage = async () => {
    const result = await launchImageLibrary(options);
    try {
      if (result?.assets[0]?.base64) {
        setFormData({
          ...formData,
          selectedFile: 'data:image/jpeg;base64,' + result?.assets[0]?.base64,
        });
      }
    } catch (error) {
      throw error;
    }
  };

  const validateData = async () => {
    if (
      formData.title.length == 0 ||
      formData.message.length == 0 ||
      formData.selectedFile.length == 0 ||
      formData.tags.length == 0
    ) {
      setToggleAlert(true);
    } else {
      setLoading(true);
      const data = await api.createPost(formData);
      console.log('data----', data);
      setFormData({title: '', message: '', tags: '', selectedFile: ''});
      setLoading(false);
      navigation.navigate('HomeNavigator', {screen: 'Home'});
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Loader activeStatus={loading} />
      <AlertModal
        message={'Please enter all the fields'}
        activeStatus={toggleAlert}
        closeModal={() => {
          setToggleAlert(false);
        }}
      />
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
            value={formData.title}
            onChangeText={value => {
              setFormData({...formData, title: value});
            }}
          />
        </View>
        <View style={styles.largeInputViewContainer}>
          <Text style={styles.inputText}>Message</Text>
          <TextInput
            name="Message"
            type="text"
            multiline={true}
            style={styles.largeBoxContainer}
            value={formData.message}
            onChangeText={value => {
              setFormData({...formData, message: value});
            }}
          />
        </View>
        <View style={styles.inputViewContainer}>
          <Text style={styles.inputText}>Tags</Text>
          <TextInput
            name="Tags"
            type="text"
            placeholder="Enter Tags (Tag1,Tag2,...)"
            style={styles.boxContainer}
            value={formData.tags}
            onChangeText={value => {
              setFormData({...formData, tags: value.split(',')});
            }}
          />
        </View>
        <View style={styles.inputViewUploadContainer}>
          {!formData.selectedFile.length ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => {
                uploadImage();
              }}>
              <Text style={styles.buttonText}>Upload Image</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.button, {backgroundColor: 'green'}]}
              onPress={() => {
                uploadImage();
              }}>
              <Text style={styles.buttonText}>Update Image</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.inputViewContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button1}
            onPress={() => {
              console.log('CHECKING DATA', formData);
              validateData();
            }}>
            <Text style={styles.buttonText}>Create Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Create;
