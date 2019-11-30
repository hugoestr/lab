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
    this.props.onCheckout(this.state.basket, this.state.total);
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

     new Equipment("Axe, Battle", 7, "weapon"), 
     new Equipment("Axe, Hand", 3, "weapon"), 
     new Equipment("Bow, composite", 50, "weapon"), 
     new Equipment("Bow, long", 40, "weapon"), 
     new Equipment("Bow, short", 25, "weapon"), 
     new Equipment("20 arrows", 5, "weapon"), 
     new Equipment("Quiver for 20 arrows", 10, "weapon"), 
     new Equipment("Silver tipped arrow", 5, "weapon"), 
     new Equipment("Crossbow, heavy", 25, "weapon"), 
     new Equipment("Crossbow, light", 15, "weapon"), 
     new Equipment("30 Quarrels", 5, "weapon"), 
     new Equipment("Case for 30 Quarrels", 10, "weapon"), 
     new Equipment("Dagger", 3, "weapon"), 
     new Equipment("Flail", 8, "weapon"), 
     new Equipment("Halberd", 7, "weapon"), 
     new Equipment("Lance", 4, "weapon"), 
     new Equipment("Mace", 5, "weapon"), 
     new Equipment("Morning star", 6, "weapon"), 
     new Equipment("Pole Arm", 7, "weapon"), 
     new Equipment("Spear", 1, "weapon"), 
     new Equipment("Sword", 10, "weapon"), 
     new Equipment("Sword, two handed", 15, "weapon"), 

     new Equipment("Backpack, leather", 5, "gear"), 
     new Equipment("Belladonna, bunch", 10, "gear"), 
     new Equipment("Cross, silver", 25, "gear"), 
     new Equipment("Cross, wooden", 2, "gear"), 
     new Equipment("Garlic, bud", 5, "gear"), 
     new Equipment("Holy water, vial", 25, "gear"), 
     new Equipment("Lantern", 10, "gear"), 
     new Equipment("Mallet and 3 stakes", 3, "gear"), 
     new Equipment("Mirror, small silver", 15, "gear"), 
     new Equipment("Mirror, iron", 5, "gear"), 
     new Equipment("Oil, flask", 2, "gear"), 
     new Equipment("Pole, 10'", 1, "gear"), 
     new Equipment("Ration, iron 1 person/week", 15, "gear"), 
     new Equipment("Ration, standard  1 person/week", 5, "gear"), 
     new Equipment("Rope, 50'", 1, "gear"), 
     new Equipment("Sack, large", 2, "gear"), 
     new Equipment("Sack, small", 1, "gear"), 
     new Equipment("Spikes, 12 iron", 1, "gear"), 
     new Equipment("Torches, 6", 1, "gear"), 
     new Equipment("Water/Wine skin", 1, "gear"), 
     new Equipment("Wine, quart", 1, "gear"), 
     new Equipment("Wolvesbane, bunch", 10, "gear"), 
     
     new Equipment("Horse, draft", 30, "transportation"), 
     new Equipment("Horse, light", 400, "transportation"), 
     new Equipment("Warhorse, medium", 100, "transportation"), 
     new Equipment("Warhorse, heavy", 200, "transportation"), 
     new Equipment("Mule", 20, "transportation"), 
     new Equipment("Saddle", 25, "transportation"), 
     new Equipment("Saddle bags", 10, "transportation"), 
     new Equipment("Cart", 100, "transportation"), 
     new Equipment("Wagon", 200, "transportation"), 
     new Equipment("Raft", 40, "transportation"), 
     new Equipment("Boat, small", 100, "transportation"), 
     new Equipment("Merchant ship, small", 5000, "transportation"), 
     new Equipment("Merchant ship, large", 20000, "transportation"), 
     new Equipment("Galley, small", 10000, "transportation"), 
     new Equipment("Galley, large", 30000, "transportation"), 
    ];
  }
}

export default EquipmentPicker;
