import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import LoginPage from './src/pages/LoginPage';
import CongratulationPage from './src/pages/CongratulationPage';
import {Provider} from 'react-redux';
import {Store} from './src/redux/Store';
import {signUp, login} from './src/services/firebase';
import OTPFields from './src/pages/OTPPage';
const App = () => {
  login('fathyy@gamail.com', 123698745);
  // addCarsData();
  return (
    <Provider store={Store}>
      <View style={styles.entireContaier}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        {/* <OTPFields></OTPFields> */}
        {/* <CongratulationPage></CongratulationPage> */}
        <LoginPage></LoginPage>
        {/* <FirebaseTesting></FirebaseTesting> */}
      </View>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  entireContaier: {
    flex: 1,
  },
});
