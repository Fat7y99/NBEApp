import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import LoginPage from './src/pages/LoginPage';
import {Provider} from 'react-redux';
import {Store} from './src/redux/Store';
import {loginU} from './src/config/firebase';
const App = () => {
  loginU('fathy@gmail.com', 123698745);
  return (
    <Provider store={Store}>
      <View style={styles.entireContaier}>
        <StatusBar backgroundColor="transparent" translucent={true} />
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
