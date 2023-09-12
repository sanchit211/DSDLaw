import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {HD, WD} from '../common/responsive';
import COLORS from '../common/colors';
import {customFont} from '../common/custom-font';
import {SubmitLoader} from './loader';

export function SeeMoreButton({onPress, title, BtnStyles}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.seeMoreBtn, BtnStyles]}>
      <Text style={{color: COLORS.black, fontFamily: customFont.medium}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default function Button({
  BtnStyles,
  titleStyles,
  title,
  onPress,
  isLoading,
}) {
  return (
    <TouchableOpacity
      style={[styles.btn, BtnStyles]}
      onPress={onPress}
      activeOpacity={0.7}>
      {isLoading ? (
        <SubmitLoader />
      ) : (
        <Text style={[styles.btnText, titleStyles]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.primary,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: WD(5),
    marginVertical: WD(5),
    height: HD(5),
    borderRadius: 30,
    width: '90%',

  },
  btnText: {
    // fontSize: HD(5),
    color: COLORS.white,
    fontFamily: customFont.regular,
    marginTop:WD(-1),
    alignSelf:"center",
  },
  seeMoreBtn: {
    alignSelf: 'flex-end',
    marginRight: WD(5),
    marginTop: WD(1),
  },
});
