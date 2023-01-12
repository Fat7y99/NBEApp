import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Colors} from '../constants/Colors';
import {Images} from '../constants/Images';
import LogoHeader from '../components/CommonComponents/LogoHeader';
import PrimaryButton from '../components/CommonComponents/PrimaryButton';
import PasswordInput from '../components/CommonComponents/PrimaryInput';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'flex-start',
  },
  footerStyle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 25,
    fontWeight: '400',
    color: '#808080',
  },
  specialLinks: {
    fontWeight: '700',
    color: Colors.darkBlueColor,
    justifyContent: 'flex-end',
  },
});

const SettingPasswordPage = ({navigation}) => {
  const validColor = Colors.primaryGreenColor;
  const nonValidColor = Colors.greyColor;
  const initialValidations = {
    Lower: false,
    Upper: false,
    Minimum: false,
    Number: false,
    Special: false,
  };
  const [Passwords, SetPasswords] = useState({
    password: '',
    confirmPassword: '',
  });
  const [Validations, SetValidations] = useState(initialValidations);
  const Lower = /[a-z]/;
  const Upper = /[A-Z]/;
  const Number = /[0-9]/;
  const Special = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const onChangeHandler = passwordText => {
    // console.log(passwordText);

    // console.log('lower', Lower.test(passwordText));
    // console.log('upper', Upper.test(passwordText));
    // console.log('number', Number.test(passwordText));
    // console.log('special', Special.test(passwordText));
    // console.log('length', passwordText.length > 8);
    SetValidations(prevState => {
      return {
        ...prevState,
        Lower: Lower.test(passwordText),
        Upper: Upper.test(passwordText),
        Minimum: passwordText.length > 8,
        Number: Number.test(passwordText),
        Special: Special.test(passwordText),
      };
    });

    SetPasswords(prevPasswords => {
      return {
        ...prevPasswords,
        password: passwordText,
      };
    });
  };
  const onConfirmPasswordHandler = password => {
    SetPasswords(prevPasswords => {
      return {
        ...prevPasswords,
        confirmPassword: password,
      };
    });
  };
  const onSubmitHandler = () => {
    let valid = true;
    for (const key in Validations) {
      valid &= Validations[key];
    }
    if (
      Passwords.password === Passwords.confirmPassword &&
      Passwords.password.length &&
      Passwords.confirmPassword.length &&
      valid
    ) {
      console.log('Great');
    }
    navigation.navigate('CongratulationPage');
  };
  // onChangeHandler();
  const validationsList = [
    {
      first: 'Lower case letter',
      id1: 'Lower',
      second: 'Upper case letter',
      id2: 'Upper',
    },
    {
      first: 'Minimum 8 characters',
      id1: 'Minimum',
      second: 'Number',
      id2: 'Number',
    },
    {
      first: 'Special character',
      id1: 'Special',
      second: null,
    },
  ];

  return (
    <View style={styles.root}>
      <LogoHeader
        image={Images.backButton}
        firstColor={Colors.primaryGreenColor}
        logoImage={Images.primaryLogo}></LogoHeader>
      <View style={[styles.root, {paddingHorizontal: 20}]}>
        <Text
          style={{
            fontSize: 20,

            fontWeight: '700',
            // fontFamily: 'Roboto',
            color: Colors.darkBlueColor,
          }}>
          Mobile number
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            marginTop: 5,
            marginBottom: 20,
            color: Colors.greyColor,
          }}>
          Enter the mobile number registred in the bank
        </Text>
        <PasswordInput
          maxLength={17}
          placeHolder="Write your password here"
          label="Password"
          onChangeHandler={onChangeHandler}
          prefixIcon={require('../../assets/images/LoginImages/passwordIcon.png')}></PasswordInput>

        <PasswordInput
          maxLength={17}
          placeHolder="Re-Write your password here"
          onChangeHandler={onConfirmPasswordHandler}
          label="Confirm Password"
          prefixIcon={require('../../assets/images/LoginImages/passwordIcon.png')}></PasswordInput>

        {validationsList.map((validation, index) => (
          <View
            key={index}
            style={{
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 12,
                paddingRight: 10,
                width: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 170,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 12,
                    width: 12,
                    borderRadius: 55,
                    marginRight: 10,
                    backgroundColor: Validations[validation.id1]
                      ? validColor
                      : nonValidColor,
                  }}></View>
                <Text
                  style={{
                    color: Colors.darkBlueColor,
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {validation.first}
                </Text>
              </View>
              {validation.second ? (
                <View
                  style={{
                    flexDirection: 'row',
                    width: 130,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 12,
                      width: 12,
                      borderRadius: 55,
                      marginRight: 10,
                      backgroundColor: Validations[validation.id2]
                        ? validColor
                        : nonValidColor,
                    }}></View>
                  <Text
                    style={{
                      color: Colors.darkBlueColor,
                      fontWeight: '400',
                      fontSize: 16,
                    }}>
                    {validation.second}
                  </Text>
                </View>
              ) : (
                ''
              )}
            </View>
          </View>
        ))}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            position: 'relative',
            // marginTop: 60,
            marginBottom: 20,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          <PrimaryButton
            callBackFunction={() => {
              onSubmitHandler();
              // navigation.navigate('CongratulationPage')
            }}
            title="Submit"
            backgroundColor="#007236"
            textColor="white"></PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default SettingPasswordPage;
