import {View, Text, FlatList, Image} from 'react-native';
import ActionsButtonContainer from '../../components/HomeComponents/ActionsButtonContainer';
import {Colors} from '../../constants/Colors';
import BeneficiaryCard from '../../components/HomeComponents/BeneficiariesComponents/BeneficiaryCard';
import HistoryPage from './HistoryPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useQuery} from '@tanstack/react-query';
import {getAccountsData} from '../../services/API';
import {getCurrentUserID} from '../../services/hooks/Hooks';
const BeneficiariesPage = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'fullScreenModal',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="SubBeneficiaryPage"
        component={SubBeneficiariesPage}></Stack.Screen>
      <Stack.Screen name="HistoryPage" component={HistoryPage}></Stack.Screen>
    </Stack.Navigator>
  );
};

const SubBeneficiariesPage = ({navigation}) => {
  const userID = getCurrentUserID();

  const {
    data: BeneficiariesData,
    isLoading,
    isError,
  } = useQuery(['BenfeiciariesData'], () => getAccountsData(userID), {
    refetchInterval: 1000,
  });

  const onPressHandler = () => {
    console.log('navigating..');
    navigation.navigate('NewBeneficiary');
  };
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: '#F0F2FA',
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
        }}>
        <Text
          style={{
            color: Colors.darkBlueColor,
            fontSize: 20,
            fontWeight: '700',
          }}>
          Beneficiaries
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <ActionsButtonContainer>
            <Image
              source={require('../../../assets/images/ProfilePage/BeneficiariesImages/groups.png')}></Image>
            <Image
              source={require('../../../assets/images/ProfilePage/BeneficiariesImages/list.png')}></Image>
          </ActionsButtonContainer>
          <ActionsButtonContainer
            fillFirst={true}
            onPressHandler2={onPressHandler}
            onPressHandler={onPressHandler}>
            <Image
              source={require('../../../assets/images/ProfilePage/BeneficiariesImages/addIconV2.png')}></Image>
            <Text style={{color: Colors.primaryGreenColor}}>Add</Text>
          </ActionsButtonContainer>
        </View>
      </View>

      {!isLoading ? (
        <FlatList
          numColumns={3}
          data={BeneficiariesData}
          keyExtractor={item => item.name}
          contentContainerStyle={{
            flexGrow: 1,
            marginLeft: 8,
          }}
          renderItem={item => {
            return (
              <BeneficiaryCard
                navigation={navigation}
                item={item.item}></BeneficiaryCard>
            );
          }}></FlatList>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{marginBottom: 15}}
            source={require('../../../assets/images/ProfilePage/BeneficiariesImages/noBeneficiaries.png')}></Image>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginBottom: 5,
              color: '#34343F',
            }}>
            No Beneficiaries
          </Text>
          <Text
            style={{
              textAlign: 'center',
              width: 240,
              fontWeight: '400',
              marginBottom: 15,
              color: '#464665',
            }}>
            You don’t have beneficiaries, add some so you can send money
          </Text>
          <ActionsButtonContainer
            onPressHandler={onPressHandler}
            fillColor={Colors.primaryGreenColor}
            fillFirst={true}>
            <Image
              source={require('../../../assets/images/ProfilePage/BeneficiariesImages/addIcon.png')}></Image>
            <Text style={{color: Colors.primaryGreenColor, color: 'white'}}>
              Add
            </Text>
          </ActionsButtonContainer>
        </View>
      )}
    </View>
  );
};

export default BeneficiariesPage;
