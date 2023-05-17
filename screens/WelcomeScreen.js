import { Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/auth-context';
import { useNavigation } from '@react-navigation/native';
import TileButton from '../components/ui/TileButton';
import PageTitle from '../components/ui/PageTitle';

function WelcomeScreen() {
  const [fetchedData, setFetchedData] = useState([]);
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const navigation = useNavigation();

  useEffect(() => {
    axios.get(
      'url'
    ).then((response) => {
      setFetchedData(response.data); 
    }).catch(error => console.log("network error"));
  }, [token]);

  function FindPlacesHandler(){
    navigation.navigate('FindPlaces');
  }

  function TransportServicesHandler(){
    navigation.navigate('TransportServices');
  }

  function EmergencyServicesHandler(){
    navigation.navigate('EmergencyServices');
  }

  function ShareHandler(){
    navigation.navigate('SharePlaces');
  }

  return (
    <View style={styles.rootContainer}>
      <PageTitle title="Main Menu" />
      <TileButton title="Discover Places" iconName="ios-location" onPress={FindPlacesHandler} />
      <TileButton title="Check Transport" iconName="ios-bus" onPress={TransportServicesHandler} />
      <TileButton title="Emergency Services" iconName="ios-speedometer" onPress={EmergencyServicesHandler} />
      <TileButton title="Share Places" iconName="share-social" onPress={ShareHandler} />
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 30,
  }
});
