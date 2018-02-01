import React, {Component} from 'react';
import Axios from 'axios';
import API_KEY from '../App'

const GEOLOCATE_URL = 'api.graphloc.com/graphql?query={getLocation(ip: "NEED IP HERE"){location{latitudelongitude}}}'

//const GOOGLE_MAPS_URL

export default class inputBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''}

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  queryForAddress(){
    const query = `api.graphloc.com/graphql?query={getLocation(ip:"${this.state.term}"){location{latitude longitude}}}`;
    Axios.get(query).then(response => console.log(response));
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
        Axios.get
      );
    }
    else if (this.props.type === "destination"){
      const result = this.queryForAddress(this.state.term);
      console.log(result);
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
