import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PageTitle from '../components/ui/PageTitle';

function TransportScreen() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get('http://45.79.196.28/api/transport', {
                headers: {
                Authorization: `Bearer 12|dM1pruexpssK7AnlK29rtr7WWFQUTOlSCbgeTK2T`,
                },
            });
            setData(response.data.transports);
            console.log(response.data.transports);
            } catch (error) {
            console.error(error);
            }
        };
    fetchData();
    }, []);


    const Item = ({data}) => (
            <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <Image
                        source={{
                            uri:'https://interafrica.co.zw/images/g4.jpg',
                        }}
                        style={{ width: 140, height: 120, borderRadius:5 }}
                    />
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.title}>{data.service}</Text>
                    <View style={styles.cardDetails}>
                        <Text style={styles.tt}>Route:</Text> 
                        <Text style={styles.tts}>{data.from} - {data.to}</Text>
                    </View>
                    <View style={styles.cardDetails}>
                        <Text style={styles.tt}>Departure:</Text> 
                        <Text style={styles.tts}>{data.departure} - {data.arrival}</Text>
                    </View>
                    <View style={styles.cardDetails}>
                        <Text style={styles.tt}>Capacity:</Text> 
                        <Text style={styles.tts}>{data.capacity} seater</Text>
                    </View>
                    <View style={styles.cardDetails}>
                        <Text style={styles.tt}>Driver:</Text> 
                        <Text style={styles.tts}>{data.phone}</Text>
                    </View>
                </View>
            </View>
    );
  
    return (
        <View style={styles.rootContainer}>
          <PageTitle title="Public Transport" />
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <FlatList
                        data={data}
                        renderItem={({item}) => <Item data={item} />}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default TransportScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex:1,
    backgroundColor: 'white'
  },
  cardContainer: {
    flexDirection: "row",
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#c9c9c9',
    borderColor: '#9e9d9d',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  cardBody: {
    flex: 2,
    flexDirection: "column",
    marginHorizontal: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
  },
  cardDetails: {
    flexDirection: "row"
  },
  tt: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  tts: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginLeft: 10
  },
});
