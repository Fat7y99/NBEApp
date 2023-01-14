import {StyleSheet, View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Colors} from '../../constants/Colors';
import {useState} from 'react';
const ForgotPassword = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
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
          tintColors={{false: '#FFFFFF', true: Colors.primaryGreenColor}}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={[styles.labelStyle, {fontWeight: '400'}]}>
          Remember me
        </Text>
      </View>
      <Text style={[styles.labelStyle, {fontWeight: '400', color: '#E4E4E4'}]}>
        Forgot password?
      </Text>
    </View>
  );
};
export default ForgotPassword;
const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: 'white',
  },
});
