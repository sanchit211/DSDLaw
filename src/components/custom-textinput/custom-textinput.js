import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import EyeIcon from '../eye-icon';

export default function CustomTextInput({
  label,
  value,
  onChangeText,
  keyboardType,
  placeholder,
  secureTextEntry,
  onPress,
  showPassword,
  showEye,
  editable,
  multiline,
  inputBoxStyle,
  autoCapitalize,
  maxLength,
}) {
  return (
    <View style={[styles.boxPadding]}>
      {label && <Text style={styles.inputText}>{label}</Text>}
      <View style={{flexDirection: 'row'}}>
        <TextInput
          multiline={multiline}
          style={[styles.inputBox, {inputBoxStyle}]}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={'#888888'}
          editable={editable}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
        />
        {showEye && <EyeIcon onPress={onPress} showPassword={showPassword} />}
      </View>
    </View>
  );
}
