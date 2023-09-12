import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {globalStyles} from '../../common/global-styles';
import {HD, WD} from '../../common/responsive';
import SCREENS from '../../common/screens';
import {useNavigation} from '@react-navigation/native';
import {customFont} from '../../common/custom-font';

export default function SearchBar({}) {
  const navigation = useNavigation();
  return (
    // old serach bar

    // <View style={styles.inputBox}>
    //   <View style={{marginTop: WD(3)}}>
    //     <AntDesign name="search1" size={24} color="black" />
    //   </View>

    //   <TextInput
    //     style={styles.inputText}
    //     onChangeText={onChangeText}
    //     value={value}
    //     keyboardType={keyboardType}
    //     placeholder={placeholder}
    //     secureTextEntry={secureTextEntry}
    //     placeholderTextColor={'#888888'}
    //   />
    // </View>
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.inputBox}
      onPress={() => navigation.navigate(SCREENS.SearchProducts)}>
      <View style={styles.inputText} placeholderTextColor={'#888888'}>
        <Text
          style={{
            marginVertical: WD(1),
            fontFamily: customFont.regular,
            fontSize: HD(2),
          }}>
          Search Products..
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#A6D8A8',
          justifyContent: 'center',
          paddingHorizontal: WD(3.6),
          borderTopRightRadius: 30,
          borderBottomEndRadius: 30,
        }}>
        <AntDesign name="search1" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
}
