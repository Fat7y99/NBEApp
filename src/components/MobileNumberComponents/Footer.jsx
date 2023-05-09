import {View, Text, StyleSheet, TextInput} from 'react-native';
import PrimaryButton from '../CommonComponents/PrimaryButton';
import {Colors} from '../../constants/Colors';
import t from '../../../assets/Translations.json';
import {getCurrentLanguage} from '../../services/hooks/Hooks';
const Footer = ({navigation}) => {
  const language = getCurrentLanguage();
  const text = t[language];
  return (
    <View style={styles.root}>
      <PrimaryButton
        callBackFunction={() =>
          navigation.navigate('OTPPage', {
            callBackFunction: () => {
              navigation.navigate('SettingPasswordPage');
            },
          })
        }
        title={text['mobile-button']}
        backgroundColor="#007236"
        textColor="white"></PrimaryButton>
      <Text style={styles.footerStyle}>
        {text['mobile-footer1']}
        <Text style={styles.specialLinks}> {text['mobile-footer2']} </Text>
        {text['mobile-footer3']}
        <Text style={styles.specialLinks}> {text['mobile-footer4']}</Text>.
      </Text>
    </View>
  );
};
export default Footer;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'flex-end',
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
});
