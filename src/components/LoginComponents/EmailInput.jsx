import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUserName} from '../../redux/login';
const EmailInput = () => {
  const dispatch = useDispatch();
  const onSubmitEmail = text => {
    console.log(text);
    dispatch(setUserName(text));
  };
  return (
    <View
      style={[
        styles.emailStyle,
        {padding: 5, height: 65, flexDirection: 'row'},
      ]}>
      <Image
        style={{margin: 20}}
        source={require('../../../assets/images/LoginImages/userNameIcon.png')}
      />
      <View style={{width: '100%'}}>
        <Text style={[styles.labelStyle]}>Username</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            onChangeText={onSubmitEmail}
            style={styles.textInputStyle}
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
    flex: 0.78,
    fontFamily: 'Roboto',
  },
});
