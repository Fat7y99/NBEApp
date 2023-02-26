import {View, ScrollView, Image} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useDispatch, useSelector} from 'react-redux';
import LogoHeader from '../../CommonComponents/LogoHeader';
import PrimaryButton from '../../CommonComponents/PrimaryButton';
import PrimaryInput from '../../CommonComponents/PrimaryInput';
import {Colors} from '../../../constants/Colors';
import {Images} from '../../../constants/Images';
import {
  addBeneficiary,
  getAccountsData,
  uploadImage,
} from '../../../services/firebase';
import {setbeneficiaryData} from '../../../redux/beneficiary';
import {setAppState} from '../../../redux/appState';
const NewBeneficiary = ({navigation}) => {
  const dispatch = useDispatch();
  const beneficiary = useSelector(state => state.beneficiary);

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#F0F2FA'}}
      behavior="padding"
      keyboardVerticalOffset={-150}>
      <ScrollView style={{flex: 1}}>
        <LogoHeader
          navigation={navigation}
          logoImage={Images.primaryLogo}
          firstColor={Colors.primaryGreenColor}
          image={Images.backButton}></LogoHeader>
        <Pressable
          onPress={async () => {
            await uploadImage(dispatch);
          }}>
          {
            <View
              style={{
                elevation: 3,
                backgroundColor: 'white',
                width: 138,
                height: 138,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
                alignSelf: 'center',
                marginBottom: 25,
              }}>
              <Image
                style={[
                  {
                    resizeMode: 'stretch',
                  },
                  beneficiary.imageUrl !== null
                    ? {width: 138, height: 138, borderRadius: 30}
                    : {},
                ]}
                source={
                  beneficiary.imageUrl !== null
                    ? {uri: beneficiary.imageUrl}
                    : require('../../../../assets/images/ProfilePage/BeneficiariesImages/uploadImage.png')
                }></Image>
            </View>
          }
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <PrimaryInput
            width="41%"
            label="First name"
            onChangeHandler={text =>
              dispatch(setbeneficiaryData({first: 'firstName', last: text}))
            }
            isSecured={false}
            elevation={3}></PrimaryInput>

          <PrimaryInput
            width="41%"
            label="Last name"
            onChangeHandler={text =>
              dispatch(setbeneficiaryData({first: 'lastName', last: text}))
            }
            isSecured={false}
            elevation={3}></PrimaryInput>
        </View>
        <View style={{alignItems: 'center'}}>
          <PrimaryInput
            width="90%"
            label="Bank branch"
            onChangeHandler={text =>
              dispatch(setbeneficiaryData({first: 'bankBranch', last: text}))
            }
            isSecured={false}
            elevation={3}></PrimaryInput>
          <PrimaryInput
            width="90%"
            label="Account number"
            onChangeHandler={text =>
              dispatch(setbeneficiaryData({first: 'accountNumber', last: text}))
            }
            isSecured={false}
            elevation={3}></PrimaryInput>
          <PrimaryInput
            width="90%"
            label="Phone number"
            onChangeHandler={text =>
              dispatch(setbeneficiaryData({first: 'phoneNumber', last: text}))
            }
            isSecured={false}
            elevation={3}></PrimaryInput>
          <PrimaryInput
            width="90%"
            label="Email"
            onChangeHandler={text => {
              dispatch(setbeneficiaryData({first: 'email', last: text}));
              console.log(beneficiary);
            }}
            isSecured={false}
            elevation={3}></PrimaryInput>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            //   backgroundColor: 'red',
            marginBottom: 25,
          }}>
          <PrimaryButton
            callBackFunction={async () => {
              if (
                !!beneficiary.firstName &&
                !!beneficiary.lastName &&
                !!beneficiary.bankBranch &&
                !!beneficiary.email &&
                !!beneficiary.phoneNumber &&
                // beneficiary.imageUrl &&
                !!beneficiary.accountNumber
              ) {
                dispatch(setAppState(true));
                await addBeneficiary(beneficiary);
                await getAccountsData(dispatch);
                dispatch(setAppState(false));

                navigation.goBack();
              } else alert('invalid account data');
            }}
            height={50}
            width={345}
            backgroundColor={Colors.primaryGreenColor}
            title="Add Beneficiar"
            textColor="white"></PrimaryButton>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default NewBeneficiary;
