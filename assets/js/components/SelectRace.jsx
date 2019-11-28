import React from "react";

function createOptions(items){
  if (items == undefined || items == []) {
   return [];
  }
  var result = [];

  result = items.map(item => { 
    let race = item;
    return <option key={"select_race_" + race} 
                   value={race}>{race}</option>;
    });
  
  result.unshift(<option key="empty" value="">select one</option>);

  return result;
}

function SelectRace(props){
  return (
    <div>
      <h2>Select Race</h2>
      <select id="select-race" onChange={props.onChange} >
        {createOptions(props.races)} 
      </select>
      
    </div>
  );
}

export default SelectRace;
