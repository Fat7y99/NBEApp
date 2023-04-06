import {View, Text, Pressable, FlatList, StyleSheet} from 'react-native';
import t from '../../../assets/Translations.json';
const Footer = ({language}) => {
  const text = t[language];
  const footerData = [
    {key: text['contact-us']},
    {key: text['FAQs']},
    {key: text['help']},
  ];

  return (
    <View style={styles.footerStyle}>
      <FlatList
        horizontal
        contentContainerStyle={styles.flatListStyle}
        data={footerData.reverse()}
        renderItem={({item}) => (
          <Pressable>
            <Text style={styles.linkStyle}>{item.key}</Text>
          </Pressable>
        )}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={() => (
          <Text style={styles.sepratorStyle}>-</Text>
        )}
      />

      <Text style={styles.creditsStyle}>{text['copyright']} </Text>
    </View>
  );
};
export default Footer;
const styles = StyleSheet.create({
  footerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListStyle: {
    flexGrow: 1,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkStyle: {
    color: '#F6A721',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  sepratorStyle: {
    color: 'white',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  creditsStyle: {color: 'white', fontSize: 10},
});
