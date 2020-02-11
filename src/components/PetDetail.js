import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


const PetDetail = (props) => {
    const [treatCount, setTreatCount] = useState(0);
    return (
        <View>
          <Image source={props.imageSrc} style={styles.image} />
          <Text style={styles.text}>{props.name}</Text>
          <Text>Treat Count: {treatCount}</Text>
          <Button
            title="Give Treats"
            onPress={() => {
              setTreatCount(treatCount + 1)
            }}
            />
        </View>
     );
  }
  
  const styles = StyleSheet.create({
    image: {
      width: 300,
      height: 200
    },
    text: {
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 20
    }
  });
export default PetDetail;