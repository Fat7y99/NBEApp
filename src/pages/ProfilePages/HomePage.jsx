import {View, FlatList, Text, Image, ImageBackground} from 'react-native';
import {Colors} from '../../constants/Colors';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {SheetManager} from 'react-native-actions-sheet';
import SectionHeader from '../../components/HomeComponents/SectionHeader';

function HomePage({navigation}) {
  const [isBalanceVisible, SetBalanceVisibility] = useState(false);
  const showBalanceHandler = () => {
    SetBalanceVisibility(prevState => !prevState);
  };
  const Categories = [
    {
      name: 'Accounts',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts.png'),
      backgroundColor: 'rgba(0, 201, 116, 0.15)',
    },
    {
      name: 'Cards',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/Cards.png'),
      backgroundColor: 'rgba(0, 173, 248, 0.15)',
    },
    {
      name: 'Utilities',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/Utilities.png'),
      backgroundColor: 'rgba(246, 167, 33, 0.15)',
    },
    {
      name: 'History',
      icon: require('../../../assets/images/ProfilePage/HomePageImages/History.png'),
      backgroundColor: 'rgba(255, 0, 46, 0.15)',
    },
  ];

  const HistoryData = useSelector(state => state.user.history);
  const Accounts = useSelector(state => state.user.accounts);
  // console.log(HistoryData);
  return (
    <FlatList
      ListHeaderComponent={() => (
        <View
          style={{flex: 1, backgroundColor: '#F0F2FA'}}
          keyboardShouldPersistTaps="always">
          <View
            style={{
              alignSelf: 'center',
              height: 132,
              width: 347,
              backgroundColor: '#003D1D',
              borderRadius: 22,
              overflow: 'hidden',
            }}>
            <ImageBackground
              style={{flex: 1}}
              source={require('../../../assets/images/ProfilePage/balanceContainer.png')}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 19,
                  marginTop: 11,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color: '#F7F7F7',
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  Balance
                </Text>
                <Pressable
                  onPress={() => {
                    SheetManager.show('fingerPrint-sheet');
                  }}>
                  <Image
                    style={{height: 27, width: 27}}
                    source={require('../../../assets/images/LoginImages/fingerPrintIcon.png')}></Image>
                </Pressable>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Pressable onPress={showBalanceHandler}>
                  <Text
                    style={{
                      color: '#F7F7F7',
                      fontSize: isBalanceVisible ? 25 : 22,
                      fontWeight: '700',
                    }}>
                    {isBalanceVisible
                      ? '$2,374,654.25'
                      : 'Press here to show balance'}{' '}
                  </Text>
                </Pressable>
              </View>
            </ImageBackground>
          </View>
          <View style={{flexDirection: 'row'}}>
            <FlatList
              horizontal={true}
              data={Categories}
              style={{
                flex: 1,
                // backgroundColor: 'red',
              }}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                marginVertical: 30,
              }}
              renderItem={item => (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor: item.item.backgroundColor,
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 59,

                      width: '100%',
                      borderRadius: 13,
                      marginHorizontal: 18,
                    }}>
                    <Image source={item.item.icon}></Image>
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: Colors.darkBlueColor,
                    }}>
                    {item.item.name}
                  </Text>
                </View>
              )}></FlatList>
          </View>
          <SectionHeader
            title="Send money"
            onPressHandler={() =>
              navigation.navigate('Beneficiaries')
            }></SectionHeader>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={Accounts}
              style={{marginLeft: 15, marginBottom: 20}}
              keyExtractor={item => item.name + Math.random().toString()}
              renderItem={item => (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 86,
                    marginTop: 10,
                    width: 77,
                    borderRadius: 18,
                    backgroundColor: 'white',
                    marginHorizontal: 6,
                  }}>
                  <Image
                    style={{
                      height: item.item.imageUrl ? 25 : 33.5,
                      width: item.item.imageUrl ? 50 : 110,
                    }}
                    source={{
                      uri: item.item.icon ?? item.item.imageUrl,
                    }}></Image>
                  <Text>{item.item.name ?? item.item.firstName}</Text>
                </View>
              )}></FlatList>
          </View>
          <SectionHeader title="History"></SectionHeader>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      data={HistoryData}
      // style={{marginHorizontal: 25}}
      keyExtractor={item => item.name + Math.random()}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 1,
            alignSelf: 'center',
            width: '88%',
            backgroundColor: Colors.greyColor,
          }}
        />
      )}
      renderItem={item => {
        // console.log(item);
        return (
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 25,
              marginVertical: 10,
            }}>
            <Image
              source={{uri: item.item.icon}}
              style={{height: 50, width: 50}}></Image>
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontWeight: '400',
                  color: Colors.darkBlueColor,
                  fontSize: 18,
                }}>
                {item.item.name}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  marginVertical: 8,
                  color: Colors.greyColor,
                }}>
                {item.item.date}
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  color: Colors.darkBlueColor,
                }}>
                ${item.item.amount}
              </Text>
            </View>
          </View>
        );
      }}></FlatList>
  );
}

export default HomePage;
