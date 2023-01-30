import {StyleSheet, View, Text, Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {Colors} from '../../constants/Colors';
const LogoHeader = props => {
  const styles = StyleSheet.create({
    logoContainer: {
      flexDirection: props.reverse ? 'row-reverse' : 'row',
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
  const backFunction = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.logoContainer}>
      {props.visible ?? (
        <Pressable onPress={props.onClickHandler ?? backFunction}>
          <View style={styles.languageContainer}>
            {props.image ? (
              <Image source={props.image}></Image>
            ) : (
              <Text style={styles.languageText}>AR</Text>
            )}
          </View>
        </Pressable>
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
