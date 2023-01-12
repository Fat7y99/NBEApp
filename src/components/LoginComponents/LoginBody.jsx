import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import EmailInput from './EmailInput';
import PasswordInput from '../CommonComponents/PrimaryInput';
import PrimaryButton from '../CommonComponents/PrimaryButton';
import ForgotPassword from './ForgotPassword';
import {useSelector} from 'react-redux';
import {login} from '../../services/firebase';
import {toggleBottomSheet} from '../CommonComponents/FingerPrintSheet';
const LoginBody = ({navigation}) => {
  const email = useSelector(state => state.login.userName);
  const password = useSelector(state => state.login.password);
  const onClickHandler = () => {
    toggleBottomSheet();
  };
  // const dispatch = useDispatch();
  return (
    <KeyboardAvoidingView style={styles.loginBodyContainer} behavior="padding">
      <View style={styles.loginBodyContainer}>
        <Text style={styles.loginBodyStyle}>
          Welcome to {`\n`}The National Bank of Egypt
        </Text>
        <View style={{marginHorizontal: 20}}>
          <EmailInput></EmailInput>
          <PasswordInput
            label="Password"
            prefixIcon={require('../../../assets/images/LoginImages/passwordIcon.png')}></PasswordInput>
        </View>
        <ForgotPassword
          onChangeHandler={() =>
            dispatch(setPassword(e.nativeEvent.text))
          }></ForgotPassword>
        <View style={styles.loginStyle}>
          <PrimaryButton
            height={50}
            width={275}
            title="Log In"
            callBackFunction={() => {
              console.log(email, password);
              login(email, password);
              navigation.navigate('MobileNumberPage');
            }}
            backgroundColor="#007236"
            textColor="white"></PrimaryButton>
          <Pressable onPress={onClickHandler}>
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
            marginTop: 30,
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
    </KeyboardAvoidingView>
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
    marginTop: 60,
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
