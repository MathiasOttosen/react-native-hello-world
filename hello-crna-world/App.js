import React, { Component } from 'react';
import { AppRegistry, Platform, Image, Text, TextInput, View, Button, Alert, StyleSheet,
        TouchableOpacity, TouchableHighlight, TouchableNativeFeedback,
        TouchableWithoutFeedback, ScrollView, Dimensions, ActivityIndicator} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';

export default class App extends React.Component {

  render() {
    let boxSize = 100;

    return(

      <View style={styles.container}>
        <FetchExample></FetchExample>
        <FlatList
          data={[
            {key:'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        {/* <ScrollViewWithReactNative/> */}
        {/* <Touchables/> */}
        {/*<ButtonsBasics/>*/}
        {/*<TextInputToPizza/>*/}
        {/*<ColoredBoxes/>*/}
  	  </View>
    );
  }
}

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
        title = 'Press me'
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
          title = 'Press me!'
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

class TextInputToPizza extends React.Component{
  constructor(props) {
      super(props);
      this.state = {text: ''};
    }
    render(){
      return(
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
    }
}

class ColoredBoxes extends React.Component{
  render() {
    let boxSize = 100;
    return(
      <View>
        <View style={{width: boxSize, height: boxSize, backgroundColor: 'powderblue'}} />
        <View style={{width: boxSize, height: boxSize, backgroundColor: 'skyblue'}} />
        <View style={{width: boxSize, height: boxSize, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class ButtonsBasics extends Component {
  _onPressButton() {
      Alert.alert('You tapped the button!')
    }
    render(){
      return(
        <View>
          <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton}
                title="Press Me"
              />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Press Me"
              color="#841584"
            />
          </View>
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              onPress={this._onPressButton}
              title="This looks great!"
            />
            <Button
              onPress={this._onPressButton}
              title="OK!"
              color="#841584"
            />
          </View>
        </View>
      );
    }
}

class Touchables extends Component {
    _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }
  render(){
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

class ScrollViewWithReactNative extends Component {
  render() {
    return (
      <ScrollView>
          <Text style={styles.faviconText}>Scroll me plz</Text>
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Text style={styles.faviconText}>If you like</Text>
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Text style={styles.faviconText}>Scrolling down</Text>
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Text style={styles.faviconText}>Whats the best</Text>
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Text style={styles.faviconText}>Framework around?</Text>
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Image style={styles.faviconImage} source={require('./assets/favicon.png')} />
          <Text style={styles.faviconText}>React Native</Text>
        </ScrollView>
    );
  }
}

class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  

  async componentDidMount(){
    try {
      let response = await fetch(
        'https://facebook.github.io/react-native/movies.json'
      );
      let responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      }, function(){

      });   
      return responseJson.movies;
    } 
    catch (error) {
      console.error(error);
    }
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

async function getMoviesFromApi() {
  try {
    let response = await fetch(
      'https://facebook.github.io/react-native/movies.json'
    );
    let responseJson = await response.json();
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}

let ScreenHeight = Dimensions.get("window").height;

let ScreenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222'
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
  faviconImage: {
    width: ScreenWidth,
    height: ScreenWidth,
  },
  faviconText: {
    backgroundColor: '#222222',
    fontSize:96,
    color: '#FFFFFF'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

})

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
