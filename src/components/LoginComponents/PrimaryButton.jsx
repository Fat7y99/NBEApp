import {Pressable, View, Text, StyleSheet} from 'react-native';

const PrimaryButton = () => {
  const onPressHandler = () => {
    console.log('presseddddd!');
  };

  return (
    <Pressable
      onPress={onPressHandler}
      style={pressData =>
        pressData.pressed
          ? [styles.primaryContainer, styles.pressed]
          : styles.primaryContainer
      }>
      <View>
        <Text style={styles.primaryText}>Log In</Text>
      </View>
    </Pressable>
  );
};
export default PrimaryButton;
const styles = StyleSheet.create({
  primaryContainer: {
    flex: 6,
    backgroundColor: '#007236',
    borderRadius: 12.5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2,
  },
  primaryText: {
    color: 'white',
    paddingVertical: 15,
    fontSize: 16,
    fontWeight: '700',

    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
