import React from 'react';
import Equipment from '../models/equipment.js';

class EquipmentPicker extends React.Component {

  constructor(props){
    super(props);

    this.equipment = this.loadEquipment();
    
    this.state = {gold: props.gold,
                  basket: [],
                  total: 0};
  } 

  handleChange(e) {
    e.preventDefault();
    var equipment = this.state.equipment; 
    var subTotal = this.state.total; 
    var gold = this.state.gold; 

    var item = new Equipment();
    item.load(e.target.value);
   
    if (e.target.checked) {
      equipment.push(item);
      gold -= item.cost;
      subTotal += item.cost;
    } else {
      equipment = equipment.filter(i => i !== item);
      gold += item.cost;
      subTotal -= item.cost;
    }

    this.setSet(equipment: equipment,
                total: subTotal,
                gold: gold);
  }

  showEquipment(equipment){
   return equipment.map(item =>{
    return <tr key={`equipment_${item.type}_${item.name}`}> 
       <td><input type="checkbox" 
                  value={item.serialize()}
                  onChange={this.handleChange} /></td>
       <td>{item.name}</td>
       <td>{item.cost}</td>
       <td>{item.ac}</td>
       <td>{item.acModifier}</td>
    </tr>
   });
  }

  render() {
    return(
      <div className="equipment">
        <h2>The equipment store!</h2>
        <h3>Available gold: {this.state.gold - this.state.total}</h3>
        <h3>Total: {this.state.total}</h3>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>cost</th>
              <th>ac</th>
              <th>ac modifier</th>
            </tr> 
          </thead>
          <tbody>
            {this.showEquipment(this.equipment)}
          </tbody>
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
     new Equipment("barding", 150, "armor", 5), 

     new Equipment("name", 0, "type"), 
    ];
  }
}

export default EquipmentPicker;
