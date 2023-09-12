import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import COLORS from '../../common/colors';
import {customFont} from '../../common/custom-font';
import {HD, WD} from '../../common/responsive';

const ReelSmallCard = ({item}) => {
  console.log('Item', item);

  return (
    <View style={styles.cardView}>
      <View style={{position: 'absolute', bottom: 80}}>
        <ScrollView horizontal>
          {item?.productId?.length > 0 &&
            item?.productId?.map(e => {
              return (
                <View style={styles.bottomBox} key={e?._id}>
                  <View>
                    <Image
                      source={{uri: e?.images?.[0]}}
                      style={{
                        width: WD(22),
                        height: HD(18),
                        resizeMode: 'contain',
                        borderRadius: 20,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      paddingLeft: WD(2),
                      marginTop: WD(0),
                    }}>
                    <Text numberOfLines={2} style={styles.nameText}>
                      {e?.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: WD(1),
                      }}>
                      <>
                        <Text style={[styles.priceText, {color: COLORS.white}]}>
                          {'₹'}
                          {`${e?.offeredPrice}`}
                        </Text>
                        <Text
                          style={[
                            styles.priceText,
                            {
                              textDecorationLine: 'line-through',
                              marginLeft: WD(2),
                              fontSize: HD(1.8),
                              marginTop: WD(0.5),
                              color: COLORS.darkGray,
                            },
                          ]}>
                          {'₹'}
                          {`${e?.price}`}
                        </Text>
                      </>
                    </View>
                    <Image
                      source={require('../../assets/icons/cart_3.png')}
                      style={styles.cartIcon}
                    />
                  </View>
                </View>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: WD(100),
    height: HD(80),
    backgroundColor: COLORS.white,
    paddingHorizontal: WD(4),
  },
  textView: {
    position: 'absolute',
    top: 20,
    left: 5,
  },
  image: {
    width: '100%',
    height: HD(90),
    resizeMode: 'cover',
  },
  itemTitle: {
    color: 'white',
    fontSize: WD(7),
    marginLeft: WD(5),
    marginRight: WD(20),
    marginBottom: 5,
    fontFamily: customFont.regular,
  },
  itemDescription: {
    color: 'white',
    fontSize: WD(5),
    fontFamily: customFont.bold,
    marginTop: WD(6),
    marginHorizontal: WD(5),
  },
  priceText: {
    fontSize: HD(2),
    color: COLORS.white,
    fontFamily: customFont.medium,
  },
  nameText: {
    fontSize: HD(2),
    color: COLORS.white,
    fontFamily: customFont.medium,
    width: WD(45),
  },
  cartIcon: {
    marginTop: WD(3),
    width: WD(10),
    height: HD(5),
    marginLeft: WD(3),
    resizeMode: 'contain',
  },
  bottomBox: {
    backgroundColor: 'rgba(30, 30, 30, 0.6)',
    width: WD(80),
    height: HD(22),
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 20,
    marginHorizontal: WD(8),
    flexDirection: 'row',
    paddingHorizontal: WD(5),
    paddingVertical: WD(4),
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ReelSmallCard;
