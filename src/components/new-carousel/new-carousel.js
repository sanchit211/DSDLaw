import React, {Component} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import FlatListSlider from './FlatlistSlider';
import Preview from './preview';
import COLORS from '../../common/colors';
import {WD} from '../../common/responsive';

export default class NewCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerData: this.props.bannerData,
    };
  }

  render() {
    const screenWidth = Math.round(Dimensions.get('window').width);
    console.log('Banner data', this.state.bannerData);
    return (
      <SafeAreaView>
        <View style={styles.separator} />

        <FlatListSlider
          data={this.state.bannerData}
          width={275}
          timer={4000}
          component={<Preview />}
          indicatorActiveWidth={20}
          contentContainerStyle={styles.contentStyle}
          indicatorActiveColor={COLORS.primary}
          indicatorInActiveColor={COLORS.darkGray}
        />

        <View style={styles.separator} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    borderWidth: 0.6,
    borderColor: '#F9F9F9',
  },
  contentStyle: {
    paddingHorizontal: 16,
    paddingTop: WD(3),
  },
});
