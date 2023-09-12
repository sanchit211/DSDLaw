import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {WD, HD} from '../../common/responsive';
import {customFont} from '../../common/custom-font';
import COLORS from '../../common/colors';

export default function StylesCard({
  onPress,
  name,
  source,
  btnStyles,
  cardStyles,
  imageStyles,
  btnTextStyles,
  offer,
  _id,
}) {
  return (
    <TouchableOpacity
      key={_id}
      style={[styles.column, cardStyles]}
      activeOpacity={0.9}
      onPress={onPress}>
      {source !== '' || source !== null || source !== 'undefined' ? (
        <FastImage source={source} style={styles.productImg} />
      ) : (
        <FastImage
          source={require('../../assets/images/placeholder.png')}
          style={[styles.productImg, imageStyles]}
        />
      )}
      <View style={[styles.button, btnStyles]}>
        <View></View>
        <Text numberOfLines={1} style={[styles.buttonText, btnTextStyles]}>
          {name}
        </Text>
        <Text style={[styles.offerText, btnTextStyles]}>{offer}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  column: {
    width: WD(28),
    height: HD(25),
    marginLeft: WD(4),
    backgroundColor: COLORS.white,
    marginTop: WD(1),
    borderRadius: 20,
    marginBottom: WD(2),
    elevation: 5,
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
    height: HD(20),
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonText: {
    fontFamily: customFont.medium,
    color: COLORS.black,
    textAlign: 'center',
    width: WD(25),
  },
  offerText: {
    fontSize: HD(2),
    fontFamily: customFont.bold,
  },
  button: {},
});
