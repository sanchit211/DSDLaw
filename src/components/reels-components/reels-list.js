import React, {useState, useEffect} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import SingleReel from './single-reel';
import {useIsFocused} from '@react-navigation/native';

// for reels screen
const ReelsList = ({videoItems}) => {
  const focused = useIsFocused();
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log('focused', focused);

  const handleChangeIndexValue = ({index}) => {
    if (focused) {
      setCurrentIndex(index);
    } else {
      setCurrentIndex(null);
    }
  };

  return (
    <>
      {focused ? (
        <SwiperFlatList
          vertical={true}
          onChangeIndex={handleChangeIndexValue}
          data={videoItems}
          renderItem={({item, index}) => (
            <SingleReel
              item={item}
              index={index}
              currentIndex={currentIndex}
              bottomBoxStyles={{bottom: 40}}
            />
          )}
          keyExtractor={(item, index) => index}
        />
      ) : null}
    </>
  );
};

export default ReelsList;
