import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Image, Pressable, FlatList} from 'react-native';
import LogoHeader from '../CommonComponents/LogoHeader';
import {useState} from 'react';
import TabsNavigator from './TabsNavigator';
import {Colors} from '../../constants/Colors';
import {Images} from '../../constants/Images';
import {Switch} from 'react-native-gesture-handler';
import HistoryPage from '../../pages/ProfilePages/HistoryPage';
const ProfileDrawer = props => {
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
                      // width: 100%,
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
      </Drawer.Navigator>
    </View>
  );
};

export default ProfileDrawer;
