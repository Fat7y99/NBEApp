import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import LoginPage from './src/pages/LoginPage';
import CongratulationPage from './src/pages/CongratulationPage';
import {Provider} from 'react-redux';
import {Store} from './src/redux/Store';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import Spinner from 'react-native-loading-spinner-overlay';
import OTPPage from './src/pages/OTPPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MobileNumberPage from './src/pages/MobileNumberPage';
import SettingPasswordPage from './src/pages/SettingPasswordPage';
import HomePage from './src/pages/ProfilePages/HomePage';
import {SheetProvider} from 'react-native-actions-sheet';
import './src/components/CommonComponents/sheets';
import SplashScreen from 'react-native-splash-screen'; //import SplashScreen
import {useEffect} from 'react';
import ProfileDrawer from './src/components/HomeComponents/ProfileDrawer';
import NewBeneficiary from './src/components/HomeComponents/BeneficiariesComponents/NewBeneficiary';
import {getAppState} from './src/services/hooks/Hooks';
const appWrapper = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <App></App>
      </Provider>
    </QueryClientProvider>
  );
};
const App = () => {
  console.log('Starting...');
  const loading = getAppState();
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <SheetProvider>
        <View style={styles.entireContaier}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <Spinner visible={loading} textStyle={styles.spinnerTextStyle} />

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
  },
});
