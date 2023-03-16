import {View, Text, Image, ImageBackground} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';
import {FlatList} from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {Colors} from '../../constants/Colors';
import {useSelector} from 'react-redux';
import AccountCard from '../../components/HomeComponents/BeneficiariesComponents/AccountCard';
const HistoryPage = ({navigation, route}) => {
  const HistoryData = useSelector(state => state.user.history);

  return (
    <View style={{flex: 1, backgroundColor: '#F0F2FA'}}>
      <View
        style={{
          flex: 1,
          //   marginHorizontal: 15,
          //   marginTop: 25,
          backgroundColor: '#F0F2FA',
        }}>
        <FlatList
          style={{marginHorizontal: 20}}
          ListHeaderComponent={() => (
            <View>
              {/* <ImageBackground
                  imageStyle={{height: 86, width: 250}}
                  source={require('../../../assets/images/ProfilePage/TransferImages/userInfo.png')}>
                  <Pressable
                    onPress={() => SheetManager.show('transfer-sheet')}>
                    <View
                      style={{
                        marginTop: 10,
                        marginHorizontal: 10,
                        borderRadius: 18,
                        alignItems: 'flex-end',
                      }}>
                      <Image
                        source={require('../../../assets/images/ProfilePage/TransferImages/dots.png')}></Image>
                    </View>
                  </Pressable>
                </ImageBackground> */}
              <AccountCard
                navigation={navigation}
                account={route.params.card}></AccountCard>

              <Text
                style={{
                  color: Colors.darkBlueColor,
                  fontSize: 20,
                  fontWeight: '700',
                  marginTop: 25,
                }}>
                Transaction History
              </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          data={HistoryData}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                alignSelf: 'center',
                width: '100%',
                backgroundColor: Colors.greyColor,
              }}
            />
          )}
          renderItem={item => {
            // console.log(item);
            return (
              <View
                style={{
                  flexDirection: 'row',
                  //   marginHorizontal: 25,
                  marginVertical: 10,
                }}>
                <View>
                  <Text
                    style={{
                      fontWeight: '400',
                      color: Colors.darkBlueColor,
                      fontSize: 18,
                    }}>
                    {item.item.name}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 14,
                      marginVertical: 8,
                      color: Colors.greyColor,
                    }}>
                    {item.item.date}
                  </Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                      color: Colors.darkBlueColor,
                    }}>
                    ${item.item.amount}
                  </Text>
                </View>
              </View>
            );
          }}></FlatList>
      </View>
    </View>
  );
};
export default HistoryPage;
