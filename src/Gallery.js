import React, {Component} from 'react';

class Gallery extends Component{


	constructor(props){
		super(props);
		this.state={
			photos: [this.props.colors.length],
			colors: this.props.colors,
			searchTerm: this.props.searchTerm
		}
		console.log(this.props.searchTerm, 'search term gallery');

	}
	componentDidMount(){
		this.props.getPhotos();
		console.log('getphotos gallery')
	}
	render(){
		return (
			<div>
				Gallery

			</div>
			);
	}

}

export default Gallery;