import React from 'react';
import SelectClass from "./SelectClass.jsx";
import SelectRace  from "./SelectRace.jsx";

//import Button from '@material-ui/core/Button';

class CharacterCreator extends React.Component{

  constructor(props) {
    super(props);
    this.creationStates = {
      'alignment' : 'roll',
      'roll' : 'class',
      'class' : 'health',
      'health' : 'race',
      'race' : 'money',
      'money' : 'name',
      'name' : 'done',
    };

    this.state = {creationState: 'alignment'};

    this.handleAttributeRoll = this.handleAttributeRoll.bind(this);
    this.handleClass = this.handleClass.bind(this);
    this.handleAlignment = this.handleAlignment.bind(this);
    this.handleGoldRoll = this.handleGoldRoll.bind(this);
    this.handleHealthRoll = this.handleHealthRoll.bind(this);
    this.handleRace = this.handleRace.bind(this);
    this.handleName = this.handleName.bind(this);
    
    this.handleAccept = this.handleAccept.bind(this);
  }

  handleAccept(e) {
    e.preventDefault();

    console.log("It was " + nextState);
    const nextState = this.creationStates[this.state.creationState];
    console.log("Now is " + nextState);

    this.setState({creationState: nextState});
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

  handleHealthRoll(e)  {
    e.preventDefault();

    var character = this.props.character;
    character.healthRoll();

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

  showCreationState() {
    switch(this.state.creationState) {
      case 'alignment':
        return <div id="alignment">
          <h2>Pick Alignment</h2>
            <select id="select-alignment" 
                    defaultValue={""}
                    onChange={this.handleAlignment}>
              <option value="">Select Alignment</option>
              <option value="law" >Law</option>
              <option value="neutral" >Neutral</option>
              <option value="chaos" >Chaos</option>
            </select>

            <button onClick={this.handleAccept} >Accept</button>
          </div>;
        break;
      case 'roll':
          return <div id="roll">
            <h2>2. Roll a character</h2>
            <button onClick={this.handleAttributeRoll} >Roll Attributes</button>
            <button onClick={this.handleAccept} >Accept</button>
          </div>
        break;
      case 'class':
        return <div id="class">
            <SelectClass 
              classes={this.props.character.availableClasses}
              onChange={this.handleClass} />

              <button onClick={this.handleAccept} >Accept</button>
          </div>;
        break;
      case 'health':
        return <div id="health">
            <h2>Roll for health</h2>
            <button onClick={this.handleHealthRoll} >Roll for Health Points</button>
            <button onClick={this.handleAccept} >Accept</button>
          </div>;

        break;
      case 'race':
        return <div id="race">
            <SelectRace 
              races={this.props.character.availableRaces}
              onChange={this.handleRace}
            />
           <button onClick={this.handleAccept} >Accept</button>
          </div>;
        break;
      case 'money':
        return <div id="money">
            <h2>Roll for wealth</h2>
            <button onClick={this.handleGoldRoll} >Roll for Gold</button>
            <button onClick={this.handleAccept} >Accept</button>
          </div>;
        break;
      case 'name':
        return <div id="name">
            <h2>Name them!</h2>
            <input type="text" name="name" 
                   placeholder='name'
                   onChange={this.handleName}></input>
            <button onClick={this.handleAccept} >Accept</button>
          </div>;
        break;

      case 'done':
        return <div id="done">
            <h2>6. Save Character</h2>
            <button onClick={this.props.onCharacterSave} >Save</button>
          </div>;
        break;
    }
  }

  render() {
    return(
      <div className="character-creator">
        <div className= "form" >
          {this.showCreationState()}
        </div>
      </div>
    ); 
  }
}

export default CharacterCreator;
