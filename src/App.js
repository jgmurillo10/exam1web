import React, { Component } from 'react';
import './App.css';
import Search from './Search' ;
import Gallery from './Gallery';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      searchTerm:'car',
      colors:['yellow', 'blue', 'red', 'black', 'grey', 'white'],
      yellowPhotos: [10],
      bluePhotos: [10],
      redPhotos:[10],
      blackPhotos:[10],
      greyPhotos:[10],
      whitePhotos:[10]
    }
  }

  changeSearchTerm(searchTerm){
    console.log(this.state)
    this.setState({searchTerm:searchTerm});
    this.getPhotos()
    console.log('entro al changeSearchTerm')
  }
  componentDidMount(){
    if(this.state.searchTerm!==''){
          var base_url= 'http://localhost:9000/flickr/'+ this.state.searchTerm;
          var url= base_url+' yellow';
          console.log(url, '::URL')
          axios.get(url).then(response=>{
            this.setState({yellowPhotos:response.photos.photo})
            console.log(response.photos.photo, 'photos YELLOW')
          })  

          var url2= base_url+' blue';
          console.log(url2, '::URL2 BLUE ')
          axios.get(url2).then(response=>{
            this.setState({bluePhotos:response.photos.photo})
            console.log(response.photos.photo, 'photos BLUE')
          })  


          var url3= base_url+' red';
          console.log(url3, '::URL RED')
          axios.get(url3).then(response=>{
            this.setState({redPhotos:response.photos.photo})
            console.log(response.photos.photo, 'photos')
          })  

          var url4= base_url+' black';
          console.log(url4, '::URL BLACK')
          axios.get(url4).then(response=>{
            this.setState({blackPhotos:response.photos.photo})
            console.log(response.photos.photo, 'photos')
          })  

          var url5= base_url+' grey';
          console.log(url5, '::URL GREY')
          axios.get(url5).then(response=>{
            this.setState({greyPhotos:response.photos.photo})
            console.log(response.photos.photo, 'photos')
          })  

          var url6= base_url+' white';
          console.log(url6, '::URL WHITE')
          axios.get(url6).then(response=>{
            this.setState({whitePhotos:response.photos.photo})
            console.log(response.photos.photo, 'photos')
          })  

    }
      
  }
  getPhotos(){
     var base_url= 'http://localhost:9000/flickr/'+ this.state.searchTerm;
          var url= base_url+' yellow';
          console.log(url, '::URL')
          axios.get(url).then(response=>{
            this.setState({yellowPhotos:response.photos.photo})
            console.log(response.photos.photo, 'photos YELLOW')
          })  

          var url2= base_url+' blue';
          console.log(url2, '::URL2 BLUE ')
          axios.get(url2).then(response=>{
            this.setState({bluePhotos:response.photos.photo})
            console.log(response.photos.photo, 'photos BLUE')
          })  


          var url3= base_url+' red';
          console.log(url3, '::URL RED')
          axios.get(url3).then(response=>{
            this.setState({redPhotos:response.photos.photo})
            console.log(response.photos.photo, 'photos')
          })  

          var url4= base_url+' black';
          console.log(url4, '::URL BLACK')
          axios.get(url4).then(response=>{
            this.setState({blackPhotos:response.photos.photo})
            console.log(response.photos.photo, 'photos')
          })  

          var url5= base_url+' grey';
          console.log(url5, '::URL GREY')
          axios.get(url5).then(response=>{
            this.setState({greyPhotos:response.photos.photo})
            console.log(response.photos.photo, 'photos')
          })  

          var url6= base_url+' white';
          console.log(url6, '::URL WHITE')
          axios.get(url6).then(response=>{
            this.setState({whitePhotos:response.photos.photo})
            console.log(response.photos.photo, 'photos')
          })  
  }

 render() {
    return (
      <div className="App jumbotron">
        <div className="">
          <h2>Welcome to React</h2>
        </div>
        <Search changeSearchTerm={this.changeSearchTerm.bind(this)}/>
        <Gallery getPhotos={this.getPhotos.bind(this)} searchTerm={this.state.searchTerm} colors={this.state.colors}/>
      </div>
    );
  }
}

export default App;