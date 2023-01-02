import {StyleSheet, View, Text, Image} from 'react-native';
const LogoHeader = porps => {
  return (
    <View style={styles.logoContainer}>
      {porps.visible ?? (
        <View style={styles.languageContainer}>
          <Text style={styles.languageText}>AR</Text>
        </View>
      )}
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
    marginTop: 50,
    marginBottom: 25,
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
