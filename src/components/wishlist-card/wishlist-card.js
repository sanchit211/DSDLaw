import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import COLORS from '../../common/colors';
import {HD, WD} from '../../common/responsive';
import {customFont} from '../../common/custom-font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {globalStyles} from '../../common/global-styles';

export default function WishlistCard({
  onPress,
  image,
  name,
  price,
  inStock,
  _id,
  onPressDelete,
}) {
  return (
    <View key={_id} activeOpacity={0.7} style={styles.column}>
      <View style={{flexDirection: 'row'}}>
        <Image source={image} style={styles.productImg} />
        <View style={{width: WD(50), paddingHorizontal: WD(2)}}>
          <Text style={styles.title}>{name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.specialText}>Rs. {price}</Text>
            {/* <Text style={styles.qtyText}>
              Qty
              <Text style={{color: COLORS.primary}}> {'2'}</Text>
            </Text> */}
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={onPress}
              style={[styles.Btn, {backgroundColor: COLORS.primary}]}>
              <Text style={styles.BtnText}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[globalStyles.roundBtn, {marginTop: WD(4)}]}
              onPress={onPressDelete}>
              <MaterialIcons name="delete-forever" size={24} color={'red'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
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
    color: '#808080',
    fontSize: WD(3),
    marginTop: WD(2),
    marginRight: WD(2),
    textDecorationLine: 'line-through',
  },
  specialText: {
    fontSize: WD(4),
    color: COLORS.primary,
    fontFamily: customFont.semi_bold,
    marginTop: WD(1.5),
  },
  companyText: {
    fontSize: WD(3),
    color: COLORS.darkGray,
    fontFamily: customFont.semi_bold,
    marginVertical: WD(1),
  },
  qtyText: {
    fontSize: HD(2),
    color: COLORS.darkGray,
    fontFamily: customFont.semi_bold,
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
    fontFamily: customFont.medium,
    width: WD(50),
    color: COLORS.black,
  },
  productImg: {
    resizeMode: 'contain',
    height: HD(15),
    width: WD(25),
    marginLeft: WD(5),
  },
  Btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    width: WD(35),
    marginRight: WD(3),
    height: HD(5),
    borderRadius: 30,
    marginVertical: WD(4),
  },
  BtnText: {
    fontSize: HD(1.8),
    color: COLORS.white,
    fontFamily: customFont.bold,
  },
  arrowStyle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    elevation: 5,
    backgroundColor: COLORS.white,
    padding: WD(4),
  },
});
