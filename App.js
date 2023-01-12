import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import LoginPage from './src/pages/LoginPage';
import CongratulationPage from './src/pages/CongratulationPage';
import {Provider, useDispatch} from 'react-redux';
import {Store} from './src/redux/Store';
import {signUp, login} from './src/services/firebase';
import OTPFields from './src/pages/OTPPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {postData, fetchData} from './src/services/API';
import MobileNumberPage from './src/pages/MobileNumberPage';
import FingerPrintSheet from './src/components/CommonComponents/FingerPrintSheet';
import SettingPasswordPage from './src/pages/SettingPasswordPage';
const appWrapper = () => {
  return (
    <Provider store={Store}>
      <App></App>
    </Provider>
  );
};
const App = () => {
  console.log('Starting...');
  // const ref = useRef()
  // console.log('SAYED',ref);
  // fetchData();
  // postData();
  // login('fathy.nabil2022@gamail.com', 123698745);
  const Stack = createNativeStackNavigator();
  // addCarsData();
  return (
    <NavigationContainer>
      <View style={styles.entireContaier}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <CongratulationPage></CongratulationPage>
        {/* <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="OTPPage" component={OTPFields} />
          <Stack.Screen
            name="CongratulationPage"
            component={CongratulationPage}
          />
        </Stack.Navigator> */}
        {/* <OTPFields></OTPFields> */}
        {/* <CongratulationPage></CongratulationPage> */}
        {/* <LoginPage></LoginPage> */}
        {/* <FirebaseTesting></FirebaseTesting> */}
        {/* <FingerPrintSheet></FingerPrintSheet> */}
      </View>
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
