import {View, ImageBackground, Image, Text, StyleSheet} from 'react-native';

import LogoHeader from '../components/LoginComponents/LogoHeader';
import LoginBody from '../components/LoginComponents/LoginBody';
import Footer from '../components/LoginComponents/Footer';
import FingerPrintSheet from '../components/LoginComponents/FingerPrintSheet';
const LoginPage = () => {
  const onPressHandler = () => {
    console.log('presseddddd!');
  };
  return (
    <View style={styles.entireContaier}>
      <ImageBackground
        imageStyle={styles.imageStyle}
        style={styles.entireContaier}
        resizeMode="cover"
        source={require('../../assets/images/LoginImages/loginBackground.png')}>
        <LogoHeader></LogoHeader>
        <LoginBody></LoginBody>
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
