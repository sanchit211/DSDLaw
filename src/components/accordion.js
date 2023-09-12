import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {HD, WD} from '../common/responsive';
import Entypo from 'react-native-vector-icons/Entypo';
import {hitSlop} from '../common/constants';
import {customFont} from '../common/custom-font';
import COLORS from '../common/colors';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false, active: false};
  }
  toggle() {
    this.setState({
      expanded: !this.state.expanded,
      active: !this.state.active,
    });
  }

  render() {
    return (
      <View activeOpacity={0.9} style={styles.container}>
        <>
          <View style={styles.titleContainer}>
            {this.state.active ? (
              <TouchableOpacity
                // onPress={this.props.onPressTitle}
                onPress={this.toggle.bind(this)}
                hitSlop={hitSlop}>
                <Text style={[styles.title, {color: COLORS.primary}]}>
                  {this.props.title}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                // onPress={this.props.onPressTitle}
                onPress={this.toggle.bind(this)}
                hitSlop={hitSlop}>
                <Text style={[styles.title, this.props.textStyles]}>
                  {this.props.title}
                </Text>
              </TouchableOpacity>
            )}
            <TouchableHighlight
              hitSlop={hitSlop}
              onPress={this.toggle.bind(this)}
              underlayColor="#f1f1f1">
              {this.state.expanded ? (
                <Entypo
                  name="chevron-small-up"
                  size={24}
                  color={this.props.iconColor}
                />
              ) : (
                <Entypo
                  name="chevron-small-down"
                  size={24}
                  color={this.props.iconColor}
                />
              )}
            </TouchableHighlight>
          </View>
          {this.state.expanded && <View>{this.props.children}</View>}
        </>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: WD(1),
    marginHorizontal: WD(5),
    paddingHorizontal: WD(5),
    marginVertical: WD(2),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    marginVertical: WD(2),
  },
  title: {
    fontFamily: customFont.bold,
    fontSize: HD(2),
    color: COLORS.primary,
  },
  inactiveTitle: {
    fontFamily: customFont.bold,
    fontSize: WD(4),
    color: COLORS.primary,
  },
  icon: {
    height: HD(3),
    width: WD(6),
    resizeMode: 'contain',
  },
});
