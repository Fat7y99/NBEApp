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
}) => {
  console.log(width);
  const [isVisisble, SetVisible] = useState(false);
  const togglePassword = () => {
    SetVisible(prev => !prev);
  };

  return (
    <View
      style={[
        styles.passwordStyle,
        {padding: 5, height: 65, flexDirection: 'row'},
        {width: width ?? '100%'},
      ]}>
      <Image style={{margin: !prefixIcon ? 5 : 20}} source={prefixIcon} />
      <View>
        <Text
          style={[
            styles.passwordLabelStyle,
            {color: Colors.primaryGreenColor},
          ]}>
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
    borderColor: Colors.primaryGreenColor,
    borderRadius: 10,
  },
  passwordLabelStyle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: Colors.primaryGreenColor,
  },
  textInputStyle: {
    color: 'white',
    fontSize: 16,
    padding: 0,
    flex: 0.78,
    fontFamily: 'Roboto',
  },
});
export default PrimaryInput;
