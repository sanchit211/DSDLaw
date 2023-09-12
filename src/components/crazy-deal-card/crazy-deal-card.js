import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {WD, HD} from '../../common/responsive';
import {customFont} from '../../common/custom-font';
import COLORS from '../../common/colors';

export default function CrazyDealsCard({
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
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.offerText, btnTextStyles]}>{offer}</Text>
          <Text style={[styles.discountText, btnTextStyles]}>% OFF</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  column: {
    backgroundColor: 'rgba(118, 202, 122, 1)',
    height: HD(26),
    width: WD(28),
    marginTop: WD(4),
    marginBottom: WD(5),
    marginRight: WD(6),
    borderRadius: 20,
    elevation: 5,
    borderColor: COLORS.lightgray,
    borderWidth: 1,
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
    height: HD(18),
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
    marginTop: WD(-3),
    fontSize: HD(2.5),
    fontFamily: customFont.bold,
  },
  discountText: {
    marginTop: WD(-1),
    fontSize: HD(1.8),
    fontFamily: customFont.bold,
  },
});
