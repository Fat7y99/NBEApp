import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import {Colors} from '../constants/Colors';
import {Images} from '../constants/Images';
import LogoHeader from '../components/LoginComponents/LogoHeader';
import PrimaryButton from '../components/LoginComponents/PrimaryButton';
import PasswordInput from '../components/LoginComponents/PasswordInput';
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
    color: '#1C2437',
    justifyContent: 'flex-end',
  },
});

const SettingPasswordPage = ({navigation}) => {
  const validColor = '#007236';

  const initialValidations = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  };
  const [Validations, SetValidations] = useState(initialValidations);
  const nonValidColor = '#B7B7B7';

  const onChangeHandler = id => {
    SetValidations(prevState => {
      return {
        ...prevState,
        [+id]: !prevState[id], //change to TRUE if needed
      };
    });
  };
  // onChangeHandler();
  const validationsList = [
    {
      first: 'Lower case letter',
      id1: 0,
      second: 'Upper case letter',
      id2: 1,
    },
    {
      first: 'Minimum 8 characters',
      id1: 2,
      second: 'Number',
      id2: 3,
    },
    {
      first: 'Special character',
      id1: 4,
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
            color: '#1C2437',
          }}>
          Mobile number
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            marginTop: 5,
            marginBottom: 20,
            color: '#B7B7B7',
          }}>
          Enter the mobile number registred in the bank
        </Text>
        <TextInput onChangeText={onChangeHandler}></TextInput>
        <PasswordInput
          maxLength={17}
          placeHolder="Write your password here"
          label="Password"
          prefixIcon={require('../../assets/images/LoginImages/passwordIcon.png')}></PasswordInput>
        <PasswordInput
          maxLength={17}
          placeHolder="Re-Write your password here"
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
                    color: '#1C2437',
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
                      color: '#1C2437',
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
            marginBottom: 20,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          <PrimaryButton
            callBackFunction={() => navigation.navigate('CongratulationPage')}
            title="Submit"
            backgroundColor="#007236"
            textColor="white"></PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default SettingPasswordPage;
