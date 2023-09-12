import {Platform, StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import {customFont} from '../../common/custom-font';
import {HD, WD} from '../../common/responsive';

export const styles = StyleSheet.create({
  // old serach bar
  // boxPadding: {
  //   paddingHorizontal: WD(5),
  // },
  // inputBox: {
  //   fontSize: HD(2),
  //   width: '95%',
  //   flexDirection: 'row',
  //   backgroundColor: '#D9D9D9',
  //   borderRadius: 14,
  //   fontFamily: customFont.regular,
  //   color: COLORS.darkGray,
  //   marginBottom: WD(5),
  //   height: HD(6),
  //   paddingHorizontal: WD(5),
  //   marginHorizontal: WD(2.5),
  // },

  // marginTop05: {
  //   marginTop: WD(2),
  // },
  // inputText: {
  //   color: COLORS.black,
  //   fontSize: HD(2),
  //   fontFamily: customFont.regular,
  //   paddingVertical: Platform.OS == 'ios' ? WD(2) : WD(1),
  //   paddingLeft: WD(3),
  //   width: '95%',
  // },
  boxPadding: {
    paddingHorizontal: WD(5),
  },
  inputBox: {
    fontSize: HD(2),
    width: '95%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    fontFamily: customFont.regular,
    color: COLORS.lightgray,
    marginBottom: WD(5),
    height: HD(6),
    paddingHorizontal: WD(5),
    marginHorizontal: WD(2.5),
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 30,
  },
  marginTop05: {
    marginTop: WD(2),
  },
  inputText: {
    color: COLORS.black,
    fontSize: HD(2),
    fontFamily: customFont.regular,
    paddingVertical: Platform.OS == 'ios' ? WD(2) : WD(1),
    paddingLeft: WD(3),
    width: '90%',
  },
});
