import {View, ImageBackground, StyleSheet, StatusBar} from 'react-native';

import LogoHeader from '../components/CommonComponents/LogoHeader';
import LoginBody from '../components/LoginComponents/LoginBody';
import Footer from '../components/LoginComponents/Footer';
const LoginPage = ({navigation}) => {
  return (
    <View style={styles.entireContaier}>
      <ImageBackground
        style={styles.entireContaier}
        resizeMode="stretch"
        source={require('../../assets/images/LoginImages/loginBackground.png')}>
        <LogoHeader onClickHandler={() => console.log('Arabic')}></LogoHeader>
        <LoginBody navigation={navigation}></LoginBody>
        <Footer></Footer>
      </ImageBackground>
    </View>
  );
};
export default LoginPage;
const styles = StyleSheet.create({
  entireContaier: {
    flex: 1,
  },
  imageStyle: {
    opacity: 1,
  },
});
