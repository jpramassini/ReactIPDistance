import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputBar from './components/InputBar';
import Axios from 'axios';


export const API_KEY = 'AIzaSyDNE83Q7uTVKjb7TjRELdbhLqbOfnJwG5k';
const GOOGLE_MAPS_URL =
`https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.origin}&destination=${this.state.destination}&key=${API_KEY}`
let distanceString = '';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      origin: '',
      destination:'',
      screen: 1
    }

    this.setOrigin = this.setOrigin.bind(this);
    this.setDest = this.setDest.bind(this);
    this.setScreen = this.setScreen.bind(this);
  }

  setOrigin(newOrigin){
    this.setState({
      origin: newOrigin
    });
  }

  setDest(newDest) {
    this.setState({
      destination:newDest
    });
  }

  setScreen(newScreen){
    this.setState({
      screen: newScreen
    });
  }

  render(){
    if (this.state.screen === 1){
      return(
        //TODO Put first screen objects here.
        <div>
          <h2>Test Bar</h2>
          <InputBar type="destination"/>
        </div>
      );
    } else if (this.state.screen === 2){
      return(
        //TODO Put second screen objects here.
        <h1>Oops</h1>
      )
    } else {
      return(
        <h1>Oops, something must have gone wrong.</h1>
      )
    }
  }
}

export default App;
