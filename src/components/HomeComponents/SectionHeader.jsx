import {View, Text} from 'react-native';
import {Colors} from '../../constants/Colors';
const SectionHeader = ({title}) => {
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
      <Text>View All</Text>
    </View>
  );
};
export default SectionHeader;
