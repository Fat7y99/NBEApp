import {View, Image, Text} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const BeneficiaryCard = ({item, navigation}) => (
  <Pressable
    onPress={() => {
      // console.log(item.firstName, item.firstName);
      navigation.navigate('HistoryPage', {card: item});
    }}>
    <View
      style={{
        // flex: 1,
        height: 75,
        width: 110,
        borderRadius: 18,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 1,
      }}>
      <Image
        style={{
          height: item.imageUrl ? 50 : 50,
          width: item.imageUrl ? 30 : 90,
        }}
        source={{uri: item.icon ?? item.imageUrl}}></Image>
      <Text>{item.name ?? item.firstName}</Text>
    </View>
  </Pressable>
);
export default BeneficiaryCard;
