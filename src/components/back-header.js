import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {WD, HD} from '../common/responsive';
import COLORS from '../common/colors';
import {customFont} from '../common/custom-font';
import {hitSlop} from '../common/constants';
import SCREENS from '../common/screens';
import {useSelector} from 'react-redux';

export default function BackHeader({
  heading,
  onPress,
  showIcons,
  showBackBtn,
  showLogo,
  headerContainerStyles,
}) {
  const navigation = useNavigation();
  const token = useSelector(state => state.auth.token);
  const cartCount = useSelector(state => state?.cart?.cartCount);
  console.log("Cart count " , cartCount)

  return (
    <>
      <SafeAreaView style={[styles.container, headerContainerStyles]}>
        <StatusBar
          animated={true}
          backgroundColor={COLORS.white}
          barStyle="dark-content"
        />
        {showBackBtn && (
          <TouchableOpacity
            style={{marginTop: WD(5)}}
            onPress={() => navigation.goBack()}
            hitSlop={hitSlop}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        )}

        {showLogo && (
          <TouchableOpacity>
            <Image
              style={styles.logo}
              source={require('../assets/images/micra.png')}
            />
          </TouchableOpacity>
        )}

        {heading && (
          <Text style={styles.heading} numberOfLines={1}>
            {heading}
          </Text>
        )}
        <View style={{width: WD(5)}}></View>

        {showIcons && (
          <View
            style={{
              flexDirection: 'row',
              width: WD(30),
              marginTop: WD(3),
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.Notifications)}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/notification_2.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                if (token) {
                  navigation.navigate(SCREENS.Account);
                } else {
                  navigation.navigate(SCREENS.Login);
                }
              }}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/user.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (token) {
                  navigation.navigate(SCREENS.Cart);
                } else {
                  navigation.navigate(SCREENS.Login);
                }
              }}>
                <View style={{flexDirection:"row"}}>
               
             
             <Image
               style={styles.icon}
               source={require('../assets/icons/cart_2.png')}
             />
             {/* <View style={{backgroundColor:"#A6D8A8", padding:WD(2), borderRadius:WD(20), height:WD(4) , width:WD(3)}}> */}
             <Text style={{color:"#000"}}>{cartCount}</Text>
             {/* </View> */}
             
                </View>
                
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
      <View
        style={{
          borderWidth: 0.6,
          borderColor: '#C8C8C8',
          marginBottom: WD(2),
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingTop: WD(2),
    justifyContent: 'space-between',
    paddingHorizontal: WD(4),
  },
  heading: {
    fontSize: HD(2.5),
    color: COLORS.black,
    fontFamily: customFont.semi_bold,
    marginHorizontal: WD(4),
    letterSpacing: 0.2,
    marginVertical: WD(3),
    // textAlign: 'center',
  },
  icon: {
    width: WD(5),
    height: HD(5),
    resizeMode: 'contain',
  },
  logo: {
    width: WD(20),
    height: HD(8),
    resizeMode: 'contain',
  },
});
