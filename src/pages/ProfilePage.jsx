import {View, Text, Image} from 'react-native';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Colors} from '../constants/Colors';
import {useEffect} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Text>Home!</Text>
      </Pressable>
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

const TabNavigator = () => {
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
            console.log('focused', focused);
            isFocused = focused;
            // console.log(route.name);
            switch (route.name) {
              case 'Home':
                imageSource = focused
                  ? require('../../assets/images/ProfilePage/activeHome.png')
                  : require('../../assets/images/ProfilePage/Home.png');
                break;

              case 'Transfer':
                imageSource = focused
                  ? require('../../assets/images/ProfilePage/activeTransfer.png')
                  : require('../../assets/images/ProfilePage/Transfer.png');
                break;

              case 'Beneficiaries':
                imageSource = focused
                  ? require('../../assets/images/ProfilePage/activeBeneficiaries.png')
                  : require('../../assets/images/ProfilePage/Beneficiaries.png');

                break;
              case 'ATMs':
                imageSource = focused
                  ? require('../../assets/images/ProfilePage/activeATMs.png')
                  : require('../../assets/images/ProfilePage/ATMs.png');
                break;
              case 'Air Pay':
                imageSource = focused
                  ? require('../../assets/images/ProfilePage/activeAirPay.png')
                  : require('../../assets/images/ProfilePage/AirPay.png');
                break;
            }
            //   const imageSource =
            //     `../../assets/images/ProfilePage/${route.name}.png`.toString();
            return <Image source={imageSource}></Image>;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: Colors.greyColor,
          tabBarActiveBackgroundColor: 'green',
          // tabBarInactiveBackgroundColor: 'red',

          tabBarItemStyle: {
            width: 70,
            height: 70,
            paddingHorizontal: 4,
            paddingVertical: 8,
            marginVertical: 5,
            marginHorizontal: 5,
            borderRadius: 16,
            // backgroundColor: isFocused ? Colors.primaryGreenColor : '#F1F3FB',
            // ({focused}) => {
            //   console.log('hello');
            //   console.log(focused);
            //   return focused ? Colors.primaryGreenColor : '#F1F3FB';
            // },
          },
          //   background: rgba(241, 243, 251, 1);
        };
      }}>
      <Tab.Screen name="Home" component={SettingsScreen} />
      <Tab.Screen name="Transfer" component={SettingsScreen} />
      <Tab.Screen name="Beneficiaries" component={SettingsScreen} />
      <Tab.Screen name="ATMs" component={SettingsScreen} />
      <Tab.Screen name="Air Pay" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const ProfilePage = () => {
  const Drawer = createDrawerNavigator();
  // MaterialCommunityIcons
  return (
    <View style={{flex: 1}}>
      {/* <Drawer.Group> */}
      <Drawer.Navigator initialRouteName="TabNavigator">
        <Drawer.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            // header: props => {
            //   return <View></View>;
            // },
            headerStyle: {
              backgroundColor: 'transparent',
            },
            drawerLabel: 'Home Screen',
          }}
        />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={SettingsScreen} />
      </Drawer.Navigator>
      {/* </Drawer.Group> */}
    </View>
  );
};

export default ProfilePage;
