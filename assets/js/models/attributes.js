import KeyValue from "./keyValue.js";

class Attributes {
  constructor() {
    this.alignment = "";

    this.strength = 0;
    this.constitution = 0;
    this.intelligence = 0;
    this.wisdom = 0;
    this.dexterity = 0;
    this.charisma = 0;

    this.names = [
      'strength',
      'constitution',
      'intelligence',
      'wisdom',
      'dexterity',
      'charisma'
    ];
  }

  get sortedByScore() {
    return this.
           names.
           map(key =>  new KeyValue(key, this[key])).
           sort((a, b) =>  b.value - a.value); 
  }

  get keyAttributes() {
    var classDefining = [
      "intelligence", 
      "strength"];

    if (this.alignment != 'neutral') {
      classDefining.push("wisdom");
    }

    if (this.alignment != 'law' ) {
      classDefining.push("dexterity");
    }

    return this.
            sortedByScore.
            filter(item => classDefining.includes(item.key));
  }

  get topScores() {
    const score = this.keyAttributes[0].value;
    
    return this.
            keyAttributes.
            filter(item => item.value == score);
  }

  toJSON(){
    const toSerialize = {
      'alignment': this.alignment,

      'strength': this.strength,
      'constitution': this.constitution,
      'intelligence': this.intelligence,
      'wisdom': this.wisdom,
      'dexterity': this.dexterity,
      'charisma': this.charisma
    }

    return JSON.stringify(toSerialize);
  }

  loadFromString(fromString) {
    var values = JSON.parse(fromString);

    this.alignment = values['alignment'];

    this.strength = values['strength'];
    this.constitution = values['constitution'];
    this.intelligence = values['intelligence'];
    this.wisdom = values['wisdom'];
    this.dexterity = values['dexterity'];
    this.charisma = values['charisma'];
  }
}

export default Attributes;
