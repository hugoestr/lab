
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

  sortedByScore() {
    return this.
           names.
           map(key =>  [key, this[key]]).
           sort((a, b) =>  b[1] - a[1] ); 
  }

}

export default Attributes;
