import {iteratorSymbol} from 'immer/dist/internal';
import {
  View,
  PanResponder,
  Text,
  Dimensions,
  Animated,
  StyleSheet,
} from 'react-native';
import {useRef} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import DraggableCreditCard from '../../components/HomeComponents/AirPayComponents/DraggableCreditCard';
import {Colors} from '../../constants/Colors';
import PrimaryButton from '../../components/CommonComponents/PrimaryButton';
import {SheetManager} from 'react-native-actions-sheet';
let ref = null;

const AirPayPage = ({navigation}) => {
  ref = useRef();
  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;
  const pans = useRef([]).current;
  const panResponders = useRef([]).current;
  const createResponder = index => {
    const pan = new Animated.ValueXY({x: 0, y: 0});
    return [
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          pan.setOffset({x: pan.x._value, y: pan.y._value});
        },
        onPanResponderMove: (_, gesture) => {
          pan.setValue({x: gesture.dx, y: gesture.dy});
        },
        onPanResponderRelease: () => {
          pan.flattenOffset();
          if (pan.y._value >= windowHeight * 0.2) {
            Animated.spring(pan, {
              toValue: {
                x: 0.06 * windowWidth,
                y: 0.33 * windowHeight,
              },
              duration: 100,
              useNativeDriver: true,
            }).start();
          } else {
            Animated.spring(pan, {
              toValue: {x: 0, y: 0},
              duration: 100,
              useNativeDriver: true,
            }).start();
          }
        },
      }),
      pan,
    ];
  };

  const Cards = [
    require('../../../assets/images/ProfilePage/AirPay/Blue.png'),
    require('../../../assets/images/ProfilePage/AirPay/Red.png'),
    require('../../../assets/images/ProfilePage/AirPay/Green.png'),
  ];

  Cards.forEach((_, index, __) => {
    console.log('index: ', index);
    const [responder, pan] = createResponder(index);
    pans.push(pan);
    panResponders.push(responder);
  });

  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        horizontal={true}
        data={Cards}
        showsHorizontalScrollIndicator={false}
        style={{elevation: 3}}
        contentContainerStyle={{elevation: 3}}
        renderItem={item => (
          <DraggableCreditCard
            pan={pans[item.index]}
            panResponder={panResponders[item.index]}
            card={item.item}></DraggableCreditCard>
        )}></FlatList>
      <View style={styles.floatingDropBox}>
        <Text
          style={{
            textAlign: 'center',
            marginHorizontal: 30,
            fontWeight: '500',
            color: Colors.primaryGreenColor,
            fontSize: 20,
          }}>
          Touch & hold a card then drag it to this box
        </Text>
      </View>
      <View style={{alignSelf: 'center', marginBottom: 25}}>
        <PrimaryButton
          callBackFunction={() => {
            SheetManager.show('fingerPrint-sheet');
          }}
          height={50}
          width={345}
          backgroundColor={Colors.primaryGreenColor}
          title="Pay Now"
          textColor="white"></PrimaryButton>
      </View>
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
  floatingDropBox: {
    zIndex: -1,
    position: 'absolute',
    top: '45%',
    left: '6%',
    height: 216,
    width: 346,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: Colors.primaryGreenColor,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: -1,
  },
});
export default AirPayPage;
