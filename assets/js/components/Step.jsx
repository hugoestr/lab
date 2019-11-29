import React from 'react';

function Step(props){
  return (
    <div id={props.stageName} >
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      {props.children} 
      <button onClick={props.onClick} >{props.buttonLabel}</button>
    </div>
  );
}

export default Step;
