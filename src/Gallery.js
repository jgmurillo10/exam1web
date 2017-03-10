import React, { Component } from 'react';
import PhotoColumn from './PhotoColumn';

class Gallery extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
        <div className="row">
          <div className="col-md-12 padding-0">
            <PhotoColumn color={this.props.array.yellow}/>
            <PhotoColumn color={this.props.array.green}/>
            <PhotoColumn color={this.props.array.blue}/>
            <PhotoColumn color={this.props.array.cyan}/>
            <PhotoColumn color={this.props.array.purple}/>
            <PhotoColumn color={this.props.array.black}/>
        </div>
      </div>
      );
    }

  }


export default Gallery;