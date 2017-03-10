import React, {Component} from 'react';

class Search extends Component{
	constructor(props){
		super(props);

		this.state = {
			term:''
		}
	}
	search(searchTerm){
		this.setState({term: searchTerm});
		this.props.changeSearchTerm(searchTerm);
	}
	render(){
		return (
			<div className="col-md-12" >
				<input type="text" value={this.state.term}  onChange={(event)=> this.search(event.target.value)} />
			</div>
			);
	}

}

export default Search;