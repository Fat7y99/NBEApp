import {View, FlatList, Text, Image, ImageBackground} from 'react-native';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Switch} from 'react-native-gesture-handler';
import {Colors} from '../../constants/Colors';
import {useEffect} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import LogoHeader from '../../components/CommonComponents/LogoHeader';
import {Images} from '../../constants/Images';
import {useState} from 'react';
function HomeScreen({navigation}) {
  const [isBalanceVisible, SetBalanceVisibility] = useState(false);
  const showBalanceHandler = () => {
    SetBalanceVisibility(prevState => !prevState);
  };
  const Categories = [
    {
      name: 'Accounts',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts.png'),
      backgroundColor: 'rgba(0, 201, 116, 0.15)',
    },
    {
      name: 'Cards',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/Cards.png'),
      backgroundColor: 'rgba(0, 173, 248, 0.15)',
    },
    {
      name: 'Utilities',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/Utilities.png'),
      backgroundColor: 'rgba(246, 167, 33, 0.15)',
    },
    {
      name: 'History',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/History.png'),
      backgroundColor: 'rgba(255, 0, 46, 0.15)',
    },
  ];
  const Accounts = [
    {
      name: 'Ayman',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts/account1.png'),
    },
    {
      name: 'Alex',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts/account2.png'),
    },
    {
      name: 'Soha',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts/account3.png'),
    },
    {
      name: 'Hala',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts/account4.png'),
    },
    {
      name: 'Mohamed',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts/account5.png'),
    },
    {
      name: 'Alaa',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts/account6.png'),
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#F0F2FA'}}>
      <View
        style={{
          alignSelf: 'center',
          height: 132,
          width: 347,
          backgroundColor: '#003D1D',
          borderRadius: 22,
          overflow: 'hidden',
        }}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../../../assets/images/ProfilePage/balanceContainer.png')}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 19,
              marginTop: 11,
              marginBottom: 20,
            }}>
            <Text
              style={{
                color: '#F7F7F7',
                fontSize: 16,
                fontWeight: '400',
              }}>
              Balance
            </Text>
            <Image
              style={{height: 27, width: 27}}
              source={require('../../../assets/images/LoginImages/fingerPrintIcon.png')}></Image>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable onPress={showBalanceHandler}>
              <Text
                style={{
                  color: '#F7F7F7',
                  fontSize: isBalanceVisible ? 25 : 22,
                  fontWeight: '700',
                }}>
                {isBalanceVisible
                  ? '$2,374,654.25'
                  : 'Press here to show balance'}{' '}
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      <View style={{flexDirection: 'row'}}>
        <FlatList
          horizontal={true}
          data={Categories}
          style={{
            flex: 1,
            // backgroundColor: 'red',
          }}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            marginVertical: 30,
          }}
          renderItem={item => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: item.item.backgroundColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 59,
                  width: 59,
                  borderRadius: 13,
                  marginHorizontal: 18,
                }}>
                <Image source={item.item.icon}></Image>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: Colors.darkBlueColor,
                }}>
                {item.item.name}
              </Text>
            </View>
          )}></FlatList>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: Colors.darkBlueColor,
          }}>
          Send money
        </Text>
        <Text>View All</Text>
      </View>
      <FlatList
        horizontal={true}
        data={Accounts}
        style={{marginLeft: 15}}
        renderItem={item => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 86,
              marginTop: 10,
              width: 77,
              borderRadius: 18,
              backgroundColor: 'white',
              marginHorizontal: 6,
            }}>
            <Image
              style={{height: 33.5, width: 110}}
              source={item.item.icon}></Image>
            <Text>{item.item.name}</Text>
          </View>
        )}></FlatList>
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
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
              style={{height: '45%'}}
              data={drawerItems}
              keyExtractor={item => item.name}
              renderItem={drawerItem =>
                drawerItem.item.name === 'Dark Mode' ? (
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
                      <Image source={drawerItem.item.inactiveicon}></Image>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '500',
                          color: Colors.fontColor,
                        }}>
                        Dark Mode
                      </Text>
                      <View
                        style={{
                          backgroundColor: 'white',
                          alignSelf: 'flex-end',
                          borderRadius: 15,
                        }}>
                        <Switch
                          trackColor={{
                            true: 'transparent',
                            false: 'transparent',
                          }}
                          thumbColor={
                            isEnabled ? Colors.primaryGreenColor : '#B3B3B3'
                          }
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                        />
                      </View>
                    </View>
                  </View>
                ) : (
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
                          // color: Colors.fontColor,
                          color:
                            activeDrawerItem === drawerItem.item.name
                              ? 'white'
                              : Colors.fontColor,
                        }}>
                        {drawerItem.item.name}
                      </Text>
                    </View>
                  </Pressable>
                )
              }></FlatList>
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
                      marginHorizontal: 10,
                    }}>
                    <Image
                      source={require('../../../assets/images/ProfilePage/DrawerIcons/logout.png')}></Image>
                  </View>

                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '500',
                      color: Colors.fontColor,
                    }}>
                    Log Out
                  </Text>
                </View>
              </Pressable>
              <View
                style={{
                  elevation: 5,
                  height: 89,
                  width: 286,
                  backgroundColor: 'white',
                  borderRadius: 29,
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 15,
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../../../assets/images/ProfilePage/avatar.png')}></Image>
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        fontWeight: '500',
                        color: Colors.fontColor,
                        fontSize: 18,
                      }}>
                      Ahmad Sami
                    </Text>
                    <Text
                      style={{
                        fontWeight: '400',
                        fontSize: 14,
                        color: '#4D4D4D',
                      }}>
                      +20 101 131 5412
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    }}>
                    <Pressable>
                      <Image
                        source={require('../../../assets/images/ProfilePage/dotsButton.png')}></Image>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        initialRouteName="TabsNavigator">
        <Drawer.Screen
          name="TabsNavigator"
          component={TabsNavigator}
          options={({navigation}) => ({
            header: () => {
              return (
                <View
                  style={{
                    backgroundColor: '#F0F2FA',
                    alignItems: 'center',

                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      marginTop: 50,
                      marginHorizontal: 25,
                      marginBottom: 35,
                      backgroundColor: '#F0F2FA',
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
                      Good morning{' '}
                      <Text style={{fontWeight: '700'}}>Ahmad</Text>
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
                </View>
              );
            },
            headerStyle: {
              backgroundColor: 'transparent',
            },
            drawerLabel: 'Home Screen',
          })}
        />

        {/* <Drawer.Screen name="TabNavigator" component={TabsNavigator} /> */}
      </Drawer.Navigator>
    </View>
  );
};

export default HomePage;
