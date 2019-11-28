import React from 'react';
import SelectClass from "./SelectClass.jsx";

//import Button from '@material-ui/core/Button';

class CharacterCreator extends React.Component{

  constructor(props) {
    super(props);
    this.creationStates = {
      'alignment' : 'roll',
      'roll' : 'class',
      'class' : 'money',
      'money' : 'race',
      'race' : 'name',
      'name' : 'done',
    };

    this.creationState =  'roll';

    this.enableState('alignment');

    this.handleAttributeRoll = this.handleAttributeRoll.bind(this);
    this.handleClass = this.handleClass.bind(this);
    this.handleAlignment = this.handleAlignment.bind(this);
    this.handleGoldRoll = this.handleGoldRoll.bind(this);
    this.handleRace = this.handleRace.bind(this);
    this.handleName = this.handleName.bind(this);
    
    this.enableState = this.enableState.bind(this);

    this.handleAccept = this.handleAccept.bind(this);
    this.save = this.save.bind(this);
  }

  enableState(activeState) {
    this.creationState = activeState;
  }

  handleAccept(e) {
    e.preventDefault();
    var nextState = "";

    if (this.creationState == "roll" &&
        this.props.character.attributes.tiedTopScore) {
      this.creationState = "class";
    } else {
      nextState = this.creationStates[this.creationState];
    }

    this.enableState(nextState);
  }

  handleAttributeRoll(e)  {
    e.preventDefault();

    var character = this.props.character;
    character.createRoll();

    this.props.onCharacterUpdate(character);
  }
 
  handleClass(e)  {
    e.preventDefault();

    var character = this.props.character;
    character.class = e.target.value;

    this.props.onCharacterUpdate(character);
  }


  handleAlignment(e)  {
    e.preventDefault();

    var character = this.props.character;
    character.attributes.alignment = e.target.value;

    this.props.onCharacterUpdate(character);
  }

  handleGoldRoll(e)  {
    e.preventDefault();

    var character = this.props.character;
    character.goldRoll();

    this.props.onCharacterUpdate(character);
  }

  handleRace(e)  {
    e.preventDefault();

    var character = this.props.character;
    character.race  = e.target.value;

    this.props.onCharacterUpdate(character);
  }
 
  handleName(e)  {
    e.preventDefault();

    var character = this.props.character;
    character.name  = e.target.value;

    this.props.onCharacterUpdate(character);
  }

  save(e)  {
    e.preventDefault();

    var character = this.props.character;
    character.created  = true;

    console.log("saving here");
    this.props.onCharacterUpdate(character);
  }


  render() {
    return(
      <div className="character-creator">
        <div className= "form" >

          <div id="alignment">
          <h2>1. Pick Alignment</h2>
            <select id="select-alignment" 
                    defaultValue={""}
                    onChange={this.handleAlignment}>
              <option value="">Select Alignment</option>
              <option value="law" >Law</option>
              <option value="neutral" >Neutral</option>
              <option value="chaos" >Chaos</option>
            </select>

            <button onClick={this.handleAccept} >Accept</button>
          </div>

          <div id="roll">
            <h2>2. Roll a character</h2>
            <button onClick={this.handleAttributeRoll} >Roll Attributes</button>
            <button onClick={this.handleAccept} >Accept</button>
          </div>

          <div id="class">
            <SelectClass 
              classes={this.props.character.availableClasses}
              onChange={this.handleClass} />

              <button onClick={this.handleAccept} >Accept</button>
          </div>

          <div id="money">
            <h2>3. Roll for wealth</h2>
            <button onClick={this.handleGoldRoll} >Roll for Gold</button>
            <button onClick={this.handleAccept} >Accept</button>
          </div>

          <div id="race">
            <h2>4. Pick race</h2>
              <select id="select-race" 
                      defaultValue={""}
                      onChange={this.handleRace}>
                <option value="">Select Race</option>
                <option value="human" >Human</option>
                <option value="elf" >Elf</option>
                <option value="dwarf" >Dwarf</option>
                <option value="hobbit" >Hobbit</option>
              </select>

            <button onClick={this.handleAccept} >Accept</button>
          </div>

          <div id="name">
            <h2>5 Name them!</h2>
            <input type="text" name="name" 
                   placeholder='name'
                   onChange={this.handleName}></input>
            <button onClick={this.handleAccept} >Accept</button>
          </div>


          <div id="done">
            <h2>6. Save Character</h2>
            <button onClick={this.save} >Save</button>
          </div>


        </div>
      </div>
    ); 
  }
}

export default CharacterCreator;
