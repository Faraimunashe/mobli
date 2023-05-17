import { StyleSheet, Text, View } from 'react-native';
import LocationPicker from '../components/Accessory/LocationPicker';
import PageTitle from '../components/ui/PageTitle';

function FindPlacesScreen() {
  
    return (
        <View style={styles.rootContainer}>
            <PageTitle title="Live Location" />
            <LocationPicker />
        </View>
    );
}

export default FindPlacesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
