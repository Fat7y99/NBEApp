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
import AccountCard from '../BeneficiariesComponents/AccountCard';
import {deleteBeneficiary} from '../../../services/Firebase';

const TransferBottomSheet = ({ref, payload, gestureEnabled = true}) => {
  const actionSheetRef = useRef(null);
  console.log(payload);
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
                height: 320,
                backgroundColor: 'white',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingHorizontal: 10,
                // paddingTop: 18,
              }}>
              <View style={{marginVertical: 25}}>
                <AccountCard
                  account={payload.account}
                  elevation={0}
                  width={236}
                  height={59}></AccountCard>
              </View>
              <View>
                <TransferActionComponent
                  name="Transfer"
                  description={`Transfer money to ${
                    payload.account.firstName ?? payload.account.name
                  }`}
                  icon={require('../../../../assets/images/ProfilePage/TransferImages/transfer.png')}
                />
                <TransferActionComponent
                  name="Edit"
                  description={`Edit ${
                    payload.account.firstName ?? payload.account.name
                  } data`}
                  icon={require('../../../../assets/images/ProfilePage/TransferImages/edit.png')}
                />
                <TransferActionComponent
                  callbackFunction={payload.callbackFunction}
                  name={`Delete ${
                    payload.account.firstName ?? payload.account.name
                  }`}
                  description="Delete Ahmad & their transactions history"
                  icon={require('../../../../assets/images/ProfilePage/TransferImages/delete.png')}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNActionSheet>
  );
};

export default TransferBottomSheet;
