import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './components/carItem';
import CarsList from './components/carsList';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarsList />
      {/* <CarItem 
        name="Model S"
        tagline2="Starting at $69,420"
        tagline="Order Online For"
        taglineCTA="Touchless Delivery"
        image={require('./assets/images/ModelX.jpeg')}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
