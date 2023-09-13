import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {HD, WD} from '../common/responsive';
import {useNavigation} from '@react-navigation/native';

const Client = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#010035'}}>
      <ImageBackground
        resizeMode="cover"
        style={styles.bgImage}
        source={require('../assets/images/bg.png')}>
        <ImageBackground
          resizeMode="cover"
          style={styles.circle}
          source={require('../assets/images/halfCircle.png')}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <LinearGradient
              colors={['#FAC873', '#FBB640', '#F6A10F']}
              style={{
                borderRadius: WD(5), // Set the borderRadius here
                padding: WD(2),
                marginTop: WD(10),
                width: WD(40),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: HD(2.5),
                    color: '#fff',
                  }}>
                  Welcome !
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: HD(2.4),
                marginTop: WD(10),
                color: '#fff',
                textAlign: 'center',
                lineHeight: WD(6),
              }}>
              Are you new client {'\n'} or Existing client ?
            </Text>
          </View>
        </ImageBackground>

        <View
          style={{
            flexDirection: 'row',
            // marginTop: WD(10),
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#043171',
              padding: WD(10),
              borderRadius: WD(1),
            }}>
            <AntDesign
              name="adduser"
              size={48}
              color="white"
              style={{alignSelf: 'center'}}
            />
            <Text
              style={{alignSelf: 'center', fontSize: HD(2.4), color: '#fff'}}>
              Existing Client
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#043171',
              padding: WD(10),
              borderRadius: WD(1),
            }}>
            <AntDesign
              name="user"
              size={48}
              color="white"
              style={{alignSelf: 'center'}}
            />
            <Text
              style={{alignSelf: 'center', fontSize: HD(2.4), color: '#fff'}}>
              New Client
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <LinearGradient
              colors={['#FAC873', '#FBB640', '#F6A10F']}
              style={{
                borderRadius: WD(10), // Set the borderRadius here
                padding: WD(2),
                marginTop: WD(40),
                width: WD(9),

                // Set the padding here
              }}>
              <AntDesign name="arrowright" size={42} color="black" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Client;

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  circle: {
    width: '100%',
    height: HD(40),
  },
  center: {
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
