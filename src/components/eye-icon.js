import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {WD} from '../common/responsive';
import {hitSlop} from '../common/constants';

export default function EyeIcon({onPress, showPassword}) {
  return (
    <TouchableOpacity
      hitSlop={hitSlop}
      activeOpacity={0.9}
      onPress={onPress}
      style={{marginTop: WD(3), right: 40}}>
      <Ionicons
        name={showPassword ? 'eye-off' : 'eye'}
        size={WD(5)}
        color={'#808080'}
      />
    </TouchableOpacity>
  );
}
