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
import t from '../../../assets/Translations.json';

const PrimaryInput = ({
  isSecured,
  prefixIcon,
  label,
  onChangeHandler,
  maxLength,
  value,
  placeHolder,
  flex,
  elevation,
  margin,
  language,
}) => {
  const [isFocused, SetFocused] = useState(false);
  const text = t[language];

  const styles = StyleSheet.create({
    passwordStyle: {
      marginHorizontal: 15,
      backgroundColor: 'white',
      borderWidth: 1.5,
      flexDirection: language === 'english' ? 'row' : 'row-reverse',
      alignItems: 'center',
      marginBottom: margin ?? 20,
      borderColor: isFocused ? Colors.primaryGreenColor : 'transparent',
      borderRadius: 10,
      elevation: elevation ?? 0,
      flex: flex ?? 1,
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
      flex: 1,
      fontFamily: 'Roboto',
    },
  });
  const [isVisisble, SetVisible] = useState(false);
  const togglePassword = () => {
    SetVisible(prev => !prev);
  };
  return (
    <View style={[styles.passwordStyle, {padding: 5, height: 65}]}>
      <Image style={{margin: !prefixIcon ? 5 : 20}} source={prefixIcon} />
      <View style={{flex: 1}}>
        {label ? (
          <Text
            style={[
              styles.passwordLabelStyle,
              {
                // alignSelf: language === 'english' ? 'flex-start' : 'flex-end',
                color: isFocused
                  ? Colors.primaryGreenColor
                  : Colors.darkBlueColor,
              },
            ]}>
            {label}
          </Text>
        ) : (
          ''
        )}
        <View
          style={{
            flexDirection: language === 'english' ? 'row' : 'row-reverse',
          }}>
          <TextInput
            onFocus={() => SetFocused(prev => !prev)}
            onEndEditing={() => SetFocused(prev => !prev)}
            placeholder={placeHolder}
            placeholderTextColor={Colors.greyColor}
            maxLength={maxLength}
            value={value}
            onChangeText={onChangeHandler}
            secureTextEntry={isSecured ?? !isVisisble}
            style={[
              styles.textInputStyle,
              {
                color: 'black',
                textAlign: language === 'english' ? 'left' : 'right',
              },
            ]}
            selectionColor={'black'}></TextInput>
          {isSecured ?? (
            <Pressable onPress={togglePassword}>
              <Image
                style={{
                  marginLeft: language === 'english' ? 20 : 0,
                  height: 16,
                  width: 20,
                }}
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
