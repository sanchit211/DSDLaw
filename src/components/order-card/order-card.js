import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {HD, WD} from '../../common/responsive';
import {customFont} from '../../common/custom-font';
import COLORS from '../../common/colors';
export default function OrderCard({
  onPress,
  image,
  orderID,
  orderDate,
  orderStatus,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.column}>
      <View style={{flexDirection: 'row'}}>
        <View style={{paddingHorizontal: WD(2), width: WD(90)}}>
          <Text
            style={{
              fontFamily: customFont.regular,
              fontSize: HD(2),
              color: COLORS.dark,
              textTransform: 'uppercase',
            }}>
            Order #OD{orderID}
          </Text>
          <Text style={styles.priceText}> Order Date : {orderDate}</Text>
          <TouchableOpacity style={styles.statusBtn}>
            <Text style={styles.statusBtnText}>{orderStatus}</Text>
          </TouchableOpacity>
        </View>
        <FastImage source={image} style={styles.productImg} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: WD(5),
  },
  priceText: {
    fontFamily: customFont.semi_bold,
    color: COLORS.primary,
    fontSize: HD(2),
    marginTop: WD(2),
    marginRight: WD(2),
  },
  column: {
    width: '90%',
    backgroundColor: '#fff',
    marginVertical: WD(2),
    marginHorizontal: WD(5),
    paddingVertical: WD(4),
    borderRadius: 5,
    elevation: 5,
    shadowColor: COLORS.darkGray,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  title: {
    fontSize: WD(4),
    fontFamily: customFont.semi_bold,
    width: WD(50),
    color: COLORS.regular,
    marginTop: WD(2),
  },
  productImg: {
    resizeMode: 'contain',
    height: HD(15),
    width: WD(25),
  },
  statusBtn: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: WD(30),
    height: HD(4),
    marginVertical: WD(4),
  },
  statusBtnText: {
    marginTop: WD(-1),
    fontSize: HD(2),
    color: COLORS.white,
    fontFamily: customFont.regular,
    textTransform: 'uppercase',
  },
});
