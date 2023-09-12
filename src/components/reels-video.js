import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Animated,
  Easing,
} from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {HD, WD} from '../common/responsive';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {customFont} from '../common/custom-font';
import ReelSmallCard from './reel-small-card/reel-small-card';

const ReelsVideo = props => {
  console.log('Video Props', props);
  const navigation = useNavigation();
  const [post, setPost] = useState(props.data);
  const [isLiked, setIsLiked] = useState(false);
  const isFocused = useIsFocused();
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 100,
  };

  // const onPlayPausePress = () => {
  //   setPaused(!paused);
  // };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View>
          {isFocused ? (
            <Video
              muted={true}
              source={{uri: post?.video}}
              playInBackground={false}
              style={styles.video}
              onError={e => console.log(e)}
              resizeMode={'cover'}
              repeat={true}
              paused={false}
              poster={post.videoImage}
              posterResizeMode={'cover'}
              viewabilityConfig={viewabilityConfig}
              isLooping
            />
          ) : (
            <ActivityIndicator />
          )}

          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={onLikePress}>
                <Image
                  source={require('../assets/icons/add_wishlist.png')}
                  style={styles.iconStyle}
                />
                <Text style={styles.statsLabel}>4.5K</Text>
              </TouchableOpacity>

              {/* <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={35} color="white" />
                <Text style={styles.statsLabel}>{post?.comments}</Text>
              </View> */}
            </View>
          </View>
          <ReelSmallCard item={post} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WD(100),
    height: HD(100),
  },
  iconStyle: {
    marginTop: WD(3),
    width: WD(10),
    height: HD(5),
    marginLeft: WD(3),
    resizeMode: 'contain',
  },
  videPlayButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    paddingBottom: WD(20),
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: '#fff',
    fontSize: WD(3.5),
    fontWeight: '700',
    marginBottom: WD(2),
  },
  description: {
    color: '#fff',
    fontSize: WD(3.5),
    fontWeight: '300',
    marginBottom: WD(2),
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: WD(3.5),
    marginLeft: WD(2),
  },

  //  right container
  rightContainer: {
    alignSelf: 'flex-end',
    height: HD(40),
    justifyContent: 'space-between',
    marginRight: WD(3),
  },
  profilePicture: {
    width: WD(13),
    height: HD(6.5),
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsLabel: {
    color: '#fff',
    fontFamily: customFont.regular,
    textAlign: 'center',
    fontSize: HD(1.5),
  },
});

export default ReelsVideo;
