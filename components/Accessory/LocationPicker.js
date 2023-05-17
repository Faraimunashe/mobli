import { View, StyleSheet } from "react-native-web";
import Button from "../ui/Button";
import { Colors } from "../../constants/styles";
import { getCurrentPositionAsync } from "expo-location";

function LocationPicker()
{
    async function getLocationHandler()
    {
        const location = await getCurrentPositionAsync();
        console.log(location);
    }

    function pickOnMapHandler()
    {

    }


    return <View>
        <View style={styles.mapPreview}></View>
        <View style={styles.actions}>
            <Button onPress={getLocationHandler}>Locate User</Button>
            <Button onPress={pickOnMapHandler}>Pick on Map</Button>
        </View>
    </View>
}

export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
});