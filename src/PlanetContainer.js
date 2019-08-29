import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import SearchBar from './SearchBar';

class PlanetContainer extends Component {
  
  render() {
    return (
      <div className='PlanetContainer'>
        <SearchBar handleSearch={this.props.handleSearch}/><br></br>
        {this.props.planets.map(planet => <PlanetCard planet={planet} handleClick={() => this.props.planetClick(planet)}/>)}
      </div>
    );
  }
}

export default PlanetContainer;