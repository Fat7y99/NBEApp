import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import {useRef} from 'react';
import {SheetManager} from 'react-native-actions-sheet';
import EmailInput from './EmailInput';
import PrimaryInput from '../CommonComponents/PrimaryInput';
import PrimaryButton from '../CommonComponents/PrimaryButton';
import ForgotPassword from './ForgotPassword';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../services/firebase';
import {setUserData} from '../../redux/user';
import {setPassword} from '../../redux/login';
import Spinner from 'react-native-loading-spinner-overlay';
import {setAppState} from '../../redux/appState';

const LoginBody = ({navigation}) => {
  const logoutModalRef = useRef(null);

  const email = useSelector(state => state.login.userName);
  const password = useSelector(state => state.login.password);
  const callBackHandler = () => {
    SheetManager.hide('fingerPrint-sheet');
  };
  const onClickHandler = () => {
    SheetManager.show('fingerPrint-sheet', {
      payload: {callBackFunction: loginHandler},
    });
    console.log('sayed');
  };
  const loginHandler = () => {
    console.log(email, password);
    dispatch(setAppState(true));
    login('fathy.nabil2022@gamail.com', 123698745, dispatch).then(userData => {
      dispatch(setUserData(userData));
      callBackHandler();
      dispatch(setAppState(false));

      navigation.navigate('ProfilePage');
    });
    // login(email, password);
  };
  const dispatch = useDispatch();
  return (
    <KeyboardAvoidingView style={styles.loginBodyContainer} behavior="padding">
      <View style={styles.loginBodyContainer}>
        <Text style={styles.loginBodyStyle}>
          Welcome to {`\n`}The National Bank of Egypt
        </Text>
        <View style={{marginHorizontal: 20}}>
          <EmailInput></EmailInput>
          <PrimaryInput
            onChangeHandler={text => dispatch(setPassword(text))}
            label="Password"
            prefixIcon={require('../../../assets/images/LoginImages/passwordIcon.png')}></PrimaryInput>
        </View>
        <ForgotPassword></ForgotPassword>
        <View style={styles.loginStyle}>
          <PrimaryButton
            height={50}
            width={275}
            title="Log In"
            callBackFunction={loginHandler}
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
            marginVertical: 30,
          }}>
          <Text style={{color: 'white'}}>Don???t have an account?</Text>
          <Text
            onPress={() => {
              navigation.navigate('MobileNumberPage');

              console.log('SignUp');
            }}
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
