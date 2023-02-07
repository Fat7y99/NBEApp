import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  TextInput,
} from 'react-native';
import {setPassword} from '../../redux/login';
import {Colors} from '../../constants/Colors';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
const PrimaryInput = ({
  isSecured,
  prefixIcon,
  label,
  onChangeHandler,
  maxLength,
  value,
  placeHolder,
  width,
  elevation,
}) => {
  const [isFocused, SetFocused] = useState(false);

  const styles = StyleSheet.create({
    passwordStyle: {
      backgroundColor: 'white',
      borderWidth: 1.5,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      borderColor: isFocused ? Colors.primaryGreenColor : 'transparent',
      borderRadius: 10,
      elevation: elevation ?? 0,
    },
    passwordLabelStyle: {
      fontSize: 14,
      fontFamily: 'Roboto',
      fontWeight: '700',
      color: Colors.darkBlueColor,
    },
    textInputStyle: {
      color: 'white',
      fontSize: 16,
      padding: 0,
      flex: 0.78,
      fontFamily: 'Roboto',
    },
  });
  const [isVisisble, SetVisible] = useState(false);
  const togglePassword = () => {
    SetVisible(prev => !prev);
  };
  return (
    <View
      style={[
        styles.passwordStyle,
        {padding: 5, height: 65, flexDirection: 'row'},
        ,
      ]}>
      <Image style={{margin: !prefixIcon ? 5 : 20}} source={prefixIcon} />
      <View style={{width: width ?? '100%'}}>
        <Text
          style={[
            styles.passwordLabelStyle,
            {
              color: isFocused
                ? Colors.primaryGreenColor
                : Colors.darkBlueColor,
            },
          ]}>
          {label}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            onFocus={() => SetFocused(prev => !prev)}
            onEndEditing={() => SetFocused(prev => !prev)}
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

export default PrimaryInput;
