import React from 'react';
import EquipmentPicker from './EquipmentPicker.jsx';

class CharacterManager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="character-manager">
        <p>Character Manager here </p> 
        <EquipmentPicker />
      </div>
    );
  }
}

export default CharacterManager;
