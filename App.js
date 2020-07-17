import axios from 'axios';
import Constants from 'expo-constants';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import Recipes from './components/Recipes';
const image = { uri: require('./recipe.jpg') };

class App extends Component {

  state = {
    recipes: [],
    isPressed: false
  }

  recipesArray = []

  componentDidMount() {
    axios.get('https://jsonblob.com/api/jsonBlob/ecfad985-bc66-11ea-8cae-99a0660a95d6')
      .then(resolve => {
        this.recipesArray = resolve.data
      })
      .catch(_reject => console.log('Error Occured Fetching Recipes!'))
  }

  handlePress = () => {
    this.setState({
      recipes: this.recipesArray,
      isPressed: true
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content style={styles.bar} title="Recipe Searching App" />
        </Appbar.Header>
        <Text style={styles.text}>Welcome to Our Recipe MENU</Text>
        <Button title="Get Recipes" style={{ width: '20' }} onPress={this.handlePress} />
        <Recipes recipes={this.state.recipes} />
      </View>

    );
  }

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  Purple: {
    color: '#9C27B0',

  },
  Red: {
    color: '#F44336'

  },
  Orange: {
    color: '#FF9800'

  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 38,
    color: 'blue',
    margin: 50
  },
  recipeText: {
    fontSize: 20,
    color: 'green',
    margin: 10
  },
  text: {
    marginTop: '6%',
    marginLeft: '11%',
    fontSize: 20,
    fontWeight: 'bold',

  },
  bar: {
    alignItems: 'center',
    marginTop: '0.1%'
  }


});

/*  //<ImageBackground source={image} style={styles.image}> //</ImageBackground>
 alignItems: 'center',
    justifyContent: 'center',
*/

