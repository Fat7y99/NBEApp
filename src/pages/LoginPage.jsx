import {
  View,
  ImageBackground,
  TextInput,
  Image,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';

const LoginPage = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
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
        <View style={styles.logoContainer}>
          <View style={styles.languageContainer}>
            <Text style={styles.languageText}>AR</Text>
          </View>
          <Image
            style={styles.logoStyle}
            source={require('../../assets/images/LoginImages/logo.png')}></Image>
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeStyle}>
            Welcome to {`\n`}The National Bank of Egypt
          </Text>
          <View style={styles.emailStyle}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{margin: 25}}
                source={require('../../assets/images/LoginImages/userNameIcon.png')}
              />
              <View style={{marginTop: 8, width: '100%'}}>
                <Text style={styles.labelStyle}>UserName</Text>
                <TextInput
                  style={styles.textInputStyle}
                  selectionColor={'white'}></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.passwordStyle}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{margin: 25}}
                source={require('../../assets/images/LoginImages/passwordIcon.png')}
              />
              <View style={{marginTop: 8, width: '100%'}}>
                <Text style={[styles.labelStyle, {color: '#007236'}]}>
                  Password
                </Text>
                <TextInput
                  secureTextEntry={true}
                  style={[styles.textInputStyle, {color: 'black'}]}
                  selectionColor={'black'}></TextInput>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                tintColors={{false: '#FFFFFF', true: '#007236'}}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={[styles.labelStyle, {fontWeight: '400'}]}>
                Remember me
              </Text>
            </View>
            <Text
              style={[
                styles.labelStyle,
                {fontWeight: '400', color: '#E4E4E4'},
              ]}>
              Forgot password?
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={onPressHandler}
              style={pressData =>
                pressData.pressed
                  ? [styles.primaryContainer, styles.pressed]
                  : styles.primaryContainer
              }>
              <View>
                <Text style={styles.primaryText}>Log In</Text>
              </View>
            </Pressable>

            <Image
              style={{marginLeft: 21}}
              source={require('../../assets/images/LoginImages/fingerPrintIcon.png')}></Image>
          </View>
        </View>
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
  logoStyle: {
    alignSelf: 'flex-end',
  },
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
  welcomeStyle: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    margin: 25,
    // flex: 0.1,
  },
  welcomeContainer: {
    flexDirection: 'column',
    flex: 1,

    justifyContent: 'center',
  },
  emailStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    // 1.5px solid ;
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  passwordStyle: {
    backgroundColor: 'white',
    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderColor: '#007236',
    borderRadius: 10,
  },
  labelStyle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: 'white',
  },
  passwordLabelStyle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#007236',
  },
  textInputStyle: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  primaryContainer: {
    flex: 6,
    backgroundColor: '#007236',
    borderRadius: 12.5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2,
  },
  primaryText: {
    color: 'white',
    paddingVertical: 15,
    fontSize: 16,
    fontWeight: '700',

    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
