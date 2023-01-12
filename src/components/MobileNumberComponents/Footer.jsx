import {View, Text, StyleSheet, TextInput} from 'react-native';
import PrimaryButton from '../CommonComponents/PrimaryButton';
import {Colors} from '../../constants/Colors';
const Footer = ({navigation}) => {
  return (
    <View style={styles.root}>
      <PrimaryButton
        callBackFunction={() => navigation.navigate('OTPPage')}
        title="Submit"
        backgroundColor="#007236"
        textColor="white"></PrimaryButton>
      <Text style={styles.footerStyle}>
        By signing up, you agree to our
        <Text style={styles.specialLinks}> Terms of Service </Text>
        and acknowledge that you have read our
        <Text style={styles.specialLinks}> Privacy Policy</Text>.
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
