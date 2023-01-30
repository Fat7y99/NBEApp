import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

import LoginPage from './src/pages/LoginPage';
import CongratulationPage from './src/pages/CongratulationPage';
import {Provider} from 'react-redux';
import {Store} from './src/redux/Store';
import {signUp, login} from './src/services/firebase';
import OTPPage from './src/pages/OTPPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {postData, fetchData} from './src/services/API';
import MobileNumberPage from './src/pages/MobileNumberPage';
import FingerPrintSheet from './src/components/CommonComponents/FingerPrintSheet';
import SettingPasswordPage from './src/pages/SettingPasswordPage';
import HomePage from './src/pages/ProfilePages/HomePage';
import {ActionSheetProvider, SheetManager} from 'react-native-actions-sheet';
import {SheetProvider} from 'react-native-actions-sheet';
import './src/components/CommonComponents/sheets';
import ActionSheetExample from './src/components/CommonComponents/ActionSheetExample';
import {registerSheet} from 'react-native-actions-sheet';
const appWrapper = () => {
  return (
    <Provider store={Store}>
      <App></App>
    </Provider>
  );
};
const App = () => {
  console.log('Starting...');

  // fetchData();
  // postData();
  // login('fathy.nabil2022@gamail.com', 123698745);
  const Stack = createNativeStackNavigator();
  // addCarsData();
  return (
    <NavigationContainer>
      <SheetProvider>
        <View style={styles.entireContaier}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              presentation: 'fullScreenModal',
              animation: 'slide_from_right',
            }}>
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen
              name="MobileNumberPage"
              component={MobileNumberPage}
            />
            <Stack.Screen name="OTPPage" component={OTPPage} />
            <Stack.Screen
              name="SettingPasswordPage"
              component={SettingPasswordPage}
            />
            <Stack.Screen
              name="CongratulationPage"
              component={CongratulationPage}
            />
            <Stack.Screen name="HomePage" component={HomePage} />
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
