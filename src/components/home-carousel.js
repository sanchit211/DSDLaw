import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  createRef,
} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  LayoutAnimation,
  UIManager,
  Text,
  Image,
  Platform,
} from 'react-native';
import {ActivityIndicator} from 'react-native';
import COLORS from '../common/colors';
import {WD} from '../common/responsive';
// import {Image} from 'react-native-elements';

const HomeCarousel = ({data}) => {
  const [dimension, setDimension] = useState(Dimensions.get('window'));
  const [index, setIndex] = useState(0);
  const [dataState, setDataState] = useState(data);
  const [indicatorIndex, setindicatorIndex] = useState();

  slider = createRef();
  let intervalId = null;

  const onChange = () => {
    setDimension(Dimensions.get('window'));
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const onViewableItemsChanged = ({viewableItems, changed}) => {
    if (viewableItems.length > 0) {
      let currentIndex = viewableItems[0].index;
      if (currentIndex % data.length === data.length - 1) {
        setIndex(currentIndex), setindicatorIndex(currentIndex);
        setDataState(dataState => [...dataState, ...data]);
      } else {
        console.log(currentIndex, 'else');
        setIndex(currentIndex);
        setindicatorIndex(currentIndex);
      }
    }
  };

  const onSlideChange = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);

    const newIndex = index + 1;
    setIndex(newIndex);

    slider?.current?.scrollToIndex({
      index: index,
      animated: true,
    });
  };

  const startInterval = useCallback(() => {
    intervalId = setInterval(onSlideChange, 3000);
  }, [onSlideChange]);

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalId);
    };
  }, [onSlideChange]);

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

  const renderIndicator = () => {
    const indicators = [];
    data.map((val, key) =>
      indicators.push(
        <View
          key={key}
          style={
            key === indicatorIndex % data?.length
              ? {
                  backgroundColor: COLORS.primary,
                  fontSize: 10,
                  marginBottom: 8,
                  marginHorizontal: 1,
                  width: 15,
                  height: 10,
                  borderRadius: 50,
                }
              : {
                  backgroundColor: '#888',
                  fontSize: 10,
                  marginBottom: 8,
                  marginHorizontal: 1,
                  width: 10,
                  height: 10,
                  borderRadius: 50,
                }
          }></View>,
      ),
    );
    return indicators;
  };

  return (
    <View style={{marginVertical: WD(5)}}>
      <FlatList
        ref={slider}
        horizontal
        pagingEnabled
        snapToInterval={dimension?.width}
        snapToAlignment="center"
        decelerationRate="fast"
        bounces={false}
        showsHorizontalScrollIndicator={false}
        data={dataState}
        renderItem={({item, index}) => (
          <>
            <View key={item.id}>
              <Image
                source={{uri: `${item.url}`}}
                style={{
                  width: dimension?.width,
                  height: 250,
                  resizeMode: 'cover',
                }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </View>
          </>
        )}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        getItemLayout={(data, index) => ({
          length: dimension?.width,
          offset: dimension?.width * index,
          index,
        })}
        windowSize={1}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        removeClippedSubviews={true}
      />
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}>
        {renderIndicator()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeCarousel;
