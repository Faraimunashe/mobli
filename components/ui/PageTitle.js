import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PageTitle = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default PageTitle;
