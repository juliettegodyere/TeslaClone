import react from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StyledButton from '../styledButton/index';
import styles from './styles';

const CarItem = (props) =>  {
  const {name, tagline, image, taglineCTA} = props.car;

  return (
    <View style={styles.carContainer}>
    <ImageBackground source={image} style={styles.image}/>
    <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline} {''}
        <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
    </View>
    <View style={styles.buttonsContainer}>
      <StyledButton 
        content="Custom order" 
        type="primary"
        onPress={() => console.log('custom order was Pressed')}
        />
        <StyledButton 
        content="Take Inventory" 
        type="secondary"
        onPress={() => console.log('Take inventory was Pressed')}
        />
    </View>
  </View>
  );
}

export default CarItem;
