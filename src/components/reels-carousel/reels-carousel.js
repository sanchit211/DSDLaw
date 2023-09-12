import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, StyleSheet, Dimensions, FlatList, Animated} from 'react-native';
import COLORS from '../../common/colors';
import {WD} from '../../common/responsive';
import SingleReel from '../reels-components/single-reel';
import HomeSingleReel from './home-single-reel';
const {width} = Dimensions.get('window');

function Pagination({index, arr}) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {arr.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

// for home screen video carousel
const ReelsCarousel = ({data}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);
  const flatList = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDataList(data);
  }, [data]);

  const onScroll = useCallback(event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    console.log('roundIndex--------->:', roundIndex);
    setCurrentIndex(roundIndex);

  }, []);


  if (dataList && dataList?.length) {
    return (
      <View>
          <FlatList
            nestedScrollEnabled={true}
            ref={flatList}
            keyExtractor={(item, index) => 'key' + index}
            horizontal={true}
            pagingEnabled
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            onScroll={onScroll}
            showsHorizontalScrollIndicator={false}
            data={dataList}
            renderItem={({item, index}) => (
              <HomeSingleReel
                item={item}
                index={index}
                currentIndex={currentIndex}
              />
            )}
          />
        <View style={styles.dotView}>
          {dataList?.length > 1 && (
            <Pagination index={currentIndex} arr={dataList}></Pagination>
          )}
        </View>
      </View>
    );
  }

  console.log('Please provide video');
  return null;
};

const styles = StyleSheet.create({
  dotView: {
    marginVertical: WD(5),
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  pagination: {
    bottom: -10,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 4,
  },
  paginationDot: {
    width: 50,
    height: 5,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: {backgroundColor: COLORS.primary, borderRadius: 4},
  paginationDotInactive: {backgroundColor: COLORS.lightgray},
});

export default ReelsCarousel;
