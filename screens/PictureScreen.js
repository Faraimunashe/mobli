import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/auth-context';
import ImagePicker from '../components/Accessory/ImagePicker';

function PictureScreen() {
  
  return (
    <View style={styles.rootContainer}>
      <ImagePicker/>
    </View>
  );
}

export default PictureScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
