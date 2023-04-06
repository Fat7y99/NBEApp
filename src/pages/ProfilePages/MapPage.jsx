import MapView from 'react-native-maps';
import {View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapPage = () => (
  <View style={StyleSheet.absoluteFillObject}>
    <MapView
      style={{flex: 1}}
      region={{
        latitude: 37.421998333333335,
        longitude: -122.08400000000002,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
      showsCompass={true}
      zoomControlEnabled={true}
      showsTraffic={true}
    />
  </View>
);
