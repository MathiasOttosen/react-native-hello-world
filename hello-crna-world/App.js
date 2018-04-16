import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, Button, Alert, StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Blink extends Component {

  constructor(props){
    super(props);
    this.state = {isShowingText: true};
  }


  // setInterval(() => {
  //   this.setState(previousState => {
  //     return { isShowingText: !previousState.isShowingText };
  //   });
  // }, 1000);
  _onButtonPressed() {
    // this.setState(previousState => {
    //   return { isShowingText: !previousState.isShowingText };
    // });
  }

  render(){
    let display = this.state.isShowingText ? this.props.name : ' ';
    return (
      <View style= {{alignItems: 'center'}}>
        <Button
        title = 'Press me ' 
        onPress={() => {
          this.props.navigation.navigate('Details');
          this._onButtonPressed();
        }}
        />
        <Text>I was here</Text>
      </View>
    )
  }
}

class Greetings extends Component {
  render() {
    return (
      <Text style = {styles.bigblue}>Hello {this.props.name}</Text>
    )
  }
}

class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {
      height: 1,
      backgroundColor: '#000000',

    }
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{
        flex: 1,
        justifyContent: 'space-between'
      }}>
        <Image source={pic} style={{width: 193, height: 110}}/>
          <View style={{alignItems: 'center', height: 110, backgroundColor: 'powderblue'}}>
            <Greetings name='Rexxar' />
          </View>

          <View style={{alignItems: 'center', height: 110, backgroundColor: 'skyblue'}}>
          <Button
          title = 'Press me'
          onPress={() => {
            this.props.navigation.navigate('Details');

            //Alert.alert("AARRRGGGHHH");
            //this._onButtonPressed();
          }}
          />
          </View>

          <View style={{alignItems: 'center', height: 110, backgroundColor: 'steelblue'}}>
            <Greetings  name='Dave' />
          </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#000000',

    }
  }
  render() {
    return (
      <View style= {{borderColor: '#000000', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000'}}>
        <Image source={require('./assets/smile.jpg')}/>

      </View>
    );
  }
}

const RootStack = StackNavigator({
  Home:  {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
},
{
  initialRouteName: 'Home',
},
{
  headerMode: 'screen'
}
);
export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}



const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
