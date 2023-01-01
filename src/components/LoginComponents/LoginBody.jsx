import {View, Text, StyleSheet, Image, Pressable, FlatList} from 'react-native';

import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import PrimaryButton from './PrimaryButton';
import ForgotPassword from './ForgotPassword';
import {useSelector} from 'react-redux';
const LoginBody = () => {
  //   panelRef = useSelector(state => state.fingerPrintRef.ref);

  return (
    <View style={styles.loginBodyContainer}>
      <Text style={styles.loginBodyStyle}>
        Welcome to {`\n`}The National Bank of Egypt
      </Text>
      <EmailInput></EmailInput>
      <PasswordInput></PasswordInput>
      <ForgotPassword></ForgotPassword>
      <View style={styles.loginStyle}>
        <PrimaryButton></PrimaryButton>
        <Pressable onPress={() => panelRef.current.togglePanel()}>
          <Image
            style={{marginLeft: 21}}
            source={require('../../../assets/images/LoginImages/fingerPrintIcon.png')}></Image>
        </Pressable>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{color: 'white'}}>Don’t have an account?</Text>
        <Text
          style={{
            marginLeft: 5,
            textDecorationLine: 'underline',
            color: '#F6A721',
            fontSize: 14,
            fontWeight: '700',
            fontFamily: 'Roboto',
          }}>
          Sign up
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  loginBodyStyle: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    margin: 25,
  },
  loginBodyContainer: {
    flexDirection: 'column',
    flex: 1,

    justifyContent: 'center',
  },
  loginStyle: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default LoginBody;
