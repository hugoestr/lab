import React from 'react';

function createOptions(items){
  const abilityClass = {
    'strength': 'fighter', 
    'intelligence': 'magic-user', 
    'wisdom': 'cleric', 
    'dexterity': 'thief' 
  };

  return items.map(item => { 
    let className = abilityClass[item];
    return <option key={"select_class_" + className} 
                   value={className}>{className}</option>;
  });
}

function SelectClass(props) {
  return (
    <div>
      <h2>Select Class</h2>
      <select id="select-class" onChange={props.onChange} >
        {createOptions(props.classes)} 
      </select>
      
    </div>
  );
}

export default SelectClass;
