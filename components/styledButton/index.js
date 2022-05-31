import react from 'react';
import {Text, View, Pressable } from 'react-native';
import styles from './styles';

const styledButton = (props) =>  {

    const {type, content, onPress} = props;

    const backGroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

  return (
    <View style={styles.container}>
        <Pressable 
            onPress={() => onPress()}
            style={[styles.button, {backgroundColor: backGroundColor}]}>
            
                <Text style={[styles.text, {color:textColor}]}>{content}</Text>
        </Pressable>
  </View>
  );
}

export default styledButton;
