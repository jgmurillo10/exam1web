import React, {Component} from 'react';
import axios from 'axios';


const ROOT_URL = "/flickr";

class Search extends Component{
	constructor(props){
		super(props);

		this.state = {
			term:'',
			url:[]
		}
	}

	/*get images*/
	getPhotos(){
		axios.get(ROOT_URL+'/'+this.props.search.term).then(response=>{
			console.log(reponse);
			console.log('GET the photos');
		})
	}
	render(){
		return (




			);
	}

}

export default Search;