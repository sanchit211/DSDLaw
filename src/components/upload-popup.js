import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

import {HD, WD} from '../common/responsive';
import {customFont} from '../common/custom-font';
import COLORS from '../common/colors';

function UploadPopup(props) {
  const {handleCamera, handleGallery, visible, setVisible} = props;

  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={() => setVisible(!visible)}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.8)',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: WD(5),
            elevation: 10,
            marginHorizontal: WD(5),
            width: '100%',
            shadowOffset: {width: 2, height: 1},
            shadowColor: '#bbbbbb',
            shadowOpacity: 1,
          }}>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: WD(5),
              borderBottomColor: '#DEDEDE',
              borderBottomWidth: 1,
              marginHorizontal: WD(5),
            }}>
            <Text
              style={{
                fontSize: HD(2.5),
                color: '#000',
                fontFamily: customFont.semi_bold,
              }}>
              Upload Photo
            </Text>
            <Text
              style={{
                fontSize: HD(2),
                marginTop: WD(10),
                fontFamily: customFont.regular,
              }}>
              Choose Your Profile Picture
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => handleCamera()}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: WD(5),
              marginHorizontal: WD(5),
              borderBottomColor: '#DEDEDE',
              borderBottomWidth: 1,
            }}>
            <Text
              style={{
                fontSize: HD(2),
                color: '#75b9f6',
                fontFamily: customFont.semi_bold,
              }}>
              Take Photo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleGallery()}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: WD(5),
              marginHorizontal: WD(5),
              borderBottomColor: '#DEDEDE',
              borderBottomWidth: 1,
            }}>
            <Text
              style={{
                fontSize: HD(2),
                color: '#75b9f6',
                fontFamily: customFont.semi_bold,
              }}>
              Choose From Your Library
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: WD(5),
              marginHorizontal: WD(5),
              borderBottomColor: '#DEDEDE',
              borderBottomWidth: 1,
            }}>
            <Text
              style={{
                fontSize: HD(2),
                color: '#75b9f6',
                fontFamily: customFont.semi_bold,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
export default UploadPopup;
