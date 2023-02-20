import React, {useRef} from 'react';
import RadialGradient from 'react-native-radial-gradient';
import TransferActionComponent from './TransferActionComponent';
import {
  TouchableWithoutFeedback,
  Image,
  Pressable,
  View,
  Text,
  Keyboard,
} from 'react-native';
import {Colors} from '../../../constants/Colors';
import RNActionSheet, {SheetManager} from 'react-native-actions-sheet';

const TransferBottomSheet = ({ref, gestureEnabled = true}) => {
  const actionSheetRef = useRef(null);
  return (
    <RNActionSheet
      id="transfer-sheet"
      ref={ref ?? actionSheetRef}
      keyboardHandlerEnabled={true}
      gestureEnabled={gestureEnabled}
      overdrawEnabled={false}
      openAnimationConfig={{bounciness: 0}}
      defaultOverlayOpacity={0.3}
      indicatorStyle={{
        backgroundColor: 'transparent',

        // ...indicatorStyle,
      }}
      containerStyle={{
        backgroundColor: 'white',
      }}
      // {...reset}
      animated>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <TouchableWithoutFeedback>
            <View
              style={{
                // flex: 1,
                height: 350,
                backgroundColor: 'white',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingHorizontal: 10,
                // paddingTop: 18,
              }}>
              <Image
                source={require('../../../../assets/images/ProfilePage/TransferImages/userInfo.png')}></Image>
              <TransferActionComponent
                name="Transfer"
                description="Transfer money to Ahmad"
                icon={require('../../../../assets/images/ProfilePage/TransferImages/transfer.png')}
              />
              <TransferActionComponent
                name="Edit"
                description="Edit Ahmad data"
                icon={require('../../../../assets/images/ProfilePage/TransferImages/edit.png')}
              />
              <TransferActionComponent
                name="Delete Ahmad"
                description="Delete Ahmad & his transactions history"
                icon={require('../../../../assets/images/ProfilePage/TransferImages/delete.png')}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNActionSheet>
  );
};

export default TransferBottomSheet;
