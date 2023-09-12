import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  FlatList
} from 'react-native';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
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
import {
  dislikeVideo,
  likeVideo,
  videoData,
} from '../../redux/features/videoSlice';
import {store_key_userID} from '../../common/constants';
import {getData} from '../../common/local-storage';
import {globalStyles} from '../../common/global-styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeSingleReel = ({item, index, currentIndex}) => {

  console.log("CurrentIndex & index", currentIndex , index)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = useState(item?.productId || []);
  const scrollViewRef = useRef(null);
  const videoRef = useRef(null);
  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item.isLike);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showDiv, setShowDiv] = useState(false);
  const token = useSelector(state => state?.auth?.token);

  console.log("Current index", currentIndex)
  console.log("INNNNNDEX", index)

  const reelsCategory = useSelector(state => state?.reelsFilter?.reelsCategory);
  const reelsStyle = useSelector(state => state?.reelsFilter?.reelsStyle);
  const reelsState = useSelector(state => state?.reelsFilter?.reelsState);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  const handleSizeSelection = size => {
    setSelectedSize(size);
  };

  const onBuffer = buffer => {};
  const onError = error => {};

  const navigateToProductDetailsScreen = slug => {
    navigation.navigate(SCREENS.ProductDetails, {
      productSlug: slug,
    });
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

  const handleAddToCart = (productId, isFreeSize) => {
    if (!token) {
      Alert.alert('', 'Please login to add product to cart');
    } else {
      if (isFreeSize === false) {
        // for size product
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
      } else {
        // for free size product
        let temp = {
          productId: productId,
          quantity: 1,
          isFreeSize: String(isFreeSize),
        };
        dispatch(addProductToCart(temp));
        navigation.navigate(SCREENS.Cart);
      }
    }
  };

  const handleGetReels = async () => {
    const userID = await getData(store_key_userID);
    let reqData = {};
    if (reelsCategory?.length > 0) {
      reqData['categoryId'] = reelsCategory?.[0]?._id;
    }
    if (reelsState?.length > 0) {
      reqData['stateId'] = reelsState?.[0]?._id;
    }
    if (reelsStyle?.length > 0) {
      reqData['styleId'] = reelsStyle?.[0]?._id;
    }
    if (userID) {
      reqData['userId'] = userID;
    }
    // console.log('ReqData', reqData);
    dispatch(videoData(reqData));
  };

  


  useEffect(() => {
    handleGetReels();
  }, [reelsState, reelsCategory, reelsStyle]);



  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setMute(!mute)}
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
          paused={currentIndex === index ? false : true}
          source={{uri: item?.video}}
          muted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
      
        />
      </TouchableOpacity>

      <View style={styles.boxPosition}>
        {item?.isLiked === false ? (
          <TouchableOpacity
            style={styles.iconBg}
            onPress={() => {
              dispatch(likeVideo(item?._id));
              handleGetReels();
            }}>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.iconBg}
            onPress={() => {
              dispatch(dislikeVideo(item?._id));
              handleGetReels();
            }}>
            <AntDesign name="heart" size={24} color={'red'} />
          </TouchableOpacity>
        )}

        <Text style={styles.likesCount}>{item.NumberOfLikes}</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.ReelsFilters)}>
          <Image
            source={require('../../assets/icons/reels_filter.png')}
            style={{width: 50, height: 50, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
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
    

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
          >
          {item?.productId?.length > 0 &&
            item?.productId?.map(e => {
              return (
                <>
                  {showDiv ? (
                    <View style={styles.detailBottomBox}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={[
                            globalStyles.subHeadingText,
                            {color: '#fff', marginTop: WD(-1)},
                          ]}>
                          {' '}
                          Shop Now
                        </Text>

                        <TouchableOpacity onPress={() => handleClick()}>
                          <Entypo
                            name="cross"
                            size={24}
                            style={{
                              color: 'white',
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={[styles.whiteline, {marginTop: WD(2)}]} />
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Image
                            source={{uri: e?.images?.[0]}}
                            style={{
                              width: WD(25),
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

                          <View
                            style={{
                              flexDirection: 'row',
                            }}>
                            <>
                              <Text
                                style={[
                                  styles.priceText,
                                  {color: COLORS.white},
                                ]}>
                                {'₹'}
                                {`${e?.offeredPrice}`}
                              </Text>
                              <Text
                                style={[
                                  styles.priceText,
                                  styles.textThroughStyle,
                                ]}>
                                {'₹'}
                                {`${e?.price}`}
                              </Text>
                            </>
                          </View>
                          <TouchableOpacity
                            style={styles.detailButton}
                            onPress={() =>
                              navigateToProductDetailsScreen(e?.slug)
                            }>
                            <Text style={{color: '#fff', alignSelf: 'center'}}>
                              View Details
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={[styles.whiteline, {marginTop: WD(4)}]} />
                      <Text
                        style={[globalStyles.normalTextGray, {color: '#fff'}]}>
                        Sizes:
                      </Text>
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
                                onPress={() => handleSizeSelection(item?.size)}>
                                <View
                                  style={[
                                    getButtonStyle(item.size, item.quantity),
                                    {marginRight: WD(2)},
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
                          marginTop: WD(3),
                          height: HD(4),
                          width: WD(40),
                          alignSelf: 'center',
                        }}
                        titleStyles={{
                          fontFamily: customFont.regular,
                          fontSize: HD(2),
                        }}
                      />
                    </View>
                  ) : (
                    <View
                      key={e?._id}
                      activeOpacity={0.7}
                      style={styles.bottomBox}
                      // onPress={() => navigateToProductDetailsScreen(e?.slug)}
                    >
                      {item?.productId?.length > 1 ? (
                        <TouchableOpacity style={styles.iconLeft}>
                          <Entypo
                            name="chevron-left"
                            size={54}
                            style={{color: '#fff'}}
                          />
                        </TouchableOpacity>
                      ) : null}

                      <View>
                        <Image
                          source={{uri: e?.images?.[0]}}
                          style={{
                            width: WD(25),
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
                        <Text numberOfLines={1} style={styles.priceText}>
                          {e?.description}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <>
                            <Text
                              style={[styles.priceText, {color: COLORS.white}]}>
                              {'₹'}
                              {`${e?.offeredPrice}`}
                            </Text>
                            <Text
                              style={[
                                styles.priceText,
                                styles.textThroughStyle,
                              ]}>
                              {'₹'}
                              {`${e?.price}`}
                            </Text>
                          </>
                        </View>
                        <TouchableOpacity
                          onPress={() => handleClick()}
                          style={styles.detailButtonBottomBox}>
                          <Text style={{color: '#fff', alignSelf: 'center'}}>
                            View Details
                          </Text>
                        </TouchableOpacity>
                      </View>
                      {item?.productId?.length > 1 ? (
                        <TouchableOpacity style={styles.iconRight}>
                        <Entypo
                          name="chevron-right"
                          size={54}
                          style={{color:"#fff"}}
                        />
                        </TouchableOpacity>
                      ) : null}
                    </View>
                  )}
                </>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeSingleReel;

const styles = StyleSheet.create({
  iconLeft: {
    position: 'absolute', // Position the icon absolutely
    color: 'white',
    zIndex: 1,
    alignSelf: 'center',
  },
  iconRight: {
    position: 'absolute', // Position the icon absolutely
    color: 'white',
    zIndex: 1,
    right: 0,
    alignSelf: 'center',
  },
  container: {
    width: windowWidth,
    height: windowHeight - 150,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailButton: {
    borderWidth: WD(0.5),
    borderColor: '#fff',
    borderRadius: WD(5),
    padding: WD(1),
    width: WD(27),
    marginTop: WD(4),
  },
  detailButtonBottomBox: {
    backgroundColor: '#A6D8A8',
    borderRadius: WD(5),
    padding: WD(1),
    width: WD(27),
    marginTop: WD(4),
  },
  iconBg: {
    backgroundColor: '#D9D9D9',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteline: {
    borderBottomColor: '#fff',
    borderBottomWidth: WD(0.4),
    marginBottom: WD(4),
  },
  selectSize: {
    width: 40,
    height: 40,
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
    fontSize: HD(1.4),
    fontFamily: customFont.semi_bold,
    color: COLORS.black,
  },
  modal: {
    height: '50%',
  },
  boxStyles: {
    position: 'absolute',
    bottom: 30,
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
    backgroundColor: 'rgba(30, 30, 30, 0.6)',
    marginHorizontal: WD(1),
    height: HD(22),
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: WD(5),
    paddingVertical: HD(2),
  },
  detailBottomBox: {
    backgroundColor: 'rgba(30, 30, 30, 0.6)',
    marginHorizontal: WD(1),
    height: HD(52),
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 20,
    // flexDirection: 'row',
    paddingHorizontal: WD(5),
    paddingVertical: HD(2),
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textThroughStyle: {
    textDecorationLine: 'line-through',
    marginLeft: WD(2),
    fontSize: HD(1.8),
    marginTop: WD(0.5),
    color: COLORS.darkGray,
  },
});
