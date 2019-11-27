class KeyValue {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class Attributes {
  constructor() {
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
    const classDefining = ["intelligence", "wisdom", "strength", "dexterity"];

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
}

export default Attributes;
