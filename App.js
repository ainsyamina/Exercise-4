import React, {Component} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      input: '',
      consonant: 0,
      vowel: 0,
      character: 0
    }
  }
WordAnalyzer = () => {
    let input = this.state.input;
    let consonant =0;
    let vowel=0;
    let character=0;

    character=input.length;

    for (let i=0;i<=input.length;i++){
      if((input.charAt(i).match(/[aeiouAEIOU]/))){
          vowel++;
      }
      else if((input.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))){
          consonant++;
      }
      this.setState({character:character,vowel:vowel,consonant:consonant});

    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.headline}>A Word Analyzer</Text>
       
        <TextInput onChangeText={(input) => this.setState({input})} style={Styles.instructions} placeholder='Input text'/>
        <Text></Text> 
        <Button color="#C8A2C8" onPress={this.WordAnalyzer} title='Analyze' size="50"/>
        <br></br>
        <Text style={Styles.instructions}>Word                               : {this.state.input}</Text>
        <Text style={Styles.instructions}>Number of Consonant  : {this.state.consonant}</Text>
        <Text style={Styles.instructions}>Number of Vowel          : {this.state.vowel}</Text>
        <Text style={Styles.instructions}>Number of Character    : {this.state.character}</Text>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a0d404',
    textAlign:40,
  },

onChangeText:{
  paddingRight: 20,
},

  headline: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom:10,
    marginLeft:10,
  },
});



