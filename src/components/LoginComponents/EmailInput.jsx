import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUserName} from '../../redux/login';
const EmailInput = () => {
  const dispatch = useDispatch();
  const onSubmitEmail = e => {
    console.log(e.nativeEvent.text);

    dispatch(setUserName(e.nativeEvent.text));
  };
  return (
    <View style={[styles.emailStyle, {padding: 5, flexDirection: 'row'}]}>
      <Image
        style={{margin: 20}}
        source={require('../../../assets/images/LoginImages/userNameIcon.png')}
      />
      <View style={{width: '100%'}}>
        <Text style={[styles.labelStyle]}>Username</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            onEndEditing={onSubmitEmail}
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
    margin: 10,
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
