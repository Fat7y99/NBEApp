import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import LogoHeader from '../components/CommonComponents/LogoHeader';
import PrimaryButton from '../components/CommonComponents/PrimaryButton';
import {Colors} from '../constants/Colors';
import {getCurrentLanguage} from '../services/hooks/Hooks';
import t from '../../assets/Translations.json';
const CongratulationPage = ({navigation}) => {
  const language = getCurrentLanguage();
  const text = t[language];
  return (
    <View
      style={{
        backgroundColor: Colors.primaryGreenColor,
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <LogoHeader navigation={navigation} visible={false}></LogoHeader>
      </View>
      <ImageBackground
        style={{
          flex: 1,
          right: '5.2%',
        }}
        resizeMode="contain"
        source={require('../../assets/images/CongratulationsPage/manCard.png')}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <View style={{marginLeft: 50}}>
            <Text style={{color: '#F7F7F7', fontSize: 30, fontWeight: '700'}}>
              {text['congratulations-title']}
            </Text>
            <Text style={{color: '#F7F7F7', fontSize: 16, fontWeight: '400'}}>
              {text['congratulations-subtitle']}
            </Text>
          </View>
        </View>
        {
          <View
            style={{
              flex: 1,
              margin: 25,
              left: '5.2%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <PrimaryButton
              backgroundColor="white"
              title={text['congratulations-button']}
              textColor="#007236"
              callBackFunction={() =>
                navigation.navigate('LoginPage')
              }></PrimaryButton>
          </View>
        }
      </ImageBackground>
    </View>
  );
};
export default CongratulationPage;
const styles = StyleSheet.create({});
