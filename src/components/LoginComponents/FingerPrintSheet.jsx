import {View, Text, Animated, Image} from 'react-native';

import BottomSheet from 'react-native-simple-bottom-sheet';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import RadialGradient from 'react-native-radial-gradient';

const bottomSheetRef = {current: null};

function FingerPrintSheet() {
  const onCancelHandler = () => {
    console.log('Canceleeeeeed');
    console.log('Canceleeeeeed');
    bottomSheetRef.current.togglePanel();

    console.log('Canceleeeeeed');

    // SetOpen(false);
  };

  return (
    <BottomSheet
      isOpen={false}
      sliderMinHeight={-10}
      ref={ref => {
        bottomSheetRef.current = ref;
      }}>
      <View>
        <Text style={{color: '#1C2437', fontSize: 20, fontWeight: '700'}}>
          Fingerprint for NBE Mobile
        </Text>

        <Text
          style={{
            color: '#1C2437',
            marginVertical: 12.5,
            fontSize: 16,
            fontWeight: '400',
          }}>
          Log in with your fingerprint
        </Text>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <RadialGradient
            colors={['white', '#00C974']}
            stops={[0.38, 1]}
            center={[44, 44]}
            radius={50}
            style={{
              width: 88,
              overflow: 'hidden',
              height: 88,
              marginVertical: 12.5,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#00C974',
            }}>
            <Image
              source={require('../../../assets/images/LoginImages/clickFingerPrint.png')}></Image>
          </RadialGradient>

          <Text style={{color: '#B7B7B7', marginVertical: 12.5}}>
            Touch the fingerprint sensor
          </Text>
        </View>
        {/* <LinearGradient
            colors={['#00C974', '#ffffff']}
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            style={{
              width: 88,
              height: 88,
              //   backgroundColor: 'red',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: 'red',
            }}>
            <View>
              <Image
                source={require('../../../assets/images/LoginImages/clickFingerPrint.png')}></Image>
            </View>
          </LinearGradient> */}
        <Pressable onPress={onCancelHandler}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: '#007236',
                fontSize: 16,
                margin: 20,
                fontWeight: '700',
              }}>
              Cancel
            </Text>
          </View>
        </Pressable>
      </View>
    </BottomSheet>
  );
}
export default FingerPrintSheet;
export const toggleBottomSheet = () => {
  bottomSheetRef.current.togglePanel();
};
