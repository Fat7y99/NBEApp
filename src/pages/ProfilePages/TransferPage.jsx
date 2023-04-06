import {
  View,
  Text,
  Image,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useState} from 'react';

import {Colors} from '../../constants/Colors';
import PrimaryInput from '../../components/CommonComponents/PrimaryInput';
import PrimaryButton from '../../components/CommonComponents/PrimaryButton';
import {SheetManager} from 'react-native-actions-sheet';
import TransferAccountsBottomSheet from '../../components/HomeComponents/TransferPageComponents/TransferAccountsBottomSheet';
const TransferPage = () => {
  const transferTypes = ['Between your accounts', 'Outside of your account'];
  const transferFromAccounts = [
    '042-653214521245   -   $2,145,5874.25',
    '058-42586521245   -   $8,243,5874.25',
  ];
  const transferToAccounts = [
    '056-32154875423   -   $1,523.48',
    '099-43254875423   -   $7,663.48',
  ];

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: '#F0F2FA',
        marginBottom: 30,
      }}
      behavior="padding">
      <ScrollView contentContainerStyle={{flexGrow: 1, flex: 1}}>
        <View style={{marginHorizontal: 15}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: Colors.darkBlueColor,
              marginBottom: 20,
              // backgroundColor: 'red',
            }}>
            Transfer
          </Text>
          <TransferDropdown
            values={transferTypes}
            title="Type of transfer"
            selectedValue="Between your accounts"></TransferDropdown>
          <TransferDropdown
            values={transferFromAccounts}
            title="Transfer from"
            selectedValue="042-653214521245   -   $2,145,5874.25"></TransferDropdown>
          <TransferDropdown
            values={transferToAccounts}
            title="Transfer to"
            selectedValue="056-32154875423   -   $1,523.48"></TransferDropdown>
        </View>
        <PrimaryInput
          label="Amount to transfer"
          onChangeHandler={text => console.log(text)}
          isSecured={false}
          language={'english'}
          elevation={3}></PrimaryInput>
        <PrimaryInput
          onChangeHandler={text => console.log(text)}
          placeHolder="Reason of transfer"
          language={'english'}
          isSecured={false}
          elevation={3}></PrimaryInput>

        <View
          style={{
            flexGrow: 1,
            justifyContent: 'flex-end',
            marginHorizontal: 15,
          }}>
          <PrimaryButton
            callBackFunction={() => {
              console.log('transfered ');
            }}
            height={50}
            width="100%"
            backgroundColor={Colors.primaryGreenColor}
            title="Transfer"
            textColor="white"></PrimaryButton>
        </View>

        {/* </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TransferPage;

const TransferDropdown = ({title, values}) => {
  const [selectedValue, SetSelectedValue] = useState(values[0]);
  const changeValueHandler = value => {
    SetSelectedValue(value);
  };
  return (
    <View
      style={{
        // height: 65,
        // width: 346,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 3,
        paddingHorizontal: 16,
        paddingVertical: 11,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              color: Colors.darkBlueColor,
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: Colors.darkBlueColor,
            }}>
            {selectedValue}
          </Text>
        </View>
        <Pressable
          style={{flex: 1}}
          onPress={() => {
            console.log('pressed');

            SheetManager.show('transferAccounts-sheet', {
              payload: {values: values, callBackFunction: changeValueHandler},
            });
          }}>
          <View
            style={{
              flex: 1,
              // backgroundColor: 'red',

              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../../assets/images/ProfilePage/TransferImages/arrowIcon.png')}></Image>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
