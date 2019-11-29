import React from 'react';
import Attributes from './Attributes.jsx';
import CharacterCreator from './CharacterCreator.jsx';
import CharacterManager from './CharacterManager.jsx';

import Character from '../models/Character.js';

import CookieMonster  from "../utilities/cookieMonster.js";

class Main extends React.Component {

  constructor(props) {
    super(props);
    var character, hasCharacter;

    [character, hasCharacter] = this.retrieveCharacter(); 

    this.state = {character: character,
                  hasCharacter: hasCharacter };

    this.handleCharacterUpdate = this.handleCharacterUpdate.bind(this);
    this.handleCharacterSave = this.handleCharacterSave.bind(this);
    this.handleCharacterDestroy = this.handleCharacterDestroy.bind(this);
  }

  retrieveCharacter() {
    var character = new Character();
    var hasCharacter = false;

    const monster = new CookieMonster();
    const serialized  = monster.meGetCookie("dnd-character");

    if (serialized != undefined) {
      character.loadFromString(serialized); 
      hasCharacter = true;
    }

    return [character, hasCharacter];
  }

  handleCharacterUpdate(data) {
    this.setState({character: data}); 
  }

  handleCharacterSave() {
    var character = this.state.character;
    character.created  = true;

    const monster = new CookieMonster();
    monster.meSaveCookie("dnd-character", character.toJSON(), {'years' : 20});

    this.setState({character: character, hasCharacter: true});
  }

  handleCharacterDestroy() {
    var character = new Character();

    const monster = new CookieMonster();
    monster.meEatCookie("dnd-character");

    this.setState({character: character, hasCharacter: false});
  }

  render() {
    const hasCharacter = this.state.hasCharacter;
    console.log("here we go");

    return(
      <div id='name'>

        { hasCharacter ? (
          <CharacterManager 
            character={this.state.character}
            onCharacterUpdate={this.handleCharacterUpdate}
            onCharacterSave={this.handleCharacterSave}
            onCharacterDestroy={this.handleCharacterDestroy} />
        ) : (
          <CharacterCreator character={this.state.character} 
            onCharacterUpdate={this.handleCharacterUpdate}
            onCharacterSave={this.handleCharacterSave} />
        )}

        <Attributes character={this.state.character} />

        <a href="http://tametick.com/dnd/#Character%20Creation">Read details in the rules</a>
      </div>
    );
  }
}

export default Main;
