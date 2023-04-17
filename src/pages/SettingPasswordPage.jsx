import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';
import {Images} from '../constants/Images';
import LogoHeader from '../components/CommonComponents/LogoHeader';
import PrimaryButton from '../components/CommonComponents/PrimaryButton';
import PrimaryInput from '../components/CommonComponents/PrimaryInput';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {getCurrentLanguage} from '../services/hooks/Hooks';
import t from '../../assets/Translations.json';
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

const ValidationEntry = ({Validations, validation, index, language}) => {
  const validColor = Colors.primaryGreenColor;
  const nonValidColor = Colors.greyColor;
  return (
    <View
      key={index}
      style={{
        justifyContent: 'space-between',
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: language === 'arabic' ? 'row-reverse' : 'row',
          justifyContent: 'space-between',
          marginBottom: 12,
          paddingRight: 10,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: language === 'arabic' ? 'row-reverse' : 'row',
            width: 170,
            alignItems: 'center',
          }}>
          <View
            style={[
              {
                height: 12,
                width: 12,
                borderRadius: 55,
                backgroundColor: Validations[validation.id1]
                  ? validColor
                  : nonValidColor,
              },
              language === 'arabic' ? {marginLeft: 10} : {marginRight: 10},
            ]}></View>
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
              flexDirection: language === 'arabic' ? 'row-reverse' : 'row',
              width: 130,
              alignItems: 'center',
            }}>
            <View
              style={[
                {
                  height: 12,
                  width: 12,
                  borderRadius: 55,
                  backgroundColor: Validations[validation.id1]
                    ? validColor
                    : nonValidColor,
                },
                language === 'arabic' ? {marginLeft: 10} : {marginRight: 10},
              ]}></View>
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
  );
};

const SettingPasswordPage = ({navigation}) => {
  const language = getCurrentLanguage();
  const text = t[language];
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
  const validationsList = [
    {
      first: text['lower-case'],
      id1: 'Lower',
      second: text['upper-case'],
      id2: 'Upper',
    },
    {
      first: text['min-charchters'],
      id1: 'Minimum',
      second: text['number-charchter'],
      id2: 'Number',
    },
    {
      first: text['special-charchter'],
      id1: 'Special',
      second: null,
    },
  ];

  return (
    <View style={styles.root}>
      <LogoHeader
        navigation={navigation}
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
          {text['set-password-title']}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            marginTop: 5,
            marginBottom: 20,
            color: Colors.greyColor,
          }}>
          {text['set-password-subtitle']}
        </Text>
        <PrimaryInput
          maxLength={17}
          placeHolder={language === 'arabic' ? '' : 'Write your password here'}
          label={text['set-password-input']}
          language={language}
          flex={0}
          marginHorizontal={0}
          onChangeHandler={onChangeHandler}
          prefixIcon={require('../../assets/images/LoginImages/passwordIcon.png')}></PrimaryInput>

        <PrimaryInput
          maxLength={17}
          placeHolder={
            language === 'arabic' ? '' : 'Re-Write your password here'
          }
          onChangeHandler={onConfirmPasswordHandler}
          label={text['confirm-password-input']}
          language={language}
          marginHorizontal={0}
          flex={0}
          prefixIcon={require('../../assets/images/LoginImages/passwordIcon.png')}></PrimaryInput>

        {validationsList.map((validation, index) => (
          <ValidationEntry
            language={language}
            key={index}
            validation={validation}
            Validations={Validations}
            index={index}></ValidationEntry>
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
            callBackFunction={() => {
              navigation.navigate('CongratulationPage');
            }}
            height={50}
            width={345}
            backgroundColor={Colors.primaryGreenColor}
            title={text['set-password-button']}
            textColor="white"></PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default SettingPasswordPage;
