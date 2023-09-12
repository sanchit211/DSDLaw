import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {WD, HD} from '../../common/responsive';
import {customFont} from '../../common/custom-font';
import COLORS from '../../common/colors';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';

export default function NewArrivalsCard({
  onPress,
  name,
  source,
  title,
  _id,
  video,
  isVideo,
}) {
  return (
    <TouchableOpacity
      key={_id}
      style={styles.column}
      activeOpacity={0.9}
      onPress={onPress}>
      {isVideo ? (
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Video
            repeat={true}
            resizeMode="cover"
            paused={false}
            source={{uri: video}}
            muted={true}
            style={{
              height: HD(25),
              width: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        </View>
      ) : (
        <FastImage source={source} style={styles.productImg} />
      )}

      <View style={{position: 'absolute', bottom: 40}}>
        <Text numberOfLines={2} style={styles.nameText}>
          {name}
        </Text>
      </View>

      <View>
        <Text style={[styles.buttonText]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  column: {
    width: WD(44),
    marginLeft: WD(4),
    marginBottom: WD(4),
    backgroundColor: COLORS.primary,
    marginTop: WD(1),
    borderRadius: 20,
  },
  subCategoryText: {
    fontSize: HD(2),
    fontFamily: customFont.semi_bold,
    color: COLORS.black,
  },
  nameText: {
    fontSize: HD(1.8),
    fontFamily: customFont.regular,
    color: COLORS.white,
    marginLeft: WD(2),
  },
  productImg: {
    height: HD(25),
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonText: {
    fontFamily: customFont.medium,
    fontSize: HD(2),
    paddingBottom: WD(1),
    color: COLORS.white,
    textAlign: 'center',
  },
});
