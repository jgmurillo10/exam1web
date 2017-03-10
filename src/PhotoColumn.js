import React, { Component } from 'react';

class PhotoColumn extends Component{

  constructor(props){
    super(props);
  }

  render(){
    if(this.props.color[0]){
      var url="https://farm"+this.props.color[0].farm+".staticflickr.com/"+this.props.color[0].server+"/"+this.props.color[0].id+"_"+this.props.color[0].secret+"_m.jpg";
      var url1="https://farm"+this.props.color[1].farm+".staticflickr.com/"+this.props.color[1].server+"/"+this.props.color[1].id+"_"+this.props.color[1].secret+"_m.jpg";
      var url2="https://farm"+this.props.color[2].farm+".staticflickr.com/"+this.props.color[2].server+"/"+this.props.color[2].id+"_"+this.props.color[2].secret+"_m.jpg";
      var url3="https://farm"+this.props.color[3].farm+".staticflickr.com/"+this.props.color[3].server+"/"+this.props.color[3].id+"_"+this.props.color[3].secret+"_m.jpg";
      var url4="https://farm"+this.props.color[4].farm+".staticflickr.com/"+this.props.color[4].server+"/"+this.props.color[4].id+"_"+this.props.color[4].secret+"_m.jpg";
      var url5="https://farm"+this.props.color[5].farm+".staticflickr.com/"+this.props.color[5].server+"/"+this.props.color[5].id+"_"+this.props.color[5].secret+"_m.jpg";
      var url6="https://farm"+this.props.color[6].farm+".staticflickr.com/"+this.props.color[6].server+"/"+this.props.color[6].id+"_"+this.props.color[6].secret+"_m.jpg";
      var url7="https://farm"+this.props.color[7].farm+".staticflickr.com/"+this.props.color[7].server+"/"+this.props.color[7].id+"_"+this.props.color[7].secret+"_m.jpg";
      var url8="https://farm"+this.props.color[8].farm+".staticflickr.com/"+this.props.color[8].server+"/"+this.props.color[8].id+"_"+this.props.color[8].secret+"_m.jpg";
      var url9="https://farm"+this.props.color[9].farm+".staticflickr.com/"+this.props.color[9].server+"/"+this.props.color[9].id+"_"+this.props.color[9].secret+"_m.jpg";
      

      return(
        <div className="col-md-2">
        <div className="row">
          <img className="image_collage"  src={url}/>
        </div>
        <div className="row">
          <img className="image_collage"  src={url1}/>
        </div>
        <div className="row">
          <img className="image_collage" src={url2}/>
        </div>
        <div className="row">
          <img className="image_collage" src={url3}/>
        </div>
        <div className="row">
          <img className="image_collage" src={url4}/>
        </div>
        <div className="row">
          <img className="image_collage" src={url5}/>
        </div>
        <div className="row">
          <img className="image_collage" src={url6}/>
        </div>
        <div className="row">
          <img className="image_collage" src={url7}/>
        </div>
        <div className="row">
          <img className="image_collage" src={url8}/>
        </div>
        <div className="row">
          <img className="image_collage" src={url9}/>
        </div>
      </div>


      );
    }
    else{
      return(
        <div classpath="row"></div>
      );
    }
  }

}

export default PhotoColumn;