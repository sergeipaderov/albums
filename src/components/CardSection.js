import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={ styles.containerStyle }>
      { props.children }
    </View>
  )
}

const styles = {
  containerStyle: {
    borderBottom: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    posiion: 'relative'
  }
}

export default CardSection;