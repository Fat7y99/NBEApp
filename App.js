import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

import LoginPage from './src/pages/LoginPage';
import CongratulationPage from './src/pages/CongratulationPage';
import {Provider, useSelector} from 'react-redux';
import {Store} from './src/redux/Store';
import {
  signUp,
  login,
  addHistoryData,
  getHistoryData,
} from './src/services/firebase';
import Spinner from 'react-native-loading-spinner-overlay';

import OTPPage from './src/pages/OTPPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MobileNumberPage from './src/pages/MobileNumberPage';
import SettingPasswordPage from './src/pages/SettingPasswordPage';
import HomePage from './src/pages/ProfilePages/HomePage';
import {SheetProvider} from 'react-native-actions-sheet';
import './src/components/CommonComponents/sheets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen'; //import SplashScreen
import {useEffect} from 'react';
import ProfileDrawer from './src/components/HomeComponents/ProfileDrawer';
import NewBeneficiary from './src/components/HomeComponents/BeneficiariesComponents/NewBeneficiary';
import FingerPrintSheet from './src/components/CommonComponents/FingerPrintSheet';
const appWrapper = () => {
  return (
    <Provider store={Store}>
      <App></App>
    </Provider>
  );
};
const App = () => {
  console.log('Starting...');
  const loading = useSelector(state => state.appState.loading);
  // addHistoryData();
  // addHistoryData();
  // getHistoryData().then(historyData => {
  //   console.log(historyData);
  // });
  // fetchData();
  // postData();
  // login('fathy.nabil2022@gamail.com', 123698745);
  const Stack = createNativeStackNavigator();
  // addCarsData();
  // let islogin;
  // const isLogin = async () => {
  //   const recoveredData = await AsyncStorage.getItem('userData');
  //   console.log(recoveredData);
  //   islogin = recoveredData !== null;
  //   return recoveredData;
  // };
  // console.log(async () => await isLogin());
  SplashScreen.hide(); //hides the splash screen on app load.

  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  return (
    <NavigationContainer>
      <SheetProvider>
        <View style={styles.entireContaier}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <Spinner
            visible={loading}
            // textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
          {/* <OTPPage></OTPPage> */}
          {/* <HomePage></HomePage> */}
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              presentation: 'fullScreenModal',
              animation: 'slide_from_right',
            }}>
            {false ? (
              <Stack.Screen name="ProfileDrawer" component={ProfileDrawer} />
            ) : (
              <Stack.Screen name="LoginPage" component={LoginPage} />
            )}
            <Stack.Screen
              name="MobileNumberPage"
              component={MobileNumberPage}
            />
            <Stack.Screen name="OTPPage" component={OTPPage} />
            <Stack.Screen
              name="SettingPasswordPage"
              component={SettingPasswordPage}
            />
            <Stack.Screen name="ProfileDrawer" component={ProfileDrawer} />

            <Stack.Screen
              name="CongratulationPage"
              component={CongratulationPage}
            />
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="ProfilePage" component={ProfileDrawer} />

            <Stack.Screen
              name="NewBeneficiary"
              component={NewBeneficiary}></Stack.Screen>
          </Stack.Navigator>
        </View>
      </SheetProvider>
    </NavigationContainer>
  );
};

export default appWrapper;
const styles = StyleSheet.create({
  entireContaier: {
    flex: 1,
    // backgroundColor: 'rgba(255, 0, 0, 0.5)',
  },
});
