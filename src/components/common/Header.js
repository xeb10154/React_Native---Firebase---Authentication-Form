// Import libraries for making a registerComponent
import React from 'react';
import { Text, View } from 'react-native';


// Make a component
const Header = (props) => {
  // destructuring styles, keeping rest of the code cleaner
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elavation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//Make the component available to others parts of the app
export { Header };
