import React, {Component} from 'react';
import Axios from 'axios';
import API_KEY from '../App'

const GEOLOCATE_URL = 'api.graphloc.com/graphql?query={getLocation(ip: "129.21.140.244"){location{latitude longitude}}}'
let lat = null;
let lon = null;

//const GOOGLE_MAPS_URL

export default class inputBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''}

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  queryForAddress(){
    const query = `https://api.graphloc.com/graphql?query={getLocation(ip: \"${this.state.term}\"){location{latitude longitude}}}`;
    Axios.get(query).then(response =>{
      console.log(response);
      lat = response.data.data.getLocation.location.latitude;
      lon = response.data.data.getLocation.location.longitude;
    });
    }

  onInputChange(event){
    this.setState({ term: event.target.value });
  }

  onSubmit(event){
    event.preventDefault();

    if(this.props.type === "origin"){
      this.queryForAddress(this.state.term);

      //TODO Add google response here
      this.props.setOrigin(
        //Axios.get
      );
    }
    else if (this.props.type === "destination"){
      this.queryForAddress();
      console.log("Queried for address successfully.")
      //this.props.setDest(this.state.term);
    }
    //this.props.setScreen;
    this.setState({term: event.target.value })
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onInputChange} />
        <button type="submit">TestButton</button>
      </form>
    )
  }
}
