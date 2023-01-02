import {View, Text, StyleSheet, Image, Pressable, FlatList} from 'react-native';

import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import PrimaryButton from './PrimaryButton';
import ForgotPassword from './ForgotPassword';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../services/firebase';
const LoginBody = () => {
  //   panelRef = useSelector(state => state.fingerPrintRef.ref);
  const email = useSelector(state => state.login.userName);
  const password = useSelector(state => state.login.password);

  // const dispatch = useDispatch();
  return (
    <View style={styles.loginBodyContainer}>
      <Text style={styles.loginBodyStyle}>
        Welcome to {`\n`}The National Bank of Egypt
      </Text>
      <EmailInput></EmailInput>
      <PasswordInput></PasswordInput>
      <ForgotPassword></ForgotPassword>
      <View style={styles.loginStyle}>
        <PrimaryButton
          height={50}
          width={275}
          title="Log In"
          callBackFunction={() => {
            console.log(email, password);
            login(email, password);
          }}
          backgroundColor="#007236"
          textColor="white"></PrimaryButton>
        <Pressable onPress={() => panelRef.current.togglePanel()}>
          <Image
            // style={{marginLeft: 15}}
            source={require('../../../assets/images/LoginImages/fingerPrintIcon.png')}></Image>
        </Pressable>
      </View>
      <View
        style={{
          marginTop: 10,
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
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default LoginBody;
