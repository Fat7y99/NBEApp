import {
  Modal,
  TouchableWithoutFeedback,
  Pressable,
  Text,
  View,
  Image,
} from 'react-native';
import {Colors} from '../../constants/Colors';
import RadialGradient from 'react-native-radial-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSheet} from '../../redux/fingerPrint';

export default function FingerPrintSheet() {
  const isOpened = useSelector(state => state.fingerPrint.isOpened);
  const dispatch = useDispatch();
  const toggleBottomSheet = () => {
    dispatch(toggleSheet(!isOpened));
  };

  return (
    <Modal
      animationType="fade"
      animationDuration={1000}
      transparent={true}
      presentationStyle="overFullScreen"
      statusBarTranslucent={true}
      visible={isOpened}>
      <Pressable
        style={{flex: 1, backgroundColor: 'rgba(28, 36, 55, 0.77)'}}
        onPress={toggleBottomSheet}>
        <View
          style={{
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <TouchableWithoutFeedback>
            <View
              style={{
                height: 290,
                backgroundColor: 'white',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                paddingHorizontal: 18,
                paddingTop: 18,
              }}>
              <Text
                style={{
                  color: Colors.darkBlueColor,
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                Fingerprint for NBE Mobile
              </Text>

              <Text
                style={{
                  color: Colors.darkBlueColor,
                  marginVertical: 12.5,
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                Log in with your fingerprint
              </Text>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
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

                <Text style={{color: Colors.greyColor, marginVertical: 12.5}}>
                  Touch the fingerprint sensor
                </Text>
              </View>

              <Pressable onPress={toggleBottomSheet}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      color: Colors.primaryGreenColor,
                      fontSize: 16,

                      fontWeight: '700',
                    }}>
                    Cancel
                  </Text>
                </View>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Pressable>
    </Modal>
  );
}
