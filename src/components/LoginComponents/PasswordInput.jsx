import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  TextInput,
} from 'react-native';
import {useState} from 'react';
const PasswordInput = () => {
  const [isVisisble, SetVisible] = useState(false);
  const togglePassword = () => {
    SetVisible(prev => !prev);
  };
  return (
    <View style={[styles.passwordStyle, {padding: 5, flexDirection: 'row'}]}>
      <Image
        style={{margin: 20}}
        source={require('../../../assets/images/LoginImages/passwordIcon.png')}
      />
      <View style={{width: '100%'}}>
        <Text style={[styles.labelStyle, {color: '#007236'}]}>Password</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            secureTextEntry={!isVisisble}
            style={[styles.textInputStyle, {color: 'black'}]}
            selectionColor={'black'}></TextInput>
          <Pressable onPress={togglePassword}>
            <Image
              style={{height: 20, width: 16, marginLeft: 20}}
              source={
                isVisisble
                  ? require('../../../assets/images/LoginImages/view.png')
                  : require('../../../assets/images/LoginImages/eyeIcon.png')
              }
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordStyle: {
    backgroundColor: 'white',
    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderColor: '#007236',
    borderRadius: 10,
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
    padding: 0,
    flex: 0.78,
    fontFamily: 'Roboto',
  },
});
export default PasswordInput;
