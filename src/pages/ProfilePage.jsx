import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
let i = 0;
const ProfilePage = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let imageSource = null;
          console.log(route.name);
          switch (route.name) {
            case 'Home':
              imageSource = require('../../assets/images/ProfilePage/Home.png');
              break;

            case 'Transfer':
              imageSource = require('../../assets/images/ProfilePage/Transfer.png');

              break;
            case 'Beneficiaries':
              imageSource = require('../../assets/images/ProfilePage/Beneficiaries.png');

              break;
            case 'ATMs':
              imageSource = require('../../assets/images/ProfilePage/ATMs.png');
              break;
            case 'Air Pay':
              imageSource = require('../../assets/images/ProfilePage/AirPay.png');
              break;
          }
          //   const imageSource =
          //     `../../assets/images/ProfilePage/${route.name}.png`.toString();
          return <Image source={imageSource}></Image>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        //   background: rgba(241, 243, 251, 1);
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Transfer" component={SettingsScreen} />
      <Tab.Screen name="Beneficiaries" component={SettingsScreen} />
      <Tab.Screen name="ATMs" component={SettingsScreen} />
      <Tab.Screen name="Air Pay" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default ProfilePage;
