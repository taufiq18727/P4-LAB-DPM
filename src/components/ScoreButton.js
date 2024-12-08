import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ScoreButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200EE', // Warna ungu
    padding: 10,
    margin: 5,
    borderRadius: 20,
    elevation: 3,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ScoreButton;
