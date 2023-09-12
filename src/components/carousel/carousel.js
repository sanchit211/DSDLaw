import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Dimensions, FlatList, Animated} from 'react-native';
import COLORS from '../../common/colors';
import {WD} from '../../common/responsive';
import CarouselItem from './carousel-item';

const {width} = Dimensions.get('window');

const Carousel = ({data}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);
  const flatList = useRef(null);

  useEffect(() => {
    setDataList(data);
  }, []);

  if (data && data.length) {
    return (
      <View>
        <FlatList
          ref={flatList}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}},
          ])}
        />

        <View style={styles.dotView}>
          {data.map((_, i) => {
            let backgroundColor = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
              extrapolate: 'clamp',
            });

            let width = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [8, 15, 8],
              extrapolate: 'clamp',
            });

            let height = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [8, 8, 8],
              extrapolate: 'clamp',
            });
            return (
              <>
                <Animated.View
                  key={i}
                  style={{
                    height: height,
                    width: width,
                    borderRadius: 5,
                    backgroundColor: backgroundColor,
                    marginVertical: WD(5),
                    marginLeft: WD(1.5),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </>
            );
          })}
        </View>
      </View>
    );
  }

  // console.log('Please provide video');
  return null;
};

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.bg_color,
    position: 'absolute',
    zIndex: 99,
    elevation: 5,
    bottom: 5,
    alignSelf: 'center',
  },
});

export default Carousel;
