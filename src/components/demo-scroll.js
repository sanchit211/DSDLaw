import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import  Entypo  from 'react-native-vector-icons/Entypo';
import notification from '../data/notification';
import { HD, WD } from '../common/responsive';

const DemoScroll = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const handleScrollRight = () => {
    if (currentIndex < notification.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={notification}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.notification}</Text>
          </View>
        )}
        initialScrollIndex={currentIndex}
      />

      <TouchableOpacity onPress={handleScrollLeft} style={styles.arrowLeft}>
        <Entypo name="chevron-left" size={54} style={styles.iconLeft} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleScrollRight} style={styles.arrowRight}>
        <Entypo name="chevron-right" size={54} style={styles.iconRight} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:HD(100),
    flexDirection: 'row',
    position: 'relative',
  },
  item: {
    width: WD(100), // Adjust as needed
    alignItems: 'center',
  },
  arrowLeft: {
    position: 'absolute',
    left: 10, // Adjust as needed
    top: HD(9), // Adjust as needed
    zIndex: 1,
  },
  arrowRight: {
    position: 'absolute',
    right: 10, // Adjust as needed
    top: HD(9), // Adjust as needed
    zIndex: 1,
  },
  iconLeft: {
    color: 'black',
  },
  iconRight: {
    color: 'black',
  },
});

export default DemoScroll;
