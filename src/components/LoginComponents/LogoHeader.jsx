import {StyleSheet, View, Text, Image} from 'react-native';
const LogoHeader = () => {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.languageContainer}>
        <Text style={styles.languageText}>AR</Text>
      </View>
      <Image
        style={styles.logoStyle}
        source={require('../../../assets/images/LoginImages/logo.png')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 50,
    marginHorizontal: 25,
  },
  languageContainer: {
    padding: 11,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  languageText: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#007236',
  },
  logoStyle: {
    alignSelf: 'flex-end',
  },
});

export default LogoHeader;
