import React from 'react';
import Equipment from '../models/equipment.js';

class EquipmentPicker extends React.Component {

  constructor(props){
    super(props);

    this.equipment = this.loadEquipment();
    
    this.state = {gold: this.props.gold,
                  basket: [],
                  total: 0};
    
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  } 

  handleAdd(e) {
    e.preventDefault();

    var basket = this.state.basket; 
    var subTotal = this.state.total; 
    var gold = this.state.gold; 

    var item = new Equipment();
    item.load(e.target.value);
    
    basket.push(item);
    gold -= item.cost;
    subTotal += item.cost;

    this.setState({basket: basket,
                total: subTotal,
                gold: gold});
  }

  handleRemove(e) {
    e.preventDefault();

    var basket = this.state.basket; 
    var subTotal = this.state.total; 
    var gold = this.state.gold; 

    var item = new Equipment();
    item.load(e.target.value);

    var index = basket.findIndex(i => i.name == item.name);

    console.log("index " + index);

    if (index > -1) {
      basket.splice(index, 1);

      gold += item.cost;
      subTotal -= item.cost;
    }


    this.setState({basket: basket,
                total: subTotal,
                gold: gold});
  }

  showEquipment(equipment) {
   return equipment.map(item =>{
    return <tr key={`equipment_${item.type}_${item.name}`}> 
       <td><button onClick={this.handleAdd} 
                   value={item.serialize()} >
            add
           </button>
       </td>
       <td><button onClick={this.handleRemove}  
                value={item.serialize()} >
              Remove
            </button>
       </td>
       <td>{item.name}</td>
       <td>{item.cost}</td>
       <td>{item.ac}</td>
       <td>{item.acModifier}</td>
    </tr>
   });
  }

  displayBasket(basket){
    return basket.map(item => <li key={`basket_item_${item.name}`} >{item.name}, {item.type}</li>);
  }

  handleCheckout(){
    this.props.onCheckout(this.basket, this.total);
  }

  render() {
    return(
      <div className="equipment">
        <h2>The equipment store!</h2>
        <button onClick={this.handleCheckout} >Checkout</button>
        <h3>Available gold: {this.state.gold - this.state.total}</h3>
        <h3>Total: {this.state.total}</h3>
        <h3>Cart:</h3>
        <ul>
          {this.displayBasket(this.state.basket)}
        </ul>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
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
