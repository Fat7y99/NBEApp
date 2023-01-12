import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  TextInput,
} from 'react-native';
import {setPassword} from '../../redux/login';

import {useState} from 'react';
import {useDispatch} from 'react-redux';
const PasswordInput = ({
  isSecured,
  prefixIcon,
  label,
  onChangeHandler,
  maxLength,
  value,
  placeHolder,
}) => {
  const [isVisisble, SetVisible] = useState(false);
  const togglePassword = () => {
    SetVisible(prev => !prev);
  };

  return (
    <View
      style={[
        styles.passwordStyle,
        {padding: 5, height: 65, flexDirection: 'row'},
      ]}>
      <Image style={{margin: 20}} source={prefixIcon} />
      <View style={{width: '100%'}}>
        <Text style={[styles.passwordLabelStyle, {color: '#007236'}]}>
          {label}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder={placeHolder}
            maxLength={maxLength}
            value={value}
            onChangeText={onChangeHandler}
            secureTextEntry={isSecured ?? !isVisisble}
            style={[styles.textInputStyle, {color: 'black'}]}
            selectionColor={'black'}></TextInput>
          {isSecured ?? (
            <Pressable onPress={togglePassword}>
              <Image
                style={{marginLeft: 20, height: 16, width: 20}}
                source={
                  isVisisble
                    ? require('../../../assets/images/LoginImages/view.png')
                    : require('../../../assets/images/LoginImages/eyeIcon.png')
                }
              />
            </Pressable>
          )}
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
    marginBottom: 20,
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
