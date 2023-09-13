import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {HD, WD} from '../common/responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#010035'}}>
      <ImageBackground
        resizeMode="cover"
        style={styles.bgImage}
        source={require('../assets/images/bg.png')}>
        <View style={styles.center}>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.png')}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Client')}>
            <LinearGradient
              colors={['#FAC873', '#FBB640', '#F6A10F']}
              style={{
                borderRadius: WD(10), // Set the borderRadius here
                padding: WD(2),
                marginTop: WD(20), // Set the padding here
              }}>
              <AntDesign name="arrowright" size={48} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  center: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  logo: {
    width: WD(35),
    height: HD(22),
  },
});
