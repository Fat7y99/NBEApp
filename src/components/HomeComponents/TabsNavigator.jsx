import HomePage from '../../pages/ProfilePages/HomePage';
import TransferPage from '../../pages/ProfilePages/TransferPage';
import BeneficiariesPage from '../../pages/ProfilePages/BeneficiariesPage';
import AirPayPage from '../../pages/ProfilePages/AirPayPage';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../constants/Colors';
import NewBeneficiary from './BeneficiariesComponents/NewBeneficiary';
import MapPage from '../../pages/ProfilePages/MapPage';
const TabsNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route, index}) => {
        return {
          headerShown: false,

          tabBarStyle: {
            height: 80,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
          },
          tabBarIcon: ({focused}) => {
            let imageSource = null;

            switch (route.name) {
              case 'Home':
                imageSource = focused
                  ? require('../../../assets/images/ProfilePage/activeHome.png')
                  : require('../../../assets/images/ProfilePage/Home.png');
                break;

              case 'Transfer':
                imageSource = focused
                  ? require('../../../assets/images/ProfilePage/activeTransfer.png')
                  : require('../../../assets/images/ProfilePage/Transfer.png');
                break;

              case 'Beneficiaries':
                imageSource = focused
                  ? require('../../../assets/images/ProfilePage/activeBeneficiaries.png')
                  : require('../../../assets/images/ProfilePage/Beneficiaries.png');

                break;
              case 'ATMs':
                imageSource = focused
                  ? require('../../../assets/images/ProfilePage/activeATMs.png')
                  : require('../../../assets/images/ProfilePage/ATMs.png');
                break;
              case 'Air Pay':
                imageSource = focused
                  ? require('../../../assets/images/ProfilePage/activeAirPay.png')
                  : require('../../../assets/images/ProfilePage/AirPay.png');
                break;
            }

            return <Image source={imageSource}></Image>;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveBackgroundColor: '#F1F3FB',
          tabBarInactiveTintColor: Colors.greyColor,
          tabBarActiveBackgroundColor: 'green',
          tabBarItemStyle: {
            width: 70,
            height: 70,
            paddingHorizontal: 4,
            paddingVertical: 8,
            marginVertical: 5,
            marginHorizontal: 5,
            borderRadius: 16,
          },
        };
      }}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Transfer" component={TransferPage} />
      <Tab.Screen name="Beneficiaries" component={BeneficiariesPage} />
      <Tab.Screen name="ATMs" component={MapPage} />
      <Tab.Screen name="Air Pay" component={AirPayPage} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
