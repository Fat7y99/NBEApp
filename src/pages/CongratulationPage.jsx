import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import LogoHeader from '../components/CommonComponents/LogoHeader';
import PrimaryButton from '../components/CommonComponents/PrimaryButton';
const CongratulationPage = () => {
  return (
    <View
      style={{
        backgroundColor: '#007236',
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <LogoHeader visible={false}></LogoHeader>
      </View>
      <ImageBackground
        style={{
          flex: 1,
          right: '5.2%',
          // marginTop: '10%',
        }}
        // style={{sc: 0.5}}
        resizeMode="contain"
        source={require('../../assets/images/CongratulationsPage/manCard.png')}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <View style={{marginLeft: 50}}>
            <Text style={{color: '#F7F7F7', fontSize: 30, fontWeight: '700'}}>
              Congratulations
            </Text>
            <Text style={{color: '#F7F7F7', fontSize: 16, fontWeight: '400'}}>
              You have successfully registered in NBE online banking service
            </Text>
          </View>
        </View>
        {
          <View
            style={{
              flex: 1,
              // backgroundColor: 'red',
              margin: 25,
              left: '5.2%',

              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <PrimaryButton
              backgroundColor="white"
              title="Finish"
              textColor="#007236"></PrimaryButton>
          </View>
        }
        {/* <Text style={{flex: 1}}>saassf</Text> */}
      </ImageBackground>
    </View>
  );
};
export default CongratulationPage;
const styles = StyleSheet.create({});
