import {View, Text} from 'react-native';
import PrimaryButton from '../../components/CommonComponents/PrimaryButton';
import PrimaryInput from '../../components/CommonComponents/PrimaryInput';
import {Colors} from '../../constants/Colors';
const NewBeneficiary = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <PrimaryInput
          width="41%"
          label="First name"
          isSecured={false}></PrimaryInput>

        <PrimaryInput
          width="41%"
          label="Last name"
          isSecured={false}></PrimaryInput>
      </View>
      <View style={{alignItems: 'center'}}>
        <PrimaryInput
          width="90%"
          label="Bank branch"
          isSecured={false}></PrimaryInput>
        <PrimaryInput
          width="90%"
          label="Account number"
          isSecured={false}></PrimaryInput>
        <PrimaryInput
          width="90%"
          label="Phone number"
          isSecured={false}></PrimaryInput>
        <PrimaryInput
          width="90%"
          label="Email"
          isSecured={false}></PrimaryInput>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          //   backgroundColor: 'red',
        }}>
        <PrimaryButton
          height={50}
          width={345}
          backgroundColor={Colors.primaryGreenColor}
          title="Add Beneficiar"
          textColor="white"></PrimaryButton>
      </View>
    </View>
  );
};
export default NewBeneficiary;
