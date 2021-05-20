import React from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'

const DetailsReview = ( { navigation } ) => {
 
  let pressHandler = () => {
    navigation.goBack()
  }

  return (
    <View style={ globalStyles.container }>
      <Text>DetailsReview</Text>
      <Button title='Go Backs' onPress={ pressHandler } />
    </View>
  );
}
 
export default DetailsReview;
