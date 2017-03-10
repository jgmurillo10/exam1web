import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import axios from 'axios';

const ROOT_URL='/flickr/';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value: '',
      yellow:[],
      green:[],
      blue:[],
      cyan:[],
      purple:[],
      black:[]
    };

    this.changeImages=this.changeImages.bind(this);
  }


  changeImages(event){
      this.setState({value: event.target.value});

      if(this.state.value){

        axios.get(ROOT_URL+ this.state.value+' yellow').then(response=>{
          this.setState({yellow: response.data.photos.photo});
        })
        axios.get(ROOT_URL+ this.state.value+' green').then(response=>{
          this.setState({green: response.data.photos.photo});
        })
        axios.get(ROOT_URL+ this.state.value+' blue').then(response=>{
          this.setState({blue: response.data.photos.photo});
        })
        axios.get(ROOT_URL+ this.state.value+' cyan').then(response=>{
          this.setState({cyan: response.data.photos.photo});
        })
        axios.get(ROOT_URL+ this.state.value+' purple').then(response=>{
          this.setState({purple: response.data.photos.photo});
        })
        axios.get(ROOT_URL+ this.state.value+' black').then(response=>{
          this.setState({ black: response.data.photos.photo});
        })

     
    }
  }

  render() {
    return (
      <div className="App-content">
        <div className="row">
          <h1 className="title thin2">Flickr Rainbow</h1>
          <div className="row">
            <p className="col-md-8 light">Search for something on Flickr and we will get you a rainbow of it</p>
            <p className="col-md-4 light"><a target="_blank" href="https://github.com/jgmurillo10">By Juan G. Murillo</a></p>
          </div>
          
          <br />
          <form>
            <input className="col-md-7" placeholder="puppy" type="text" value={this.state.value} onChange={this.changeImages}/><br/>
          </form>
          <h2 className="thin2">Your rainbow</h2>
          <Gallery array={this.state}/>
        </div>
      </div>


    );
  }
}

export default App;