import React from 'react';

function createOptions(items){
  var result = [];

  const abilityClass = {
    'strength': 'fighter', 
    'intelligence': 'magic-user', 
    'wisdom': 'cleric', 
    'dexterity': 'thief' 
  };

  result = items.map(item => { 
    let classname = abilityClass[item];
    return <option key={"select_class_" + classname} 
                   value={classname}>{classname}</option>;
  });

  result.unshift(<option key="empty" value="">select one</option>);

  return result;
}

function SelectClass(props) {
  return (
      <select id="select-class" 
        defaultValue={''}
        onChange={props.onChange} >
        {createOptions(props.classes)} 
      </select>
  );
}

export default SelectClass;
