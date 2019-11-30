class Equipment {
  constructor(name, cost, type, ac = 10, acModifier = 0){
    this.name = name;
    this.cost = cost;
    this.ac = ac;
    this.acModifier = acModifier;
    this.type = type;
  }
}

export default Equipment;
