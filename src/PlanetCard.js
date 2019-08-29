import React from 'react';

const PlanetCard = (props) => (
<>
    <div className='PlanetCard' onClick={props.handleClick}>
        <h3>{props.planet.name}</h3>
        <p>Terrain: {props.planet.terrain}</p>
    </div>
</>
);

export default PlanetCard