import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {WD, HD} from '../../common/responsive';
import {customFont} from '../../common/custom-font';
import COLORS from '../../common/colors';

export default function ReelCard({
  onPress,
  name,
  subCategory,
  source,
  actualPrice,
  offerPrice,
  _id,
}) {
  return (
    <TouchableOpacity
      key={_id}
      style={styles.column}
      activeOpacity={0.9}
      onPress={onPress}>
      {source !== '' || source !== null || source !== 'undefined' ? (
        <FastImage source={source} style={styles.productImg} />
      ) : (
        <FastImage
          source={require('../../assets/images/placeholder.png')}
          style={styles.productImg}
        />
      )}
      <View
        style={{
          paddingLeft: WD(2),
        }}>
        <Text numberOfLines={1} style={styles.subCategoryText}>
          {subCategory}
        </Text>
        <Text numberOfLines={1} style={styles.nameText}>
          {name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: WD(3),
          }}>
          <>
            <Text style={[styles.priceText, {color: COLORS.black}]}>
              {'₹'}
              {`${offerPrice}`}
            </Text>

            <Text
              style={[
                styles.priceText,
                {
                  textDecorationLine: 'line-through',
                  marginLeft: WD(2),
                  fontSize: HD(2),
                  marginTop: WD(1),
                },
              ]}>
              {'₹'}
              {`${actualPrice}`}
            </Text>
          </>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  column: {
    width: WD(44),
    marginLeft: WD(4),
    backgroundColor: 'transparent',
    marginTop: WD(1),
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: COLORS.darkGray,
  },
  subCategoryText: {
    fontSize: HD(2),
    fontFamily: customFont.semi_bold,
    color: COLORS.white,
  },
  nameText: {
    fontSize: HD(1.8),
    fontFamily: customFont.regular,
    color: COLORS.white,
  },
  productImg: {
    height: HD(25),
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  priceText: {
    fontFamily: customFont.medium,
    fontSize: HD(2.5),
    color: COLORS.darkGray,
  },
});
