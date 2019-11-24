import React from 'react';
import Attributes from './Attributes.jsx';
import EquipmentPicker from './EquipmentPicker.jsx';

import Character from '../models/Character.js';

//import Button from '@material-ui/core/Button';

class CharacterCreator extends React.Component{

  constructor(props) {
    super(props);

    this.state = {character: new Character()}

    this.handleCreateCharacter = this.handleCreateCharacter.bind(this);
  }

  handleCreateCharacter(e)  {
    e.preventDefault();

    var character = this.state.character;

    character.createRoll();

    this.setState({character: character});
    console.log("Clicky") 
  }

  render() {
    return(
      <div className="character-creator">
        <h1>Character Creator</h1> 
        <div className= "form" >
          <input type="text" name="name" ></input>
          <button onClick={this.handleCreateCharacter} >Create Character</button>

        </div>
        <Attributes character={this.state.character}  />
        <div className="class-picker">
          <p>Class radio button</p>
        </div>
        <div className="race-picker">
          <p>race radio button</p>
        </div>
        <EquipmentPicker />
      </div>
    ); 
  }
}

export default CharacterCreator;
