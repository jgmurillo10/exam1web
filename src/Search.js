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


			<input type="text" placeholder="Search" className="form-control" value={this.state.term} onChange={(event) => {
                  this.setState({name: event.target.term})
              }} />
              <button className="btn btn-success" onClick={this.getPhotos.bind(this)}>
                    Save
                  </button>

			);
	}

}

export default Search;