
import React from 'react';

function Attributes(props) {
    return(
        <div className="character-attributes">
          <h2>Character</h2>
          <Scores character={props.character} />
          <AttributesTable attributes={props.character.attributes}  />
          <Languages languages={props.character.languages} />
          <Spells spells={props.character.spells} />
          <Equipment equipment={props.character.equipment} />
          <MagicItems magicItems={props.character.magicItems} />
        </div>
    );
}

function Languages(props) {
  return (
    <div id="Languages">
      <h3>Languages</h3>
      <ul>
        {props.languages.map(item => <li key={`languages_${item}`}>{item}</li>)}
      </ul>
    </div>
  );
}


function Spells(props) {
  return (
    <div id="spells">
      <h3>Spells</h3>
      <ul>
        {props.spells.map(item => <li key={`spell_${item}`}>{item}</li>)}
      </ul>
    </div>
  );
}

function MagicItems(props) {
  return (
    <div id="magic-items">
      <h3>Magic Items</h3>
      <ul>
        {props.magicItems.map(item => <li>item</li>)}
      </ul>
    </div>
  );
}

function Equipment(props) {
  return (
    <div id="equipment">
      <h3>Equipment</h3>
      <ul>
        {props.equipment.map(item => <li key={`character_equipment_list_${item.name}`}>{item.name}, {item.type}</li>)}
      </ul>
    </div>
  );
}

function Scores(props) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>{props.character.name}</td>
        </tr>
        <tr>
          <td>Alignment</td>
          <td>{props.character.attributes.alignment}</td>
        </tr>
        <tr>
          <td>Class</td>
          <td>{props.character.class}</td>
        </tr>
        <tr>
          <td>Race</td>
          <td>{props.character.race}</td>
        </tr>
        <tr>
          <td>Level</td>
          <td>{props.character.level}</td>
        </tr>
        <tr>
          <td>Gold</td>
          <td>{props.character.gold}</td>
        </tr>
        <tr>
          <td>XP</td>
          <td>{props.character.xp}</td>
        </tr>
        <tr>
          <td>AC</td>
          <td>{props.character.ac}</td>
        </tr>
        <tr>
          <td>HP</td>
          <td>{props.character.hp}</td>
        </tr>
      </tbody>
    </table>
  );
}

function AttributesTable(props) {
  return(
    <table>
      <thead>
        <tr>
          <th> Attribute </th>
          <th> Score </th>
        </tr>
      </thead>
      <tbody>
        {props.attributes.names.map((key, index) => {
          return <tr key={index} >
                  <td>{key}</td>
                  <td>{props.attributes[key]}</td>
                </tr>;
        })}
      </tbody>
    </table>);
  }

export default Attributes;
