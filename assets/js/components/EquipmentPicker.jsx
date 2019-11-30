import React from 'react';
import Equipment from '../models/equipment.js';

class EquipmentPicker extends React.Component {

  constructor(props){
    super(props);

    this.equipment = loadEquipment();
    
    this.state = {gold: props.gold,
                  basket: [],
                  total: 0};

  } 

  showEquipment(equipment){
    
  }

  render() {
    return(
      <div className="equipment">
        <h2>The equipment store!</h2>
        <h3>Available gold: {this.state.gold - this.state.total}</h3>
        <h3>Total: {this.state.total}</h3>
        <table>
          {this.showEquipment(this.equipment)}
        </table>
      </div>
    );
  }
  
  loadEquipment() {
    return [
     new Equipment("leather", 15, "armor", 7), 
     new Equipment("chain mail", 30, "armor", 5), 
     new Equipment("plate mail", 50, "armor", 3), 
     new Equipment("shield", 10, "armor", 0, -1), 
     new Equipment("helmet", 10, "armor", 7), 
     new Equipment("barding", 5, "armor", 150), 

     new Equipment("name", 0, "type"), 
    ];
  }
}

export default EquipmentPicker;
