import {View, ImageBackground, StyleSheet} from 'react-native';

import LogoHeader from '../components/CommonComponents/LogoHeader';
import LoginBody from '../components/LoginComponents/LoginBody';
import Footer from '../components/LoginComponents/Footer';
import FingerPrintSheet from '../components/CommonComponents/FingerPrintSheet';
const LoginPage = ({navigation}) => {
  const onPressHandler = () => {
    console.log('presseddddd!');
  };
  return (
    <View style={styles.entireContaier}>
      <ImageBackground
        // imageStyle={styles.imageStyle}
        style={styles.entireContaier}
        resizeMode="stretch"
        source={require('../../assets/images/LoginImages/loginBackground.png')}>
        <LogoHeader></LogoHeader>
        <LoginBody navigation={navigation}></LoginBody>
        <Footer></Footer>
        {/* <FingerPrintSheet></FingerPrintSheet> */}
      </ImageBackground>
    </View>
  );
};
export default LoginPage;
const styles = StyleSheet.create({
  entireContaier: {
    flex: 1,
    // justifyContent:'center'
  },
  imageStyle: {
    opacity: 1,
  },
});
