import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';
import CustomText from './CustomText';
import { themeColors } from '../config/colors';

export default function FadeModal(props) {
  const {
    children = null,
    height = 0,
    headerTitle,
    modalStyle = {},
    refRBSheet = undefined,
    header,
    closeOnDragDown = true,
    closeOnPressMask = true,
    onModalClose = null,
  } = props;

  return (
    <RBSheet
      ref={refRBSheet}
      onClose={onModalClose}
      animationType="fade"
      height={height}
      closeOnDragDown={closeOnDragDown}
      closeOnPressMask={closeOnPressMask}
      dragFromTopOnly
      openDuration={300}
      keyboardAvoidingViewEnabled={true}
      customStyles={styles.rBSheetStyle}>
      <View style={[styles.lModalView, modalStyle]}>
        {header && (
          <View style={styles.topCont}>
            <View style={styles.headerStyle}>
              <CustomText bold h6>
                {headerTitle}
              </CustomText>
            </View>
          </View>
        )}

        <>
          <View style={styles.eachItem}>{children}</View>
        </>
      </View>
    </RBSheet>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  topCont: {
    width: '100%',
    height: Dimensions.get('window').height * 0.05,
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    borderTopLeftRadius: Dimensions.get('window').width * 0.03,
    borderTopRightRadius: Dimensions.get('window').width * 0.03,
  },
  rBSheetStyle: {
    wrapper: {
      backgroundColor: 'rgba(2, 28, 33, 0.51)',
    },
    draggableIcon: {
      backgroundColor: 'lightgrey',
      width: Dimensions.get('window').width * 0.2,
      height: Dimensions.get('window').height * 0.005,
    },
    container: {
      borderTopLeftRadius: Dimensions.get('window').width * 0.03,
      borderTopRightRadius: Dimensions.get('window').width * 0.03,
      overflow: 'hidden',
    },
  },
  lModalView: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopLeftRadius: Dimensions.get('window').width * 0.05,
    borderTopRightRadius: Dimensions.get('window').width * 0.05,
    backgroundColor: themeColors.WHITE,
    overflow: 'hidden',
  },

  eachItem: {
    backgroundColor: '#fff',

    borderTopLeftRadius: Dimensions.get('window').width * 0.03,
    borderTopRightRadius: Dimensions.get('window').width * 0.03,
  },
});
