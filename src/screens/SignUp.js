import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {HD, WD} from '../common/responsive';

const SignUp = () => {
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
                  Sign Up!
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
              Initiate your search for your {'\n'} future legal advocate!
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.inputContainer}>
          <FontAwesome
            name="mobile-phone"
            size={42}
            color="white"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="What’s your phone number?"
            placeholderTextColor="#DADADA"
          />
        </View>
        <View style={styles.center}>
          <TouchableOpacity onPress={() => navigation.navigate('Client')}>
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

export default SignUp;

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
  inputContainer: {
    flexDirection: 'row',
    borderColor: '#FFFFFF',
    borderWidth: WD(0.1),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: WD(1.5),
    width: WD(80),
    height: HD(5),
    marginLeft: WD(10),
  },
  input: {
    color: '#fff',
    fontSize: HD(2),
    paddingHorizontal: WD(4),
  },
  icon: {
    marginTop: WD(1),
    marginLeft: WD(3),
  },
});
