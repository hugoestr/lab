import React from 'react';
import Attributes from './Attributes.jsx';
import CharacterCreator from './CharacterCreator.jsx';
import CharacterManager from './CharacterManager.jsx';

import Character from '../models/Character.js';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {character: this.retrieveCharacter() }

    this.handleCharacterUpdate = this.handleCharacterUpdate.bind(this);
  }

  retrieveCharacter() {
    this.hasCharacter = false;
    return new Character();
  }

  handleCharacterUpdate(data) {
    this.setState({character: data}); 
  }

  render() {
    const hasCharacter = this.state.hasCharacter;

    return(
      <div id='name'>
        <Attributes character={this.state.character} />

        { hasCharacter ? (
          <CharacterManager 
            character={this.state.character}
            onCharacterUpdate={this.handleCharacterUpdate} />
        ) : (
          <CharacterCreator character={this.state.character} 
            onCharacterUpdate={this.handleCharacterUpdate} />
        )}
      </div>
    );
  }
}

export default Main;
