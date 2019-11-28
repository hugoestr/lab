import React from 'react';
import Attributes from './Attributes.jsx';
import CharacterCreator from './CharacterCreator.jsx';
import CharacterManager from './CharacterManager.jsx';

import Character from '../models/Character.js';

import CookieMonster  from "../utilities/cookieMonster.js";

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {character: new Character() }

    this.retrieveCharacter();

    this.handleCharacterUpdate = this.handleCharacterUpdate.bind(this);
    this.handleCharacterSave = this.handleCharacterSave.bind(this);
  }

  retrieveCharacter() {
    var result = new Character();

    this.hasCharacter = false;

    const monster = new CookieMonster();
    const serialized  = monster.meGetCookie("dnd-character");

    if (serialized != undefined) {
      var result =  result.loadFromString(serialized); 
      this.hasCharacter = true;
    }

    this.setState({character: result});
  }

  handleCharacterUpdate(data) {
    this.setState({character: data}); 
  }

  handleCharacterSave() {
    const monster = new CookieMonster();

    var character = this.state.character;
    character.created  = true;
    this.hasCharacter = true;

    monster.meSaveCookie("dnd-character", character.toJSON(), {'years' : 20});

    this.handleCharacterUpdate(character);
  }

  render() {
    const hasCharacter = this.state.hasCharacter;

    return(
      <div id='name'>

        { hasCharacter ? (
          <CharacterManager 
            character={this.state.character}
            onCharacterUpdate={this.handleCharacterUpdate}
            onCharacterSave={this.handleCharacterSave} />
        ) : (
          <CharacterCreator character={this.state.character} 
            onCharacterUpdate={this.handleCharacterUpdate}
            onCharacterSave={this.handleCharacterSave} />
        )}

        <Attributes character={this.state.character} />
      </div>
    );
  }
}

export default Main;
