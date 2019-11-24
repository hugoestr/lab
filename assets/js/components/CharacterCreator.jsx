import React from 'react';


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

    this.state = { creationState: 'roll' }

    this.enableState('roll');

    this.handleAttributeRoll = this.handleAttributeRoll.bind(this);
    this.handleAlignment = this.handleAlignment.bind(this);
    this.handleGoldRoll = this.handleGoldRoll.bind(this);
    this.handleRace = this.handleRace.bind(this);
    this.handleName = this.handleName.bind(this);

    this.handleAccept = this.handleAccept.bind(this);
    this.save = this.save.bind(this);
  }

  enableState(activeState) {
    
  }

  handleAccept(e) {
    e.preventDefault();

    const nextState = this.creationStates[this.state.creationState];

    this.enableStep(nextState);

    this.props.onCharacterUpdate(character);
    this.setState({creationState: character});
  }

  handleAttributeRoll(e)  {
    e.preventDefault();

    var character = this.props.character;
    character.createRoll();

    this.props.onCharacterUpdate(character);
  }
 
  handleAlignment(e)  {
    e.preventDefault();

    var character = this.props.character;
    character.alignment = e.target.value;

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

        <h1>Roll Attributes</h1> 
        <div className= "form" >
          <div id="roll">
            <input type="text" name="name" ></input>
            <h2>1. Roll a character</h2>
            <button onClick={this.handleAttributeRoll} >Roll Attributes</button>
            <button onClick={this.handleAccept} >Accept</button>
          </div>

          <div id="alignment">
          <h2>2. Pick Alignment</h2>
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

          <div id="money">
            <input type="text" name="name" ></input>
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
