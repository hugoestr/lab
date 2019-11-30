class Equipment {
  constructor(name, cost, type, ac = 0, acModifier = 0){
    this.name = name;
    this.cost = cost;
    this.type = type;
    this.ac = ac;
    this.acModifier = acModifier;
  }

  load(stringFormat){
    var values = stringFormat.split();
    
    this.name = values[0];
    this.cost = values[1];
    this.type = values[2];
    this.ac = values[3];
    this.acModifier = values[4];

  }

  serialize(){
    return `${this.name},${this.cost},${this.type},${this.ac},${this.acModifier}`; 
  }
}

export default Equipment;
