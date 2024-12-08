import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MatchScreen from './src/screens/MatchScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* StatusBar bawaan dari Expo */}
      <StatusBar style="auto" />
      
      {/* Layar utama aplikasi */}
      <MatchScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
