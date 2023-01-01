import React from 'react';
import Sayed from './src/components/LoginComponents/temp';
import {StyleSheet, StatusBar, Text, useColorScheme, View} from 'react-native';
import LoginPage from './src/pages/LoginPage';

const App = () => {
  return (
    <View style={styles.entireContaier}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <LoginPage></LoginPage>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  entireContaier: {
    flex: 1,
  },
});
