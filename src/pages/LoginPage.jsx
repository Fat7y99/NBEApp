import {View, ImageBackground, StyleSheet, StatusBar} from 'react-native';

import LogoHeader from '../components/CommonComponents/LogoHeader';
import LoginBody from '../components/LoginComponents/LoginBody';
import Footer from '../components/LoginComponents/Footer';
import {setLanguage} from '../redux/appState';
import {getCurrentLanguage} from '../services/hooks/Hooks';
import {useDispatch} from 'react-redux';
const LoginPage = ({navigation}) => {
  const language = getCurrentLanguage();
  const dispatch = useDispatch();
  return (
    <View style={styles.entireContaier}>
      <ImageBackground
        style={styles.entireContaier}
        resizeMode="stretch"
        source={require('../../assets/images/LoginImages/loginBackground.png')}>
        <LogoHeader
          reverse={language === 'arabic' ? true : false}
          language={language}
          onClickHandler={() =>
            dispatch(setLanguage(language === 'arabic' ? 'english' : 'arabic'))
          }></LogoHeader>
        <LoginBody language={language} navigation={navigation}></LoginBody>
        <Footer language={language}></Footer>
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
