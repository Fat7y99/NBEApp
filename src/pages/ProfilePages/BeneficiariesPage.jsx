import {View, Text, FlatList, Image} from 'react-native';
import ActionsButtonContainer from '../../components/HomeComponents/ActionsButtonContainer';
import {Colors} from '../../constants/Colors';
import {useSelector} from 'react-redux';
const BeneficiariesPage = () => {
  const BenfeiciariesData = useSelector(state => state.user.accounts);
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: Colors.darkBlueColor,
            fontSize: 20,
            fontWeight: '700',
          }}>
          Beneficiaries
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <ActionsButtonContainer>
            <Image
              source={require('../../../assets/images/ProfilePage/BeneficiariesImages/groups.png')}></Image>
            <Image
              source={require('../../../assets/images/ProfilePage/BeneficiariesImages/list.png')}></Image>
          </ActionsButtonContainer>
          <ActionsButtonContainer fillFirst={true}>
            <Image
              source={require('../../../assets/images/ProfilePage/BeneficiariesImages/addIconV2.png')}></Image>
            <Text style={{color: Colors.primaryGreenColor}}>Add</Text>
          </ActionsButtonContainer>
        </View>
      </View>
      {BenfeiciariesData.length ? (
        <FlatList
          numColumns={3}
          data={BenfeiciariesData}
          keyExtractor={item => item.name}
          renderItem={item => {
            console.log('object');
            console.log(item.item);
            return (
              <View
                style={{
                  flex: 1,
                  height: 76,
                  width: 90,
                  borderRadius: 18,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  elevation: 1,
                }}>
                <Image
                  style={{height: 50, width: 90}}
                  source={{uri: item.item.icon}}></Image>
                <Text>{item.item.name}</Text>
              </View>
            );
          }}></FlatList>
      ) : (
        <View
          style={{
            flex: 1,
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{marginBottom: 15}}
            source={require('../../../assets/images/ProfilePage/BeneficiariesImages/noBeneficiaries.png')}></Image>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginBottom: 5,
              color: '#34343F',
            }}>
            No Beneficiaries
          </Text>
          <Text
            style={{
              textAlign: 'center',
              width: 240,
              fontWeight: '400',
              marginBottom: 15,
              color: '#464665',
            }}>
            You don’t have beneficiaries, add some so you can send money
          </Text>
          <ActionsButtonContainer
            fillColor={Colors.primaryGreenColor}
            fillFirst={true}>
            <Image
              source={require('../../../assets/images/ProfilePage/BeneficiariesImages/addIcon.png')}></Image>
            <Text style={{color: Colors.primaryGreenColor, color: 'white'}}>
              Add
            </Text>
          </ActionsButtonContainer>
        </View>
      )}
    </View>
  );
};

export default BeneficiariesPage;
