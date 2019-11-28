
import React from 'react';

function Attributes(props) {
    return(
        <div className="character-attributes">
          <h1>Character</h1>
          <Scores character={props.character} />
          <AttributesTable attributes={props.character.attributes}  />
        </div>
    );
}

function Scores(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Alignment</th>
          <th>Class</th>
          <th>Race</th>
          <th>Level</th>
          <th>Gold</th>
          <th>XP</th>
          <th>AC</th>
          <th>HP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.character.name}</td>
          <td>{props.character.attributes.alignment}</td>
          <td>{props.character.class}</td>
          <td>{props.character.race}</td>
          <td>{props.character.level}</td>
          <td>{props.character.gold}</td>
          <td>{props.character.xp}</td>
          <td>{props.character.ac}</td>
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
          <th> Bonus </th>
        </tr>
      </thead>
      <tbody>
        {props.attributes.names.map((key, index) => {
          return <tr key={index} >
                  <td>{key}</td>
                  <td>{props.attributes[key]}</td>
                  <td></td>
                </tr>;
        })}
      </tbody>
    </table>);
  }

export default Attributes;
