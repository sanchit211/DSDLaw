import {Platform, StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import {customFont} from '../../common/custom-font';
import {HD, WD} from '../../common/responsive';

export const styles = StyleSheet.create({
  boxPadding: {
    paddingHorizontal: WD(5),
  },
  inputBox: {
    color: '#888888',
    fontSize: HD(2),
    width: '100%',
    height: HD(6),
    backgroundColor: '#D9D9D9',
    paddingHorizontal: WD(3),
    borderRadius: 14,
    fontFamily: customFont.regular,
    color: COLORS.darkGray,
    marginBottom: WD(5),
    paddingVertical: WD(2),
  },
  marginTop05: {
    marginTop: WD(2),
  },
  inputText: {
    color: COLORS.black,
    fontSize: HD(2),
    fontFamily: customFont.regular,
    marginBottom: WD(2),
    paddingVertical: WD(2),
  },
});
