import React, { Component } from 'react';


class ImageContainer extends Component {
  
  render() {
    return (
      <div className='ImageContainer'>
          <h1>{this.props.selectedPlanet.name}</h1>
          <h3>Population: {this.props.selectedPlanet.population}</h3>
          <h3>Climate: {this.props.selectedPlanet.climate}</h3><br></br>
          <img alt={""} src={this.props.selectedPlanet.image}></img>
     </div>
    );
  }
}

export default ImageContainer;