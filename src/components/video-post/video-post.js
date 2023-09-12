import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import {HD, WD} from '../../common/responsive';
import COLORS from '../../common/colors';
import {customFont} from '../../common/custom-font';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../common/screens';
import {ScrollView} from 'react-native-gesture-handler';
import {ModalPopup} from '../modal-popup';
import Button from '../button';
import {addProductToCart} from '../../redux/features/cartSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

const VideoPost = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const [mute, setMute] = useState(false);
  const [paused, setPaused] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const token = useSelector(state => state?.auth?.token);

  // for selected size button color change

  const handleSizeSelection = size => {
    setSelectedSize(size);
  };

  const onBuffer = buffer => {
    // console.log('Video Buffer', buffer);
  };
  const onError = error => {
    // console.log('Video Error', error);
  };

  const navigateToProductDetailsScreen = slug => {
    navigation.navigate(SCREENS.ProductDetails, {
      productSlug: slug,
    });
  };

  // add to cart
  const handleAddToCart = (productId, isFreeSize) => {
    if (!token) {
      navigation.navigate(SCREENS.Login);
    } else {
      if (isFreeSize === true) {
        let temp = {
          productId: productId,
          quantity: 1,
          isFreeSize: String(isFreeSize),
        };
        dispatch(addProductToCart(temp));
        navigation.navigate(SCREENS.Cart);
      }
      if (isFreeSize === false) {
        if (!selectedSize) {
          Alert.alert('', 'Please select size');
        } else {
          let temp = {
            productId: productId,
            size: selectedSize,
            quantity: 1,
            isFreeSize: String(isFreeSize),
          };
          dispatch(addProductToCart(temp));
          navigation.navigate(SCREENS.Cart);
        }
      }
    }
  };

  const getButtonStyle = (size, quantity) => {
    if (selectedSize === size) {
      return [styles.selectSize, styles.selectedSize];
    }
    if (quantity == 0) {
      return [
        styles.selectSize,
        {borderColor: COLORS.darkGray, backgroundColor: COLORS.gray},
      ];
    }
    return styles.selectSize;
  };

  return (
    <View
      style={{
        width: WD(94),
        marginHorizontal: WD(3),
        height: HD(80),
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setMute(!mute);
          setPaused(!paused);
        }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={paused}
          source={{uri: item?.video}}
          muted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderRadius: 20,
          }}
        />
      </TouchableOpacity>

      <Ionic
        name="volume-mute"
        style={{
          fontSize: mute ? 20 : 0,
          color: 'white',
          position: 'absolute',
          backgroundColor: 'rgba(52,52,52,0.6)',
          borderRadius: 100,
          padding: mute ? 20 : 0,
        }}
      />

      <View style={styles.boxStyles}>
        {item?.productsMapped?.length > 0 &&
          item?.productsMapped?.map(e => {
            return (
              <>
                <TouchableOpacity
                  key={e?._id}
                  activeOpacity={0.7}
                  style={styles.bottomBox}
                  onPress={() => navigateToProductDetailsScreen(e?.slug)}>
                  <View>
                    <Image
                      source={{uri: e?.images?.[0]}}
                      style={{
                        width: WD(25),
                        marginLeft: WD(5),
                        height: HD(18),
                        resizeMode: 'cover',
                        borderRadius: 20,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      paddingLeft: WD(2),
                      marginTop: WD(0),
                      width: WD(60),
                    }}>
                    <Text numberOfLines={1} style={styles.nameText}>
                      {e?.name}
                    </Text>
                    <View style={{width: WD(50)}}>
                      <Text numberOfLines={2} style={styles.priceText}>
                        {e?.description}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
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
                    <TouchableOpacity
                      onPress={() => {
                        if (e?.isFreeSize === false) {
                          setIsModalVisible(true);
                        } else {
                          handleAddToCart(e?._id, e?.isFreeSize);
                        }
                      }}>
                      <Image
                        source={require('../../assets/icons/cart_3.png')}
                        style={styles.cartIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
                {/* add to cart modal */}
                <ModalPopup isVisible={isModalVisible}>
                  <ModalPopup.Container>
                    <View style={styles.modal}>
                      <View
                        style={{
                          marginHorizontal: WD(5),
                          marginVertical: WD(10),
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: WD(5),
                          }}>
                          <Text
                            style={{
                              fontFamily: customFont.black,
                              color: COLORS.black,
                              fontSize: HD(2),
                            }}>
                            Select Size :{' '}
                          </Text>
                          <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => setIsModalVisible(false)}>
                            <View>
                              <AntDesign
                                name="close"
                                size={30}
                                color={COLORS.darkGray}
                                style={{marginTop: WD(1)}}
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginVertical: WD(3),
                          }}>
                          <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}>
                            {e?.sizeInventory?.map(item => {
                              return (
                                <TouchableOpacity
                                  disabled={item?.quantity == 0 ? true : false}
                                  onPress={() =>
                                    handleSizeSelection(item?.size)
                                  }>
                                  <View
                                    style={[
                                      getButtonStyle(item.size, item.quantity),
                                      {marginRight: WD(3)},
                                    ]}>
                                    <Text
                                      style={[
                                        styles.sizeText,
                                        {
                                          color:
                                            item?.size == selectedSize
                                              ? COLORS.white
                                              : COLORS.darkGray,
                                        },
                                      ]}>
                                      {item?.size}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              );
                            })}
                          </ScrollView>
                        </View>

                        <Button
                          onPress={() => handleAddToCart(e?._id, e?.isFreeSize)}
                          title="Add to Cart"
                          BtnStyles={{
                            marginTop: WD(8),
                            height: HD(6),
                            width: WD(50),
                            alignSelf: 'center',
                          }}
                          titleStyles={{
                            fontFamily: customFont.semi_bold,
                            fontSize: HD(2.2),
                          }}
                        />
                      </View>
                    </View>
                  </ModalPopup.Container>
                </ModalPopup>
                {/* end add to  cart modal */}
              </>
            );
          })}
      </View>
    </View>
  );
};

export default VideoPost;

const styles = StyleSheet.create({
  iconBg: {
    backgroundColor: '#D9D9D9',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectSize: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WD(50),
    borderColor: '#000',
    borderWidth: WD(0.2),
  },
  selectedSize: {
    backgroundColor: 'rgba(254, 210, 103, 0.8)',
    borderColor: COLORS.primary,
    // Set the desired background color for the selected button
  },
  sizeText: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontSize: HD(2),
    fontFamily: customFont.semi_bold,
    color: COLORS.black,
  },
  modal: {
    height: '50%',
  },
  boxStyles: {
    position: 'absolute',
    bottom: 20,
  },
  boxPosition: {
    position: 'absolute',
    right: 10,
    bottom: 250,
  },
  likesCount: {
    color: COLORS.white,
    fontFamily: customFont.semi_bold,
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: WD(5),
  },
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
    fontSize: HD(1.9),
    color: COLORS.darkGray,
    fontFamily: customFont.medium,
  },
  nameText: {
    fontSize: HD(2),
    color: COLORS.white,
    fontFamily: customFont.medium,
    width: WD(45),
  },
  cartIcon: {
    marginTop: WD(1),
    width: WD(8),
    height: HD(5),
    marginLeft: WD(3),
    resizeMode: 'contain',
  },
  bottomBox: {
    width: WD(85),
    backgroundColor: 'rgba(30, 30, 30, 0.6)',
    height: HD(22),
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: HD(2),
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
