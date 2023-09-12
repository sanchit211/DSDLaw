import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {globalStyles} from '../../common/global-styles';
import {WD} from '../../common/responsive';
import Button from '../button';

const DeliveryCard = ({image, productName, size, qty}) => {
  return (
    <>
      <View
        style={{
          borderWidth: 0.6,
          borderColor: 'rgba(217, 217, 217, 1)',
          marginTop: WD(3),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: WD(3),
          marginHorizontal: WD(5),
        }}>
        <View>
          <Image style={styles.basket} source={image} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginHorizontal: WD(3),
            width: WD(65),
          }}>
          <Text style={globalStyles.subHeadingText}>{productName}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={[globalStyles.normalText]}>Size : </Text>
            <Text style={[globalStyles.normalText]}>{size}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[globalStyles.normalText]}>Quantity : </Text>
            <Text style={[globalStyles.normalText]}>{qty}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.6,
          borderColor: 'rgba(217, 217, 217, 1)',
          marginTop: WD(3),
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  basket: {
    width: 100,
    height: 105,
    resizeMode: 'stretch',
  },
});

export default DeliveryCard;
