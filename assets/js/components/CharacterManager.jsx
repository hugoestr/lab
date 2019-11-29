import React from 'react';
import EquipmentPicker from './EquipmentPicker.jsx';

class CharacterManager extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="character-manager">
        <button onClick={this.props.onCharacterDestroy} >Destroy character</button>
      </div>
    );
  }
}

export default CharacterManager;
