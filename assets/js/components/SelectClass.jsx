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
    let className = abilityClass[item];
    return <option key={"select_class_" + className} 
                   value={className}>{className}</option>;
  });

  result.unshift(<option key="empty" value="">select one</option>);

  return result;
}

function SelectClass(props) {
  return (
    <div>
      <h2>Select Class</h2>
      <select id="select-class" 
        defaultValue={''}
        onChange={props.onChange} >
        {createOptions(props.classes)} 
      </select>
      
    </div>
  );
}

export default SelectClass;
