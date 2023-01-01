import React from 'react';
import Sayed from './src/components/LoginComponents/FingerPrintSheet';
import {StyleSheet, StatusBar, Text, useColorScheme, View} from 'react-native';
import LoginPage from './src/pages/LoginPage';
import {Provider} from 'react-redux';

import {Store} from './src/redux/Store';
import {sayed} from './src/redux/fingerPrintReducer';
const App = () => {
  sayed();
  return (
    <Provider store={Store}>
      <View style={styles.entireContaier}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <LoginPage></LoginPage>
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
