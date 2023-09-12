import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {HD, WD} from '../../common/responsive';
import COLORS from '../../common/colors';
import {customFont} from '../../common/custom-font';
// import products from '../../data/products';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {hitSlop} from '../../common/constants';

const AddCartCard = ({
  image,
  productName,
  productDesc,
  offerPrice,
  actualPrice,
  size,
  onPressRemove,
  onPressWishlist,
  onPressName,
  onPressMinus,
  onPressPlus,
  quantity,
  totalProductPrice,
  isFreeSize,
}) => {
  return (
    <>
      <View
        style={{
          borderWidth: 0.6,
          borderColor: 'rgba(217, 217, 217, 1)',
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.imageView}>
          <Image style={styles.basket} source={image} />
        </View>
        <View style={styles.descView}>
          <TouchableOpacity onPress={onPressName}>
            <Text style={styles.normalText}>{productName}</Text>
            <Text numberOfLines={1} style={styles.greyText}>
              {productDesc}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginTop: WD(1),
              // marginLeft: WD(3),
            }}>
            <>
              <Text style={[styles.priceText]}>
                {'₹'}
                {`${offerPrice}`}
              </Text>

              <Text
                style={[
                  styles.greyLineText,
                  {
                    textDecorationLine: 'line-through',
                    marginLeft: WD(2),
                    // fontSize: HD(2),
                    marginTop: WD(1),
                  },
                ]}>
                {'₹'}
                {`${actualPrice}`}
              </Text>
            </>
          </View>
          <Text
            style={[
              styles.greyLineText,
              {
                marginTop: WD(1),
                fontFamily: customFont.semi_bold,
              },
            ]}>
            Total: {'₹'}
            {`${totalProductPrice}`}
          </Text>

          <View style={styles.button}>
            <TouchableOpacity hitSlop={hitSlop} onPress={onPressMinus}>
              <AntDesign
                name="minus"
                size={20}
                color="#787885"
                style={{marginTop: WD(1)}}
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>{quantity}</Text>
            <TouchableOpacity hitSlop={hitSlop} onPress={onPressPlus}>
              <AntDesign
                name="plus"
                size={20}
                color="#787885"
                style={{marginTop: WD(1)}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: WD(4)}}>
            <Text style={[styles.greySmallText]}> Size:</Text>
            <Text
              style={[
                styles.blackSmallText,
                {marginLeft: WD(2), textTransform: 'uppercase'},
              ]}>
              {isFreeSize ? 'free Size' : size}{' '}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderWidth: 0.6,
          borderColor: 'rgba(217, 217, 217, 1)',
          marginTop: WD(4),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderBottomWidth: WD(0.4),
          borderBottomColor: 'rgba(217, 217, 217, 1)',
          marginHorizontal: WD(5),
          paddingVertical: WD(3),
          marginBottom: WD(3.5),
        }}>
        <TouchableOpacity onPress={onPressRemove}>
          <Text style={styles.normalText}>Remove</Text>
        </TouchableOpacity>
        <View
          style={{borderColor: 'rgba(217, 217, 217, 1)', borderWidth: WD(0.2)}}
        />
        <TouchableOpacity onPress={onPressWishlist}>
          <Text style={styles.normalText}>Wishlist</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageView: {
    marginHorizontal: WD(3),
    marginTop: WD(5),
  },
  descView: {
    marginTop: WD(5),
    width: WD(50),
  },
  basket: {
    width: 140,
    height: 140,
    resizeMode: 'stretch',
  },
  normalText: {
    fontSize: HD(2),
    fontFamily: customFont.regular,
    color: COLORS.black,
  },
  greyText: {
    fontSize: HD(2),
    fontFamily: customFont.regular,
    color: 'rgba(136, 136, 136, 1)',
  },
  blackSmallText: {
    fontSize: HD(1.8),
    fontFamily: customFont.regular,
    color: '#000',
  },
  greyLineText: {
    fontSize: HD(1.6),
    fontFamily: customFont.regular,
    color: 'rgba(136, 136, 136, 1)',
  },
  greySmallText: {
    fontSize: HD(1.8),
    fontFamily: customFont.regular,
    color: 'rgba(136, 136, 136, 1)',
  },
  priceText: {
    fontSize: HD(2),
    fontFamily: customFont.regular,
    color: COLORS.black,
  },
  button: {
    marginTop: WD(3),
    marginLeft: WD(1),
    borderRadius: 5,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: HD(1),
    paddingVertical: HD(0.5),
    width: WD(29),
  },
  buttonText: {
    fontSize: HD(2),
    marginTop: WD(-1),
    fontFamily: customFont.semi_bold,
    color: COLORS.black,
    textAlign: 'center',
  },
});

export default AddCartCard;
