import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {HD, WD} from '../common/responsive';
import COLORS from '../common/colors';
import {customFont} from '../common/custom-font';

export default function SocialButton({
  BtnStyles,
  titleStyles,
  title,
  onPress,
  isLoading,
  image,
}) {
  return (
    <TouchableOpacity style={[styles.btn, {BtnStyles}]} onPress={onPress}>
      <Image source={image} style={styles.icon} />
      <Text style={[styles.btnText, titleStyles]}>{title}</Text>
      <View></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    backgroundColor: COLORS.darkGray,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WD(2),
    marginHorizontal: WD(5),
    marginBottom: WD(3),
    borderRadius: 30,
    width: '90%',
    height: HD(5),
  },
  btnText: {
    fontSize: HD(2),
    color: COLORS.white,
    fontFamily: customFont.medium,
  },
  icon: {
    width: WD(7),
    height: HD(5),
    resizeMode: 'contain',
  },
});
