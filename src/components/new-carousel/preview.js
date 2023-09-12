import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import {HD, WD} from '../../common/responsive';
import {customFont} from '../../common/custom-font';
import {useDispatch} from 'react-redux';
import {
  setFilterCategoriesIDs,
  setProductDiscount,
} from '../../redux/features/filterSlice';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../common/screens';

export default Preview = ({item, onPress, active}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleBannerNav = (discount, categoryId) => {
    console.log('Categry ID, discount', discount, categoryId);
    dispatch(setProductDiscount(discount));
    dispatch(setFilterCategoriesIDs([categoryId]));

    navigation.navigate(SCREENS.ProductListing, {
      heading: 'Discount',
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.videoContainer]}
      onPress={() => {
        handleBannerNav(item?.discount, item?.categoryId);
      }}>
      <View style={[styles.imageContainer, styles.shadow]}>
        <Image
          style={[
            styles.videoPreview,
            active ? {height: HD(30)} : {height: HD(20)},
          ]}
          source={{uri: item?.image}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: 280,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  videoPreview: {
    width: WD(68),
    height: HD(25),
    borderRadius: 30,
    resizeMode: 'cover',
  },
  desc: {
    fontSize: HD(1.8),
    fontFamily: customFont.regular,
    letterSpacing: 0,
    lineHeight: 24,
    color: '#FBFDA1',
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WD(80),
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
