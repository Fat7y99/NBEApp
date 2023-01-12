import {Pressable, View, Text, StyleSheet} from 'react-native';

const PrimaryButton = props => {
  const styles = StyleSheet.create({
    primaryContainer: {
      backgroundColor: props.backgroundColor,
      borderRadius: 12.5,
      height: props.height ?? 50,
      width: props.width ?? 345,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 2,
    },
    primaryText: {
      //'white'
      color: props.textColor,
      fontSize: 16,
      fontWeight: '700',
      textAlign: 'center',
    },
    pressed: {
      opacity: 0.75,
    },
  });

  return (
    <Pressable
      onPress={props.callBackFunction}
      style={pressData =>
        pressData.pressed
          ? [styles.primaryContainer, styles.pressed]
          : styles.primaryContainer
      }>
      <View>
        <Text style={styles.primaryText}>{props.title}</Text>
      </View>
    </Pressable>
  );
};
//'#007236'
export default PrimaryButton;
