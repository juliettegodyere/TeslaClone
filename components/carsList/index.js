import react from 'react';
import {Text, View, FlatList,Dimensions } from 'react-native';
import styles from './styles';
import CarItem from '../carItem/index';

import cars from './cars';

const CarsList = (props) =>  {
console.log(cars);
  return (
    <View style={styles.container}>
       <FlatList 
        data={cars}
         //renderItem={({item}) => <CarItem {...item} />}
         renderItem={({item}) => <CarItem car={item} />}
         showsVerticalScrollIndicator={false}
         snapToAlignment="start"
         decelerationRate={'fast'}
         snapToInterval={Dimensions.get('window').height}
       />
  </View>
  );
}

export default CarsList;
