import {StyleSheet, View, Text, Image} from 'react-native';
import {Colors} from '../../constants/Colors';
const LogoHeader = props => {
  const styles = StyleSheet.create({
    logoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 50,
      marginBottom: 25,
      marginHorizontal: 25,
    },
    languageContainer: {
      height: 40,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: props.firstColor ?? 'white',
    },
    languageText: {
      fontSize: 16,
      fontFamily: 'Roboto',
      fontWeight: '700',
      color: Colors.primaryGreenColor,
    },
    logoStyle: {
      alignSelf: 'flex-end',
    },
  });
  return (
    <View style={styles.logoContainer}>
      {props.visible ?? (
        <View style={styles.languageContainer}>
          {props.image ? (
            <Image source={props.image}></Image>
          ) : (
            <Text style={styles.languageText}>AR</Text>
          )}
        </View>
      )}
      <Image
        style={styles.logoStyle}
        source={
          props.logoImage ??
          require('../../../assets/images/LoginImages/logo.png')
        }></Image>
    </View>
  );
};

export default LogoHeader;
