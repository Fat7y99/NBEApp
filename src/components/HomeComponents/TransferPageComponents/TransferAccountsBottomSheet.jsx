import React, {useRef} from 'react';
import RadialGradient from 'react-native-radial-gradient';
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
import {FlatList} from 'react-native-gesture-handler';

const TransferAccountsBottomSheet = ({ref, payload, gestureEnabled = true}) => {
  const actionSheetRef = useRef(null);
  console.log(payload.values);
  return (
    <RNActionSheet
      id="transferAccounts-sheet"
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
                backgroundColor: '#F0F2FA',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingHorizontal: 25,
              }}>
              <Text
                style={{
                  marginVertical: 15,
                  fontSize: 16,
                  fontWeight: '700',
                  color: Colors.darkBlueColor,
                }}>
                Accounts
              </Text>
              <FlatList
                data={payload.values}
                key={item => item}
                renderItem={item => (
                  <Pressable
                    onPress={() => {
                      console.log('sayed');
                      payload.callBackFunction(item.item);
                      SheetManager.hide('transferAccounts-sheet');
                    }}>
                    <View
                      style={{
                        marginVertical: 10,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        padding: 15,
                        elevation: 3,
                      }}>
                      <Text style={{color: Colors.darkBlueColor}}>
                        {item.item}
                      </Text>
                    </View>
                  </Pressable>
                )}></FlatList>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNActionSheet>
  );
};

export default TransferAccountsBottomSheet;
