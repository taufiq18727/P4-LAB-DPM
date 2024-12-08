import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WinnerMessage = ({ winner }) => (
  <View style={styles.container}>
    <Text style={styles.text}>🎉 Tim {winner} menang! 🎉</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 15,
    backgroundColor: '#FFD700', // Warna emas untuk kemenangan
    borderRadius: 10,
    elevation: 5, // Shadow untuk tampilan 3D
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4F4F4F', // Warna abu gelap
    textAlign: 'center',
  },
});

export default WinnerMessage;
