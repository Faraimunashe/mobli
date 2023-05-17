import { Alert, Button, Image, View, Text, StyleSheet } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/styles";
import * as FileSystem from 'expo-file-system';
import axios from 'axios';
//import RNFetchBlob from 'rn-fetch-blob';

function ImagePicker(){
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
    const [pickedImage, setPickedImage] = useState();
    const [responsa, setResponsa] = useState();

    async function verifyPermission(){
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (cameraPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert('Insufficient Permissions', 'You need to grant camera permissions to take tobacco images.');
            return false;
        }

        return true;
    }

    async function takeImageHandler()
    {
        const hasPermission = await verifyPermission();
        if(!hasPermission){
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });

        console.log(image.uri);
        console.log(image);

        setPickedImage(image.assets[0].uri);
        setResponsa(image)

        
    }

    const uploadImage = () => {
        //console.log(pickedImage);
        const data = new FormData();
        data.append('image', {
            uri: responsa.uri,
            type: responsa.type,
            name: responsa.fileName,
        });
        data.append('title', 'My file upload');

        axios.post('http://192.168.0.101:8000/api/upload', data,{
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }


    let ImagePreview = <Text>No image taken yet.</Text>;
    let ImageButton = <Button title="Take Image" onPress={takeImageHandler}/>

    if(pickedImage){
        ImagePreview = <Image style={styles.image} source={{uri: pickedImage}} />;
        ImageButton = <Button title="Grade Leaf" onPress={uploadImage}/>
    }

    return <View>
        <View style={styles.imagePreview}>
            {ImagePreview}
        </View>
        {ImageButton}
    </View>
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    image: {
        width: '100%',
        height: '100%'
    }
});