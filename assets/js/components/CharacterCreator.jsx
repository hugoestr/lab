import React from 'react';
import Attributes from './Attributes.jsx';
import EquipmentPicker from './EquipmentPicker.jsx';

import Character from '../models/Character.js';

//import Button from '@material-ui/core/Button';

class CharacterCreator extends React.Component{

  constructor(props) {
    super(props);
    this.creationStates = {
      'roll' : 'alignment',
      'alignment' : 'money',
      'money' : 'race',
      'race' : 'name',
      'name' : 'done',
    };

    this.state = {character: new Character()
                  creationState: 'roll' }

    this.handleCreateCharacter = this.handleCreateCharacter.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
  }

  handleAccept(e) {
    e.preventDefault();

    const nextState = this.creationStates[this.state.creationState];

    this.enableStep(nextState);

    this.setState({creationState: character});
  }

  handleCreateCharacter(e)  {
    e.preventDefault();

    var character = this.state.character;
    character.createRoll();

    this.setState({character: character});
  }

  render() {
    return(
      <div className="character-creator">
        <Attributes character={this.state.character}  />

        <h1>Character Creator</h1> 
        <div className= "form" >
          <input type="text" name="name" ></input>
          <h2>1. Roll a character</h2>
          <button onClick={this.handleCreateCharacter} >Create Character</button>
          <button onClick={this.handleAccept} >Accept</button>

          <h2>2. Pick Alignment</h2>
          <h2>3. Roll for wealth</h2>
          <h2>4. Pick race</h2>
          <h2>5. Give them a name</h2>
          <h2>5. Save Character</h2>
        </div>
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
