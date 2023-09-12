import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {WD, HD} from '../../common/responsive';
import {customFont} from '../../common/custom-font';
import COLORS from '../../common/colors';

export default function ProductCard({
  onPress,
  name,
  description,
  source,
  actualPrice,
  offerPrice,
  cardStyles,
  imageStyles,
  _id,
}) {
  return (
    <TouchableOpacity
      key={_id}
      style={[styles.column, cardStyles]}
      activeOpacity={0.9}
      onPress={onPress}>
      {source !== '' || source !== null || source !== 'undefined' ? (
        <FastImage source={source} style={[styles.productImg, imageStyles]} />
      ) : (
        <FastImage
          source={require('../../assets/images/placeholder.png')}
          style={[styles.productImg, imageStyles]}
        />
      )}
      <View
        style={{
          paddingLeft: WD(2),
        }}>
        <Text numberOfLines={1} style={styles.nameText}>
          {name}
        </Text>
        <Text numberOfLines={1} style={styles.subCategoryText}>
          {description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
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
              fontSize: HD(2),
              marginTop:WD(1),
              marginLeft:WD(3)
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
    marginBottom: WD(4),
    backgroundColor: '#fff',
    marginTop: WD(1),
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: COLORS.lightgray,
  },
  subCategoryText: {
    fontSize: HD(1.8),
    fontFamily: customFont.regular,
    color: COLORS.darkGray,
  },
  nameText: {
    fontSize: HD(1.8),
    fontFamily: customFont.semi_bold,
    color: COLORS.black,
  },
  priceText: {
    fontFamily: customFont.medium,
    fontSize: HD(2.5),
    color: COLORS.darkGray,
  },
  productImg: {
    height: HD(25),
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
});
