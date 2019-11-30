import React from 'react';
import SelectClass   from "./SelectClass.jsx";
import SelectRace    from "./SelectRace.jsx";
import DropDownList  from "./DropDownList.jsx";
import Step from "./Step.jsx";

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
      'money' : 'spells',
      'spells': 'equipment',
      'equipment': 'name',
      'name' : 'done',
    };

    this.spells = [
      'Charm person',
      'Detect magic',
      'Hold portal',
      'Light',
      'Protection from evil',
      'Read languages',
      'Read magic',
      'Sleep' ];

    this.state = {creationState: 'alignment',
                  message: "",
                  buttonDisabled: false};

    this.handleAttributeRoll = this.handleAttributeRoll.bind(this);
    this.handleClass = this.handleClass.bind(this);
    this.handleAlignment = this.handleAlignment.bind(this);
    this.handleGoldRoll = this.handleGoldRoll.bind(this);
    this.handleHealthRoll = this.handleHealthRoll.bind(this);
    this.handleRace = this.handleRace.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSpells = this.handleSpells.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);

    this.handleAccept = this.handleAccept.bind(this);
  }

  handleAccept(e) {
    e.preventDefault();

    var nextState = this.creationStates[this.state.creationState];

    if (nextState == 'spells' && this.props.character.class != 'magic-user'){
      nextState = this.creationStates[nextState];
    }

    this.setState({creationState: nextState, 
                   buttonDisabled: false,
                   message: ''});
  }

  handleAttributeRoll(e)  {
    e.preventDefault();

    var character = this.props.character;
    character.createRoll();

    this.setState({buttonDisabled: true, 
                   message: 'Abilities created. See below.'});
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

    this.setState({buttonDisabled: true, 
                   message: `You have ${character.gold} of gold!`});

    this.props.onCharacterUpdate(character);
  }

  handleHealthRoll(e)  {
    e.preventDefault();

    var character = this.props.character;
    character.healthRoll();

    this.setState({buttonDisabled: true, 
                   message: `You have ${character.hp} health points!`});

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

  handleSpells(e)  {
    e.preventDefault();

    var character = this.props.character;
    character.spells.push(e.target.value);

    this.props.onCharacterUpdate(character);
  }

  handleCheckout(equipment, cost)  {

    var character = this.props.character;
    character.equipment = equipment;
    character.gold = character.gold - cost;

    this.props.onCharacterUpdate(character);
  }

  showCreationState() {
    switch(this.state.creationState) {
      case 'alignment':
        return <Step  
                stateName='alignment' 
                title='Select Alignment'
                message={this.state.message}
                buttonLabel='Next'
                onClick={this.handleAccept}  > 
              <select id="select-alignment" 
                        defaultValue={""}
                        onChange={this.handleAlignment}>
                  <option value="">Select Alignment</option>
                  <option value="law" >Law</option>
                  <option value="neutral" >Neutral</option>
                  <option value="chaos" >Chaos</option>
                </select>
          </Step>;
        break;
      case 'roll':
          return  <Step  
                stateName='roll' 
                title='Roll Abilities'
                message={this.state.message}
                buttonLabel='Next'
                onClick={this.handleAccept}  > 
            <button onClick={this.handleAttributeRoll} 
                    disabled={this.state.buttonDisabled} >Roll Attributes</button>
          </Step>
        break;
      case 'class':
        return  <Step  
                stateName='class' 
                title='Select Class'
                message={this.state.message}
                buttonLabel='Next'
                onClick={this.handleAccept}  > 
            <SelectClass 
              classes={this.props.character.availableClasses}
              onChange={this.handleClass} />
          </Step>;
        break;
      case 'health':
        return  <Step  
                stateName='health' 
                title='Roll health'
                message={this.state.message}
                buttonLabel='Next'
                onClick={this.handleAccept}  > 
                  <button onClick={this.handleHealthRoll}         
                          disabled={this.state.buttonDisabled} >
                          Roll for Health Points
                  </button>
          </Step>;
        break;
      case 'race':
        return  <Step  
                stateName='race' 
                title='Select race'
                message={this.state.message}
                buttonLabel='Next'
                onClick={this.handleAccept}  > 
            <SelectRace 
              races={this.props.character.availableRaces}
              onChange={this.handleRace} />
          </Step>;
        break;
      case 'money':
        return  <Step  
                stateName='money' 
                title='Roll for Gold'
                message={this.state.message}
                buttonLabel='Next'
                onClick={this.handleAccept}  > 
            <button onClick={this.handleGoldRoll}         
            disabled={this.state.buttonDisabled} >
              Roll for Gold
            </button>
          </Step>;
        break;
      case 'spells':
        return  <Step  
                stateName='spells' 
                title='Pick a spell'
                message={this.state.message}
                buttonLabel='Next'
                onClick={this.handleAccept}  > 
                <DropDownList
                  items={this.spells}
                  onChange={this.handleSpells} 
                /> 
          </Step>;
        break;
      case 'equipment':
        return  <Step  
                stateName='equipment' 
                title='Buy equipment!'
                message={this.state.message}
                buttonLabel='Next'
                onClick={this.handleAccept}  > 
                <EquipmentPicker
                  gold={this.state.character.gold}
                  onCheckout={this.handleCheckout} 
                /> 
          </Step>;
        break;
      case 'name':
        return  <Step  
                stateName='name' 
                title='Give a name'
                message={this.state.message}
                buttonLabel='Next'
                onClick={this.handleAccept}  > 
            <input type="text" name="name" 
                   placeholder='name'
                   onChange={this.handleName}></input>
          </Step>;
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
        <h1>Create</h1>
        <div className= "form" >
          {this.showCreationState()}
        </div>
      </div>
    ); 
  }
}

export default CharacterCreator;
