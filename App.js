import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Signin } from './Signin/Signin';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Signin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
