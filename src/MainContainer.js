import React, { Component } from 'react';
import PlanetContainer from './PlanetContainer';
import ImageContainer from './ImageContainer';

const fetchPlanets = () => {
    return fetch('http://localhost:3000/results')
    .then(resp => resp.json())
}

class MainContainer extends Component {

state = {
    planets: [],
    selectedPlanet: [],
    searchInput: ""
}

componentDidMount() {
    fetchPlanets()
    .then(planets => this.setState({ planets }))
}

planetClick = (planet) => {
 this.setState({ selectedPlanet: planet })
}

handleSearch = (event) => {
    this.setState({searchInput: event.target.value})
}

filterPlanets = () => {
    if (this.state.searchInput) {
        return this.state.planets.filter(planet => planet.name.toLowerCase().includes(this.state.searchInput.toLowerCase())) 
    }
    else {
        return this.state.planets
    }
}

  render() {
    return (
      <div className='rowA'>
        <PlanetContainer handleSearch={this.handleSearch} planets={this.filterPlanets()} planetClick={this.planetClick}/> 
        <ImageContainer selectedPlanet={this.state.selectedPlanet} />
      </div>
    );
  }
}

export default MainContainer;