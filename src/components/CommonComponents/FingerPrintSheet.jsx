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
import {Colors} from '../../constants/Colors';
import RNActionSheet, {SheetManager} from 'react-native-actions-sheet';
import t from '../../../assets/Translations.json';
import {useSelector} from 'react-redux';
const FingerPrintSheet = ({
  children,
  containerStyle,
  indicatorStyle,
  ref,
  payload,
  gestureEnabled = true,
  ...reset
}) => {
  const language = useSelector(state => state.appState.language);
  const text = t[language];
  console.log(payload);
  const actionSheetRef = useRef(null);
  return (
    <RNActionSheet
      id="fingerPrint-sheet"
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
                height: 290,
                backgroundColor: 'white',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                paddingHorizontal: 18,
                paddingTop: 18,
              }}>
              <Text
                style={{
                  color: Colors.darkBlueColor,
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                {text['fingerprint-title']}
              </Text>

              <Text
                style={{
                  color: Colors.darkBlueColor,
                  marginVertical: 12.5,
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                {text['fingerprint-subtitle']}
              </Text>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Pressable
                  onPress={() => (payload ? payload.callBackFunction() : '')}>
                  <RadialGradient
                    colors={['white', '#00C974']}
                    stops={[0.38, 1]}
                    center={[44, 44]}
                    radius={50}
                    style={{
                      width: 88,
                      overflow: 'hidden',
                      height: 88,
                      marginVertical: 12.5,
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                      shadowColor: '#00C974',
                    }}>
                    <Image
                      source={require('../../../assets/images/LoginImages/clickFingerPrint.png')}></Image>
                  </RadialGradient>
                </Pressable>
                <Text style={{color: Colors.greyColor, marginVertical: 12.5}}>
                  {text['touch-fingerprint']}
                </Text>
              </View>

              <Pressable onPress={() => SheetManager.hide('fingerPrint-sheet')}>
                <View
                  style={{
                    flexDirection:
                      language === 'english' ? 'row' : 'row-reverse',
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      color: Colors.primaryGreenColor,
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    {text['cancle']}
                  </Text>
                </View>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNActionSheet>
  );
};

export default FingerPrintSheet;
