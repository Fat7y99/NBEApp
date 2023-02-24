import React, {useRef} from 'react';
import {
  Animated,
  Pressable,
  View,
  StyleSheet,
  PanResponder,
  Text,
} from 'react-native';
import {measure} from 'react-native-reanimated';
import {useState} from 'react';
import {useEffect} from 'react';
import {Colors} from './constants/Colors';
import SplashScreen from 'react-native-splash-screen';
let ref = null;

const test = () => {
  SplashScreen.hide(); //hides the splash screen on app load.

  ref = useRef();
  //   setTimeout(
  //     TransferDropdown.measure((fx, fy, width, height, px, py) => {
  //       console.log('Component width is: ' + width);
  //       console.log('Component height is: ' + height);
  //       console.log('X offset to frame: ' + fx);
  //       console.log('Y offset to frame: ' + fy);
  //       console.log('X offset to page: ' + px);
  //       console.log('Y offset to page: ' + py);
  //     }),
  //     0,
  //   );

  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);

        Animated.event([null, {dx: pan.x, dy: pan.y}], {
          useNativeDriver: false,
        });
        console.log('our value: ', pan.x._value);
      },
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderRelease: () => {
        console.log(pan.x._value);
        if (pan.x._value > 100) {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: true,
          }).start();
        }
        ref.current.measureInWindow((fx, fy, width, height, px, py) => {
          console.log('Component width is: ' + width);
          console.log('Component height is: ' + height);
          console.log('X offset to frame: ' + fx);
          console.log('Y offset to frame: ' + fy);
          console.log('X offset to page: ' + px);
          console.log('Y offset to page: ' + py);
        });
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag & Release this box!</Text>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default test;
