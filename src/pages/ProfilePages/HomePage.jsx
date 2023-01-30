import {View, FlatList, Text, Image, ImageBackground} from 'react-native';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../constants/Colors';
import {useEffect} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import LogoHeader from '../../components/CommonComponents/LogoHeader';
import {Images} from '../../constants/Images';
import {useState} from 'react';
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
  const [activeDrawerItem, setActiveDrawerItem] = useState('Account Summary');
  const drawerItems = [
    {
      name: 'Account Summary',
      inactiveicon: require('../../../assets/images/ProfilePage/DrawerIcons/accountSummary.png'),
      activeicon: require('../../../assets/images/ProfilePage/DrawerIcons/activeAccountSummary.png'),
    },
    {
      name: 'Open Certificates & Deposits',
      inactiveicon: require('../../../assets/images/ProfilePage/DrawerIcons/certificates.png'),
      activeicon: require('../../../assets/images/ProfilePage/DrawerIcons/activeCertificates.png'),
    },
    {
      name: 'Payement Services',
      inactiveicon: require('../../../assets/images/ProfilePage/DrawerIcons/paymentServices.png'),
      activeicon: require('../../../assets/images/ProfilePage/DrawerIcons/activePaymentServices.png'),
    },
    {
      name: 'Cards Services',
      inactiveicon: require('../../../assets/images/ProfilePage/DrawerIcons/cardsServices.png'),
      activeicon: require('../../../assets/images/ProfilePage/DrawerIcons/activeCardsServices.png'),
    },
    {
      name: 'Hard Token',
      inactiveicon: require('../../../assets/images/ProfilePage/DrawerIcons/hardToken.png'),
      activeicon: require('../../../assets/images/ProfilePage/DrawerIcons/activeHardToken.png'),
    },
    {
      name: 'Offers',
      inactiveicon: require('../../../assets/images/ProfilePage/DrawerIcons/offers.png'),
      activeicon: require('../../../assets/images/ProfilePage/DrawerIcons/activeOffers.png'),
    },
    {
      name: 'Customer Services',
      inactiveicon: require('../../../assets/images/ProfilePage/DrawerIcons/customerServices.png'),
      activeicon: require('../../../assets/images/ProfilePage/DrawerIcons/activeCustomerServices.png'),
    },
    {
      name: 'Calculators',
      inactiveicon: require('../../../assets/images/ProfilePage/DrawerIcons/calculations.png'),
      activeicon: require('../../../assets/images/ProfilePage/DrawerIcons/activeCalculations.png'),
    },
    {
      name: 'Dark Mode',
      inactiveicon: require('../../../assets/images/ProfilePage/DrawerIcons/darkMode.png'),
      activeicon: require('../../../assets/images/ProfilePage/DrawerIcons/lightMode.png'),
    },
  ];
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: '85%',
            borderTopRightRadius: 40,
            borderBottomEndRadius: 40,
          },
        }}
        drawerContent={props => (
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.backgroundColor,
              borderTopRightRadius: 40,
              borderBottomEndRadius: 40,
            }}>
            <LogoHeader
              reverse={true}
              logoImage={Images.primaryLogo}></LogoHeader>
            <FlatList
              data={drawerItems}
              keyExtractor={item => item.name}
              renderItem={drawerItem => (
                <Pressable
                  onPress={() => {
                    props.navigation.closeDrawer();
                    setActiveDrawerItem(drawerItem.item.name);
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderRadius: 13,
                      alignItems: 'center',
                      width: 300,
                      height: 40,

                      backgroundColor:
                        activeDrawerItem === drawerItem.item.name
                          ? Colors.primaryGreenColor
                          : 'transparent',
                      marginHorizontal: 15,
                      marginBottom: 13,
                    }}>
                    <View
                      style={{
                        height: 30,
                        width: 30,
                        backgroundColor: ' rgba(27, 27, 27, 0.2)',
                        borderRadius: 12,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 50,
                        marginHorizontal: 10,
                      }}>
                      <Image
                        source={
                          activeDrawerItem === drawerItem.item.name
                            ? drawerItem.item.activeicon
                            : drawerItem.item.inactiveicon
                        }></Image>
                    </View>

                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '500',
                        // color: '#1B1B1B',
                        color:
                          activeDrawerItem === drawerItem.item.name
                            ? 'white'
                            : '#1B1B1B',
                      }}>
                      {drawerItem.item.name}
                    </Text>
                  </View>
                </Pressable>
              )}></FlatList>
            {/* {drawerItems.map(drawerItem => (
              
            ))} */}
            <View style={{flex: 1}}>
              <Pressable
                onPress={() => {
                  props.navigation.closeDrawer();
                  console.log('LogOut');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderRadius: 13,
                    alignItems: 'center',
                    width: 300,
                    height: 40,

                    backgroundColor: 'transparent',
                    marginHorizontal: 15,
                    marginBottom: 13,
                  }}>
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: ' rgba(27, 27, 27, 0.2)',
                      borderRadius: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginVertical: 50,
                      marginHorizontal: 10,
                    }}>
                    <Image
                      source={require('../../../assets/images/ProfilePage/DrawerIcons/logout.png')}></Image>
                  </View>

                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '500',
                      // color: '#1B1B1B',
                      color: '#1B1B1B',
                    }}>
                    Log Out
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        )}
        initialRouteName="TabNavigator">
        {/* <Drawer.Screen
          name="Home"
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
        /> */}

        <Drawer.Screen name="Notifications" component={SettingsScreen} />
      </Drawer.Navigator>
    </View>
  );
};

export default HomePage;
