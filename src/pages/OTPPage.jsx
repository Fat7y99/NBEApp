import React, {useState} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Colors} from '../constants/Colors';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Images} from '../constants/Images';
import LogoHeader from '../components/CommonComponents/LogoHeader';
import PrimaryButton from '../components/CommonComponents/PrimaryButton';
import {getCurrentLanguage} from '../services/hooks/Hooks';
import t from '../../assets/Translations.json';
const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: Colors.backgroundColor},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 45,
    height: 65,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  focusCell: {
    color: 'black',
  },
});

const OTPPage = ({navigation, route}) => {
  const language = getCurrentLanguage();
  const text = t[language];
  // console.log(text);
  const otpCount = 5;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: otpCount});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <KeyboardAvoidingView style={styles.root} behavior="height">
      <View style={styles.root}>
        <LogoHeader
          navigation={navigation}
          image={Images.backButton}
          firstColor={Colors.primaryGreenColor}
          logoImage={Images.primaryLogo}></LogoHeader>

        <View style={[styles.root, {padding: 20}]}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              // fontFamily: 'Roboto',
              color: Colors.darkBlueColor,
            }}>
            {text['verification-title']}
          </Text>
          <Text style={{fontSize: 16, fontWeight: '400', color: '#B7B7B7'}}>
            {text['verification-subtitle']} +20 101 131 5412
          </Text>

          <CodeField
            ref={ref}
            value={value}
            onChangeText={setValue}
            cellCount={otpCount}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                key={index}
                style={[
                  styles.cell,
                  (symbol || isFocused) && {justifyContent: 'center'},
                ]}>
                <Text
                  style={[
                    {fontSize: 25, fontWeight: '700'},
                    symbol ? {color: Colors.darkBlueColor} : {color: '#B7B7B7'},
                    isFocused && styles.focusCell,
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : '-')}
                </Text>
              </View>
            )}
          />
          <Text
            style={{
              marginTop: 20,
              fontSize: 16,
              fontWeight: '400',
              color: '#B7B7B7',
            }}>
            {text['verification-not-recieved']}{' '}
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontWeight: '700',
              color: Colors.darkBlueColor,
            }}>
            {text['verification-request']} 00:12
          </Text>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              position: 'relative',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <PrimaryButton
              callBackFunction={route.params.callBackFunction}
              title={text['verification-button']}
              backgroundColor="#007236"
              textColor="white"></PrimaryButton>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OTPPage;
