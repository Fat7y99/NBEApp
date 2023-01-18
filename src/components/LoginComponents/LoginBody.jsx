import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Button,
} from 'react-native';
import {useRef} from 'react';
import {SheetManager} from 'react-native-actions-sheet';
import EmailInput from './EmailInput';
import PasswordInput from '../CommonComponents/PrimaryInput';
import PrimaryButton from '../CommonComponents/PrimaryButton';
import ForgotPassword from './ForgotPassword';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../services/firebase';
import {toggleBottomSheet} from '../CommonComponents/FingerPrintSheet';
import {toggleSheet} from '../../redux/fingerPrint';
import ActionSheetExample from '../CommonComponents/ActionSheetExample';

const LoginBody = ({navigation}) => {
  // const actionSheetRef = useRef(null);
  const logoutModalRef = useRef(null);

  const email = useSelector(state => state.login.userName);
  const password = useSelector(state => state.login.password);
  const onClickHandler = () => {
    // navigation.navigate('MyModal');
    console.log('sayed');
    dispatch(toggleSheet(true));
  };
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
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
              // console.log(email, password);
              console.log('ezay');
              SheetManager.show('fingerPrint-sheet');
              // logoutModalRef.current.show();
              // login(email, password);
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
            marginVertical: 30,
          }}>
          <Text style={{color: 'white'}}>Don’t have an account?</Text>
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
