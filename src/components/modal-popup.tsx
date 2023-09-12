import React from 'react';
import {StyleSheet, View} from 'react-native';
import RNModal from 'react-native-modal';
import {WD} from '../common/responsive';
import COLORS from '../common/colors';

type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  [x: string]: any;
};
export const ModalPopup = ({
  isVisible = false,
  children,
  ...props
}: ModalProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}>
      {children}
    </RNModal>
  );
};

const ModalContainer = ({children, style}: {children: React.ReactNode}) => (
  <View style={[styles.container, style]}>{children}</View>
);

const ModalBody = ({children}: {children?: React.ReactNode}) => (
  <View style={styles.body}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 1,
    marginLeft: WD(-5),
    marginTop: WD(20),
    paddingTop: WD(1),
    marginRight: WD(-5),
    width: '111%',
    right: 0,
    left: 0,
    bottom: 0,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 24,
  },
  body: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    minHeight: 100,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
});

ModalPopup.Container = ModalContainer;
ModalPopup.Body = ModalBody;
