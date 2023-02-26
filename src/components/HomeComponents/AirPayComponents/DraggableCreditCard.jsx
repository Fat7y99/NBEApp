import {View, Animated, Image} from 'react-native';
const DraggableCreditCard = ({pan, panResponder, card}) => (
  <Animated.View
    style={{
      transform: [{translateX: pan.x}, {translateY: pan.y}],
    }}
    {...panResponder.panHandlers}>
    <Image style={{marginHorizontal: 10, elevation: 1}} source={card}></Image>
  </Animated.View>
);
export default DraggableCreditCard;
