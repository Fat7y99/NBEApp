import {View, Text, Image, Pressable} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {SheetManager} from 'react-native-actions-sheet';
import {deleteBeneficiary} from '../../../services/API';
import {getAccountsData} from '../../../services/Firebase';
import {useDispatch} from 'react-redux';
import {setAppState} from '../../../redux/appState';
import {getCurrentUserID} from '../../../services/hooks/Hooks';
const AccountCard = ({account, elevation, width, height, navigation}) => {
  const userID = getCurrentUserID();

  const dispatch = useDispatch();
  return (
    <View
      style={{
        elevation: elevation ?? 3,
        backgroundColor: 'white',
        borderRadius: 18,
        //   marginHorizontal: 25,
        justifyContent: 'flex-start',
        width: '100%',
        height: height ?? 86,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
          flex: 1,
          alignItems: 'center',
        }}>
        <Image
          style={{height: account.imageUrl ? 50 : 150, width: 50}}
          source={{uri: account.imageUrl ?? account.icon}}></Image>
        <View style={{marginLeft: 10, flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontWeight: '500',
                color: Colors.fontColor,
                fontSize: 18,
              }}>
              {account.firstName ?? account.name}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              {width ? (
                ''
              ) : (
                <Pressable
                  style={{width: 20}}
                  onPress={() => {
                    console.log('pressed');
                    SheetManager.show('transfer-sheet', {
                      payload: {
                        account: account,
                        callbackFunction: async () => {
                          // console.log(account.id);
                          dispatch(setAppState(true));

                          await deleteBeneficiary(userID, account);
                          // await getAccountsData(dispatch);
                          dispatch(setAppState(false));
                          SheetManager.hideAll();
                          navigation.goBack();
                        },
                      },
                    });
                  }}>
                  <Image
                    source={require('../../../../assets/images/ProfilePage/TransferImages/dots.png')}></Image>
                </Pressable>
              )}
            </View>
          </View>

          <Text
            style={{
              fontWeight: '400',
              fontSize: 14,
              color: '#4D4D4D',
            }}>
            +20 101 131 5412
          </Text>
        </View>
      </View>
    </View>
  );
};
export default AccountCard;
