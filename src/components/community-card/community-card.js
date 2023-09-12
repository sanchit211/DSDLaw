import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {HD, WD} from '../../common/responsive';
import {globalStyles} from '../../common/global-styles';
import {ModalPopup} from '../modal-popup';
import COLORS from '../../common/colors';
import VideoPost from '../video-post/video-post';
import {customFont} from '../../common/custom-font';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../button';
import {addProductToCart} from '../../redux/features/cartSlice';
import SCREENS from '../../common/screens';
import Toast from 'react-native-simple-toast';

const CommunityCard = ({
  _id,
  profile,
  image,
  name,
  time,
  desc,
  like,
  comment,
  role,
  productImages,
  productVideos,
  onPressPin,
  onPressLikeButton,
  isUser,
  onPressUserPostEdit,
  isAdmin,
  isLiked,
  onPressComment,
  onPressDeletePost,
  postRole,
  onPressVendorEditPost,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeArr, setSizeArr] = useState();
  const [productId, setProductId] = useState();
  const [isFreeSize, setIsFreeSize] = useState();
  const token = useSelector(state => state.auth.token);

  const handleSizeSelection = size => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    try {
      // console.log('Add to cart');
      // console.log('free size', isFreeSize);
      // console.log('productId', productId);
      if (!token) {
        Toast.show('Please login to add products to cart', Toast.SHORT);
      } else {
        if (isFreeSize === false) {
          if (!selectedSize) {
            Toast.show('Please select size', Toast.SHORT);
          } else {
            let temp = {
              productId: productId,
              size: selectedSize,
              quantity: 1,
              isFreeSize: String(isFreeSize),
            };
            dispatch(addProductToCart(temp)).then(data => {
              if (
                data?.payload?.status === 201 ||
                data?.payload?.status === 200
              ) {
                setIsModalVisible(false);
                navigation.navigate(SCREENS.Cart);
              }
            });
          }
        } else {
          let temp = {
            productId: productId,
            quantity: 1,
            isFreeSize: String(isFreeSize),
          };
          dispatch(addProductToCart(temp)).then(data => {
            if (
              data?.payload?.status === 201 ||
              data?.payload?.status === 200
            ) {
              setIsModalVisible(false);
              navigation.navigate(SCREENS.Cart);
            }
          });
        }
      }
    } catch (error) {
      console.log('Add to cart error ', error);
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

  const renderFiveImage = () => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          {productImages?.slice(0, 2).map(item => {
            // console.log(
            //   'product 5 images item inventory -----',
            //   item?.productsMapped[0]?.sizeInventory,
            // );
            return (
              <>
                <View
                  style={{marginRight: WD(3), width: WD(46), height: HD(30)}}>
                  <Image
                    source={{uri: item?.image}}
                    style={{
                      width: WD(46),
                      height: HD(30),
                      resizeMode: 'cover',
                      borderRadius: 10,
                    }}
                  />

                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      right: 5,
                    }}
                    onPress={() => {
                      setSizeArr(item?.productsMapped[0]?.sizeInventory);
                      setProductId(item?.productsMapped?.[0]?._id);
                      setIsFreeSize(item?.productsMapped?.[0]?.isFreeSize);
                      if (item?.productsMapped?.[0]?.isFreeSize === false) {
                        setIsModalVisible(true);
                      } else {
                        let temp = {
                          productId: item?.productsMapped?.[0]?._id,
                          quantity: 1,
                          isFreeSize: String(
                            item?.productsMapped?.[0]?.isFreeSize,
                          ),
                        };
                        dispatch(addProductToCart(temp)).then(data => {
                          if (
                            data?.payload?.status === 201 ||
                            data?.payload?.status === 200
                          ) {
                            setIsModalVisible(false);
                            navigation.navigate(SCREENS.Cart);
                          }
                        });
                      }
                    }}>
                    <Image
                      source={require('../../assets/icons/white_cart.png')}
                      style={styles.cartIcon}
                    />
                  </TouchableOpacity>
                  <View style={[styles.blackStrip]}>
                    <Text style={styles.offeredPriceText}>
                      {'₹'}
                      {item?.productsMapped?.[0]?.offeredPrice}
                    </Text>
                    <Text style={styles.priceText}>
                      {'₹'}
                      {item?.productsMapped?.[0]?.price}
                    </Text>
                  </View>
                </View>
              </>
            );
          })}
        </View>

        <View style={{flexDirection: 'row'}}>
          {productImages.slice(2, 5).map(item => {
            return (
              <>
                <View style={{marginRight: WD(3), marginTop: WD(3)}}>
                  <Image
                    source={{uri: item?.image}}
                    style={{
                      width: WD(29.5),
                      height: HD(20),
                      resizeMode: 'cover',
                      borderRadius: 10,
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      right: 5,
                    }}
                    onPress={() => {
                      setSizeArr(item?.productsMapped[0]?.sizeInventory);
                      setProductId(item?.productsMapped?.[0]?._id);
                      setIsFreeSize(item?.productsMapped?.[0]?.isFreeSize);
                      if (item?.productsMapped?.[0]?.isFreeSize === false) {
                        setIsModalVisible(true);
                      } else {
                        let temp = {
                          productId: item?.productsMapped?.[0]?._id,
                          quantity: 1,
                          isFreeSize: String(
                            item?.productsMapped?.[0]?.isFreeSize,
                          ),
                        };
                        dispatch(addProductToCart(temp)).then(data => {
                          if (
                            data?.payload?.status === 201 ||
                            data?.payload?.status === 200
                          ) {
                            setIsModalVisible(false);
                            navigation.navigate(SCREENS.Cart);
                          }
                        });
                      }
                    }}>
                    <Image
                      source={require('../../assets/icons/white_cart.png')}
                      style={styles.cartIcon}
                    />
                  </TouchableOpacity>
                  <View style={[styles.blackStripForSmall]}>
                    <Text style={styles.offeredPriceText}>
                      {'₹'}
                      {item?.productsMapped?.[0]?.offeredPrice}
                    </Text>
                    <Text style={styles.priceText}>
                      {'₹'}
                      {item?.productsMapped?.[0]?.price}
                    </Text>
                  </View>
                </View>
              </>
            );
          })}
        </View>
      </View>
    );
  };

  // navigation to details page
  const navigateToProductDetailsScreen = slug => {
    navigation.navigate(SCREENS.ProductDetails, {
      productSlug: slug,
    });
  };

  const renderFourImage = () => {
    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            {productImages?.map(item => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigateToProductDetailsScreen(
                        item?.productsMapped[0]?.slug,
                      )
                    }>
                    <View
                      style={{
                        marginRight: WD(3),
                        width: WD(94),
                        height: HD(40),
                      }}>
                      <Image
                        source={{uri: item?.image}}
                        style={{
                          width: WD(94),
                          height: HD(40),
                          resizeMode: 'cover',
                          borderRadius: 10,
                        }}
                      />

                      <TouchableOpacity
                        style={{
                          position: 'absolute',
                          right: 5,
                        }}
                        onPress={() => {
                          setSizeArr(item?.productsMapped[0]?.sizeInventory);
                          setProductId(item?.productsMapped?.[0]?._id);
                          setIsFreeSize(item?.productsMapped?.[0]?.isFreeSize);
                          if (item?.productsMapped?.[0]?.isFreeSize === false) {
                            setIsModalVisible(true);
                          } else {
                            let temp = {
                              productId: item?.productsMapped?.[0]?._id,
                              quantity: 1,
                              isFreeSize: String(
                                item?.productsMapped?.[0]?.isFreeSize,
                              ),
                            };
                            dispatch(addProductToCart(temp)).then(data => {
                              if (
                                data?.payload?.status === 201 ||
                                data?.payload?.status === 200
                              ) {
                                setIsModalVisible(false);
                                navigation.navigate(SCREENS.Cart);
                              }
                            });
                          }
                        }}>
                        <Image
                          source={require('../../assets/icons/white_cart.png')}
                          style={styles.cartIcon}
                        />
                      </TouchableOpacity>

                      <View style={[styles.blackStrip, {width: WD(94)}]}>
                        <Text style={styles.offeredPriceText}>
                          {'₹'}
                          {item?.productsMapped?.[0]?.offeredPrice}
                        </Text>
                        <Text style={styles.priceText}>
                          {'₹'}
                          {item?.productsMapped?.[0]?.price}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  };

  const modalAddToCart = () => {
    //console.log('Size Arr', sizeArr);
    return (
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
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {sizeArr?.map(item => {
                    return (
                      <TouchableOpacity
                        disabled={item?.quantity == 0 ? true : false}
                        onPress={() => handleSizeSelection(item?.size)}>
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
                onPress={() => handleAddToCart()}
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
    );
  };

  // console.log('productImages', productImages);
  // console.log('productVideos', productVideos);

  return (
    <>
      {isModalVisible && modalAddToCart()}
      <View style={{marginTop: WD(6)}} key={_id}>
        {/* logo and name with time ============= */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: WD(4),
          }}>
          <View style={{flexDirection: 'row'}}>
            {profile == '' ? (
              <Image
                style={styles.profile}
                source={require('../../assets/images/user.png')}
              />
            ) : (
              <Image style={styles.profile} source={profile} />
            )}

            <View style={{marginLeft: WD(4), width: WD(45)}}>
              <Text style={[globalStyles.subHeadingText]}>
                {name ? name : 'User'}
              </Text>
              <Text
                style={[globalStyles.normalTextGray, {color: COLORS.black}]}>
                {time} ({postRole})
              </Text>
            </View>
          </View>
          {postRole === 'vendor' && (
            <View>
              <Image
                style={styles.seller}
                source={require('../../assets/icons/seller.png')}
              />
            </View>
          )}

          {isUser && role === 'user' ? (
            <TouchableOpacity onPress={onPressUserPostEdit}>
              <Feather
                name="edit-2"
                size={20}
                style={{marginTop: WD(5)}}
                color="black"
              />
            </TouchableOpacity>
          ) : null}

          {isUser && role === 'vendor' && productImages?.length > 0 ? (
            <TouchableOpacity onPress={onPressVendorEditPost}>
              <Feather
                name="edit-2"
                size={20}
                style={{marginTop: WD(5)}}
                color="black"
              />
            </TouchableOpacity>
          ) : null}

          {isUser &&
          role === 'vendor' &&
          productVideos?.productsMapped?.length > 0 ? (
            <TouchableOpacity onPress={onPressVendorEditPost}>
              <Feather
                name="edit-2"
                size={20}
                style={{marginTop: WD(5)}}
                color="black"
              />
            </TouchableOpacity>
          ) : null}

          {isUser || role === 'admin' ? (
            <TouchableOpacity onPress={onPressDeletePost}>
              <AntDesign
                name="delete"
                size={20}
                style={{marginTop: WD(5)}}
                color="red"
              />
            </TouchableOpacity>
          ) : null}

          {isAdmin && role == 'admin' ? (
            <TouchableOpacity onPress={onPressPin}>
              <Image
                style={styles.pinIcon}
                source={require('../../assets/icons/pin.png')}
              />
            </TouchableOpacity>
          ) : null}
        </View>

        {/* description */}
        <View
          style={{
            marginTop: WD(3),
            marginHorizontal: WD(3),
          }}>
          <Text style={[globalStyles.normalTextGray, {color: COLORS.black}]}>
            {desc}
          </Text>
        </View>

        {/* Main banner Image */}
        <View style={styles.imageView}>
          {/* single image */}
          {image.uri ? <Image style={styles.mainImg} source={image} /> : ''}

          {productImages?.length == 5 ? renderFiveImage() : null}
          {productImages?.length === 3 ||
          productImages?.length === 4 ||
          productImages?.length === 2 ||
          productImages?.length === 1
            ? renderFourImage()
            : null}
        </View>

        <View>
          {productVideos?.video ? <VideoPost item={productVideos} /> : null}
        </View>

        {/* ========== user Interaction buttons =========== */}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: WD(6),
            marginLeft: WD(10),
          }}>
          <TouchableOpacity onPress={onPressLikeButton}>
            <View style={{flexDirection: 'row', marginTop: WD(0)}}>
              {!isLiked ? (
                <AntDesign
                  name="hearto"
                  size={22}
                  color={'rgba(70, 70, 70, 1)'}
                />
              ) : (
                <AntDesign name="heart" size={22} color={COLORS.red} />
              )}

              <Text style={{marginLeft: WD(1.5)}}>{like}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressComment}>
            <View style={{flexDirection: 'row', marginHorizontal: WD(5)}}>
              {/* <Image
                style={styles.btnIcons}
                source={require('../../assets/icons/messageIcon.png')}
              /> */}
                <MaterialCommunityIcons
                  name="message-text-outline"
                  size={22}
                  color={'rgba(70, 70, 70, 1)'}
                />
              <Text style={{marginLeft: WD(1.5)}}>{comment}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
            <AntDesign
                  name="sharealt"
                  size={22}
                  color={'rgba(70, 70, 70, 1)'}
                />
              {/* <Image
                style={styles.btnIcons}
                source={require('../../assets/icons/shareIcon.png')}
              /> */}
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 0.6,
            borderColor: 'rgba(217, 217, 217, 1)',
            marginTop: WD(4),
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cartIcon: {
    marginTop: WD(3),
    width: WD(10),
    height: HD(5),
    marginLeft: WD(3),
    resizeMode: 'contain',
  },
  imageView: {
    marginHorizontal: WD(3),
    marginTop: WD(6),
  },
  mainImg: {
    width: WD(94),
    height: HD(50),
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
  },
  profile: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    backgroundColor: COLORS.lightgray,
    borderRadius: 50,
    marginLeft: WD(2),
  },
  btnIcons: {
    width: WD(6),
    height: HD(2.7),
    resizeMode: 'contain',
    marginRight: WD(1),
  },
  seller: {
    width: WD(10),
    height: HD(5),
    resizeMode: 'cover',
    marginTop: WD(2),
  },
  pinIcon: {
    width: WD(5),
    height: HD(5),
    resizeMode: 'contain',
    marginTop: WD(2),
  },
  blackStrip: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: WD(46),
    height: HD(5),
    bottom: 0,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  blackStripForSmall: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: WD(29),
    height: HD(5),
    bottom: 0,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  offeredPriceText: {
    color: COLORS.white,
    fontSize: HD(2.4),
    fontFamily: customFont.semi_bold,
  },
  priceText: {
    color: COLORS.white,
    fontSize: HD(1.9),
    fontFamily: customFont.semi_bold,
    textDecorationLine: 'line-through',
    marginLeft: WD(2),
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
});
export default CommunityCard;
