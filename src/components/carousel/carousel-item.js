import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import COLORS from '../../common/colors';
import {HD, WD} from '../../common/responsive';

const CarouselItem = ({item}) => {
  return (
    <View style={styles.cardView} key={item}>
      <Image style={styles.image} source={{uri: item}} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: WD(100),
    height: HD(70),
    backgroundColor: COLORS.bg_color,
  },
  image: {
    width: WD(100),
    height: HD(70),
    resizeMode: 'cover',
  },
});

export default CarouselItem;
