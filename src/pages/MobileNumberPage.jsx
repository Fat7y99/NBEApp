import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import {Colors} from '../constants/Colors';
import {Images} from '../constants/Images';
import LogoHeader from '../components/CommonComponents/LogoHeader';
import PrimaryButton from '../components/CommonComponents/PrimaryButton';
import PasswordInput from '../components/CommonComponents/PrimaryInput';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Footer from '../components/MobileNumberComponents/Footer';
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
  labelStyle: {
    fontSize: 20,

    fontWeight: '700',
    // fontFamily: 'Roboto',
    color: Colors.darkBlueColor,
  },
  secondaryLabel: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 5,
    marginBottom: 20,
    color: '#B7B7B7',
  },
});

const MobileNumberPage = ({navigation}) => {
  [previousValue, SetValue] = useState(null);
  const onChangeHandler = value => {
    const currentValue = value;
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      if (cvLength === 1) {
        SetValue(`+2${currentValue} `);
      } else if (cvLength < 8) {
        SetValue(`+2${currentValue.slice(2, 3)} ${currentValue.slice(4, 7)}`);
      } else if (cvLength < 12) {
        if (cvLength == 8) {
          SetValue(
            `+2${currentValue.slice(2, 3)} ${currentValue.slice(
              4,
              7,
            )} ${currentValue.slice(7, 11)}`,
          );
        } else
          SetValue(
            `+2${currentValue.slice(2, 3)} ${currentValue.slice(
              4,
              7,
            )}${currentValue.slice(7, 11)}`,
          );
      } else if (cvLength < 18) {
        if (cvLength == 12) {
          SetValue(
            `+2${currentValue.slice(2, 3)} ${currentValue.slice(
              4,
              7,
            )} ${currentValue.slice(7, 11)} ${currentValue.slice(11, 17)}`,
          );
        } else {
          SetValue(
            `+2${currentValue.slice(2, 3)} ${currentValue.slice(
              4,
              7,
            )}${currentValue.slice(7, 11)}${currentValue.slice(11, 17)}`,
          );
        }
      }
    } else SetValue(value);
  };
  return (
    <View style={styles.root}>
      <LogoHeader
        image={Images.backButton}
        firstColor={Colors.primaryGreenColor}
        logoImage={Images.primaryLogo}></LogoHeader>
      <View style={[styles.root, {paddingHorizontal: 20}]}>
        <Text style={styles.labelStyle}>Mobile number</Text>
        <Text style={styles.secondaryLabel}>
          Enter the mobile number registred in the bank
        </Text>
        <PasswordInput
          maxLength={17}
          value={previousValue}
          onChangeHandler={onChangeHandler}
          label="Mobile number"
          isSecured={false}
          prefixIcon={require('../../assets/images/OTPPage/phoneIcon.png')}></PasswordInput>
      </View>
      <Footer navigation={navigation}></Footer>
    </View>
  );
};

export default MobileNumberPage;
