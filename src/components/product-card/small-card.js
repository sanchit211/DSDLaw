import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {WD, HD} from '../../common/responsive';
import {customFont} from '../../common/custom-font';
import COLORS from '../../common/colors';

export default function SmallCard({onPress, name, source, _id}) {
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
      <Text numberOfLines={1} style={styles.nameText}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  column: {
    width: 80,
    marginLeft: WD(4),
    backgroundColor: '#fff',
    marginTop: WD(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  subCategoryText: {
    fontSize: HD(2.2),
    fontFamily: customFont.semi_bold,
    color: COLORS.black,
  },
  nameText: {
    fontSize: HD(1.5),
    fontFamily: customFont.regular,
    color: COLORS.black,
    textAlign: 'center',
  },
  productImg: {
    width: 70,
    height: 70,
    resizeMode: 'center',
    borderRadius: 50,
    backgroundColor: COLORS.white,
  },
});
