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
let ref = null;

const test = () => {
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
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
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
        <TransferDropdown title="sa" values={['sayed']}></TransferDropdown>
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
const TransferDropdown = ({title, values}) => {
  const [selectedValue, SetSelectedValue] = useState(values[0]);
  const changeValueHandler = value => {
    SetSelectedValue(value);
  };

  useEffect(
    () =>
      ref.current.measureInWindow((fx, fy, width, height) => {
        console.log('Component width is: ' + width);
        console.log('Component height is: ' + height);
        console.log('X offset to frame: ' + fx);
        console.log('Y offset to frame: ' + fy);
        console.log('X offset to page: ' + px);
        console.log('Y offset to page: ' + py);
      }),
    [],
  );
  return (
    <View
      ref={ref}
      style={{
        height: 65,
        width: 346,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 3,
        paddingHorizontal: 16,
        paddingVertical: 11,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              color: Colors.darkBlueColor,
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: Colors.darkBlueColor,
            }}>
            {selectedValue}
          </Text>
        </View>
        <Pressable
          style={{flex: 1}}
          onPress={() => {
            console.log('pressed');

            SheetManager.show('transferAccounts-sheet', {
              payload: {values: values, callBackFunction: changeValueHandler},
            });
          }}>
          <View
            style={{
              flex: 1,
              // backgroundColor: 'red',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            {/* <Image
              source={require('../../../assets/images/ProfilePage/TransferImages/arrowIcon.png')}></Image> */}
          </View>
        </Pressable>
      </View>
    </View>
  );
};
export default test;
