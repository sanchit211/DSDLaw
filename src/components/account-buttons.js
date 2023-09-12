import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {HD, WD} from '../common/responsive';
import COLORS from '../common/colors';
import {customFont} from '../common/custom-font';

const AccountButton = ({
  BtnStyles,
  titleStyles,
  title,
  onPress,
  isLoading,
  image,
}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, BtnStyles]}
      onPress={onPress}
      activeOpacity={0.7}>
      {isLoading ? (
        <SubmitLoader />
      ) : (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              marginLeft: WD(4),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={image} style={styles.icon} />
              <Text style={[styles.btnText, titleStyles]}>{title}</Text>
            </View>
            <View>
              <Image
                source={require('../assets/icons/rightArrow.png')}
                style={styles.arrow}
              />
            </View>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: WD(5),
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: WD(5),
    // marginBottom: WD(3),
    borderRadius: 30,
    width: '90%',
    height: HD(6),
    borderColor: 'rgba(217, 217, 217, 1)',
    borderWidth: WD(0.3),
  },
  btnText: {
    fontSize: HD(2),
    color: COLORS.black,
    fontFamily: customFont.medium,
    marginLeft: WD(3),
  },
  icon: {
    width: WD(6),
    height: HD(6),
    resizeMode: 'contain',
  },
  arrow: {
    width: WD(2.5),
    height: HD(2.5),
    resizeMode: 'contain',
    marginTop: WD(4),
  },
});

export default AccountButton;
