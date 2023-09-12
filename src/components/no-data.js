import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {WD, HD} from '../common/responsive';
import {customFont} from '../common/custom-font';
import COLORS from '../common/colors';

export default function NoData({image, heading1, heading2}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageCart} />
      <Text style={styles.heading}>{heading1}</Text>
      <Text style={styles.heading2}>{heading2} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: HD(10),
  },
  heading: {
    fontSize: HD(2),
    fontFamily: customFont.semi_bold,
    textAlign: 'center',
    marginVertical: WD(2),
    color: COLORS.dark,
  },
  heading2: {
    textAlign: 'center',
    fontFamily: customFont.regular,
    fontSize: HD(1.8),
    marginHorizontal: WD(18),
    color: '#C4C4C4',
  },
  imageCart: {
    height: HD(15),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
