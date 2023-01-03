import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import LoginPage from './src/pages/LoginPage';
import CongratulationPage from './src/pages/CongratulationPage';
import {Provider} from 'react-redux';
import {Store} from './src/redux/Store';
import {signUp, login} from './src/services/firebase';
import OTPFields from './src/pages/OTPPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  login('fathyy@gamail.com', 123698745);
  const Stack = createNativeStackNavigator();
  // addCarsData();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <View style={styles.entireContaier}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="OTPPage" component={OTPFields} />
            <Stack.Screen
              name="CongratulationPage"
              component={CongratulationPage}
            />
          </Stack.Navigator>
          {/* <OTPFields></OTPFields> */}
          {/* <CongratulationPage></CongratulationPage> */}
          {/* <LoginPage></LoginPage> */}
          {/* <FirebaseTesting></FirebaseTesting> */}
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  entireContaier: {
    flex: 1,
  },
});
