import {View, Pressable} from 'react-native';
import {clockRunning} from 'react-native-reanimated';
import {Colors} from '../../constants/Colors';
const ActionsButtonContainer = ({
  children,
  fillFirst,
  fillColor,
  onPressHandler,
}) => {
  return (
    <View
      style={{
        marginHorizontal: 5,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: fillColor ?? 'white',
        elevation: 1,
        width: 60,
        height: 30,
        alignItems: 'center',
        justifyContent: fillFirst ? 'center' : 'space-around',
        borderRadius: 15,
      }}>
      <Pressable onPress={onPressHandler}>
        <View
          style={{
            backgroundColor: fillFirst
              ? 'transparent'
              : Colors.primaryGreenColor,
            width: fillFirst ? 20 : 24,
            height: fillFirst ? 20 : 24,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
          }}>
          {children[0]}
        </View>
      </Pressable>

      <Pressable onPress={onPressHandler}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // width: 24,
            height: 24,
          }}>
          {children[1]}
        </View>
      </Pressable>
    </View>
  );
};
export default ActionsButtonContainer;
