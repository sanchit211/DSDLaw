import React from 'react';
import {ActivityIndicator, View, Text, StyleSheet} from 'react-native';
import COLORS from '../common/colors';
import {WD} from '../common/responsive';
import {customFont} from '../common/custom-font';

const Loader = () => {
  return (
    <View style={styles.center}>
      <Text
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          fontFamily: customFont.semi_bold,
          fontSize: WD(5),
          marginTop: WD(5),
          color: COLORS.darkGray,
        }}>
        Hold On!
      </Text>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

const SubmitLoader = () => {
  return (
    <ActivityIndicator
      size="large"
      style={styles.center}
      color={COLORS.white}
    />
  );
};

const LoaderButton = () => {
  //return loader button component

  return <ActivityIndicator size="small" color={COLORS.primary} />;
};

const PageLoader = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size={'large'} color={COLORS.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {Loader, LoaderButton, SubmitLoader, PageLoader};
