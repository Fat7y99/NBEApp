import {View, Text, Image, Pressable} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {SheetManager} from 'react-native-actions-sheet';
const TransferActionComponent = ({
  name,
  description,
  icon,
  callbackFunction,
}) => {
  return (
    <View
      style={{flexDirection: 'row', marginBottom: 20, marginHorizontal: 12}}>
      <Pressable style={{flexDirection: 'row'}} onPress={callbackFunction}>
        <Image source={icon} />
        <View>
          <Text
            style={{
              fontSize: 16,
              marginHorizontal: 12,
              color: Colors.darkBlueColor,
            }}>
            {name}
          </Text>
          <Text style={{fontSize: 16, marginHorizontal: 12, color: '#848484'}}>
            {description}
          </Text>
        </View>
      </Pressable>

      {name === 'Transfer' ? (
        <Pressable
          style={{flex: 1}}
          onPress={() => {
            SheetManager.hideAll();
            SheetManager.show('fingerPrint-sheet');
          }}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Image
              source={require('../../../../assets/images/LoginImages/fingerPrintIcon.png')}></Image>
          </View>
        </Pressable>
      ) : (
        ''
      )}
    </View>
  );
};
export default TransferActionComponent;
