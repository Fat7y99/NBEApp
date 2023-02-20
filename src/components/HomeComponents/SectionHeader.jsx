import {View, Text} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {Colors} from '../../constants/Colors';
const SectionHeader = ({title, onPressHandler}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          color: Colors.darkBlueColor,
        }}>
        {title}
      </Text>
      <Pressable onPress={onPressHandler}>
        <Text>View All</Text>
      </Pressable>
    </View>
  );
};
export default SectionHeader;
