import {View, StatusBar, Text, Image, ImageBackground} from 'react-native';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../constants/Colors';
import {useEffect} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable>
        <View style={{width: 280}}>
          <ImageBackground
            imageStyle={{height: 132, width: 347}}
            source={require('../../../assets/images/ProfilePage/balancecontainer.png')}></ImageBackground>
        </View>
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Transfer" component={SettingsScreen} />
      <Tab.Screen name="Beneficiaries" component={SettingsScreen} />
      <Tab.Screen name="ATMs" component={SettingsScreen} />
      <Tab.Screen name="Air Pay" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const HomePage = props => {
  const Drawer = createDrawerNavigator();

  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator initialRouteName="TabNavigator">
        <Drawer.Screen
          name="TabNavigator"
          component={TabsNavigator}
          options={({navigation}) => ({
            header: () => {
              return (
                <View
                  style={{
                    marginTop: 50,
                    marginHorizontal: 25,
                    marginBottom: 35,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Pressable onPress={() => navigation.openDrawer()}>
                    <Image
                      source={require('../../../assets/images/ProfilePage/drawerIcon.png')}></Image>
                  </Pressable>
                  <Pressable>
                    <View style={{marginHorizontal: 7}}>
                      <Image
                        source={require('../../../assets/images/ProfilePage/avatar.png')}></Image>
                    </View>
                  </Pressable>
                  <Text style={{width: 90, fontSize: 14, fontWeight: '300'}}>
                    Good morning <Text style={{fontWeight: '700'}}>Ahmad</Text>
                  </Text>
                  <View
                    style={{
                      alignItems: 'flex-end',
                      flex: 1,
                    }}>
                    <Pressable>
                      <Image
                        source={require('../../../assets/images/ProfilePage/notifications.png')}></Image>
                    </Pressable>
                  </View>
                </View>
              );
            },
            headerStyle: {
              backgroundColor: 'transparent',
            },
            drawerLabel: 'Home Screen',
          })}
        />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={SettingsScreen} />
      </Drawer.Navigator>
    </View>
  );
};

export default HomePage;
