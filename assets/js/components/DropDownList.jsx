import React from 'react';

function createOptions(items, identifier){
  var result = [];

    result = items.map(item => { 
    return <option key={`select_class_${identifier}_${item}`} 
                   value={item}>{item}</option>;
  });

  result.unshift(<option key="empty" value="">select one</option>);

  return result;
}

function DropDownList(props){
  return (
      <select className="dropDownList" 
        defaultValue={''}
        onChange={props.onChange} >
        {createOptions(props.items)} 
      </select> 
  );
}

export default DropDownList;
