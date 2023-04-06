import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUserName} from '../../redux/login';
// import file translations from assets
import t from '../../../assets/Translations.json';
const EmailInput = ({language}) => {
  const dispatch = useDispatch();
  const text = t[language];
  const onSubmitEmail = text => {
    console.log(text);
    dispatch(setUserName(text));
  };
  return (
    <View
      style={[
        styles.emailStyle,
        {
          padding: 5,
          height: 65,
          flexDirection: language === 'english' ? 'row' : 'row-reverse',
        },
      ]}>
      <Image
        style={{margin: 20}}
        source={require('../../../assets/images/LoginImages/userNameIcon.png')}
      />
      <View style={{flex: 1}}>
        <Text
          style={[
            styles.labelStyle,
            {
              alignSelf: language === 'english' ? 'flex-start' : 'flex-end',
            },
          ]}>
          {text['username']}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            onChangeText={onSubmitEmail}
            style={[
              styles.textInputStyle,

              language === 'english'
                ? {textAlign: 'left'}
                : {textAlign: 'right'},
              {flex: 1},
            ]}
            selectionColor={'white'}></TextInput>
        </View>
      </View>
    </View>
  );
};
export default EmailInput;
const styles = StyleSheet.create({
  emailStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    // 1.5px solid ;
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  labelStyle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: 'white',
  },
  textInputStyle: {
    color: 'white',
    fontSize: 16,
    padding: 0,
    // flex: 0.78,
    fontFamily: 'Roboto',
  },
});
