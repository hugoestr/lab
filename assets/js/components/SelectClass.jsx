import React from 'react';

function createOptions(items){
  return items.map(item => { 
    return <option key={"select_class_" + item} value={item}>{item}</option>
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
