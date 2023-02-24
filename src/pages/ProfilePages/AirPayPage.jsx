import {iteratorSymbol} from 'immer/dist/internal';
import {
  View,
  Image,
  PanResponder,
  Text,
  Animated,
  StyleSheet,
} from 'react-native';
import {useRef} from 'react';
import {FlatList} from 'react-native-gesture-handler';
let ref = null;

// const test = () => {
//     SplashScreen.hide(); //hides the splash screen on app load.

//     //   setTimeout(
//     //     TransferDropdown.measure((fx, fy, width, height, px, py) => {
//     //       console.log('Component width is: ' + width);
//     //       console.log('Component height is: ' + height);
//     //       console.log('X offset to frame: ' + fx);
//     //       console.log('Y offset to frame: ' + fy);
//     //       console.log('X offset to page: ' + px);
//     //       console.log('Y offset to page: ' + py);
//     //     }),
//     //     0,
//     //   );

//     return (
//       <View style={styles.container}>
//         <Text style={styles.titleText}>Drag & Release this box!</Text>

//       </View>
//     );
//   };
const AirPayPage = ({navigation}) => {
  ref = useRef();
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
        // ref.current.measureInWindow((fx, fy, width, height, px, py) => {
        //   console.log('Component width is: ' + width);
        //   console.log('Component height is: ' + height);
        //   console.log('X offset to frame: ' + fx);
        //   console.log('Y offset to frame: ' + fy);
        //   console.log('X offset to page: ' + px);
        //   console.log('Y offset to page: ' + py);
        // });
      },
    }),
  ).current;
  const Cards = [
    require('../../../assets/images/ProfilePage/AirPay/Blue.png'),
    require('../../../assets/images/ProfilePage/AirPay/Red.png'),
    require('../../../assets/images/ProfilePage/AirPay/Green.png'),
  ];
  return (
    <View
      style={{
        flex: 1,

        // backgroundColor: 'red',
      }}>
      <FlatList
        horizontal={true}
        data={Cards}
        renderItem={item => (
          <Animated.View
            style={{
              transform: [{translateX: pan.x}, {translateY: pan.y}],
            }}
            {...panResponder.panHandlers}>
            <View style={styles.box} />
          </Animated.View>
          //   <Image
          //     style={{marginHorizontal: 10, elevation: 23}}
          //     source={item.item}></Image>
        )}></FlatList>
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
export default AirPayPage;
