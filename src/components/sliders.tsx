import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Slider} from '@rneui/themed';
import {setMaxPriceRange} from '../redux/features/filterSlice';
import {useDispatch, useSelector} from 'react-redux';
import {WD} from '../common/responsive';
import {current} from '@reduxjs/toolkit';
import {customFont} from '../common/custom-font';
import COLORS from '../common/colors';

type SlidersComponentProps = {};

const Sliders: React.FunctionComponent<SlidersComponentProps> = () => {
  const filter_value = useSelector((state: any) => state?.filter?.maxPrice);
  const [value, setValue] = useState(filter_value);
  const dispatch = useDispatch();

  // console.log('value', value);

  useEffect(() => {
    // dispatch(setPriceRange(value));
    dispatch(setMaxPriceRange(value));
  }, [value]);

  return (
    <>
      <View style={[styles.contentView]}>
        <Slider
          value={filter_value}
          onValueChange={setValue}
          maximumValue={50000}
          minimumValue={0}
          step={1}
          allowTouchTrack
          trackStyle={{height: 5, backgroundColor: 'transparent'}}
          thumbStyle={{height: 20, width: 20, backgroundColor: 'black'}}
        />
        <Text
          style={{
            fontFamily: customFont.regular,
            color: COLORS.black,
          }}>
          Price : Rs.{value}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentView: {
    width: '100%',
    justifyContent: 'center',
  },
  verticalContent: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    height: 500,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  subHeader: {
    backgroundColor: '#2089dc',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default Sliders;
