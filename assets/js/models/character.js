import Dice from '../utilities/dice.js';
import Attributes from './attributes.js';

class Character {
  constructor(){
    this.created = false;
    this.tiedTopScore = false;

    this.name = "";
    this.class = "";
    this.race  = "";

    this.level = 1;
    this.hp = 0;
    this.xp = 0;
    this.ac = 0;

    this.gold = 0;

    this.attributes = new Attributes();
    this.topAttributes = [];;

    this.dice = new Dice();
  }

  
  createRoll() {
    this.attributes.strength = this.dice.roll(3, 6);
    this.attributes.wisdom = this.dice.roll(3, 6);
    this.attributes.intelligence = this.dice.roll(3, 6);
    this.attributes.constitution = this.dice.roll(3, 6);
    this.attributes.dexterity = this.dice.roll(3, 6);
    this.attributes.charisma = this.dice.roll(3, 6);
  }

  goldRoll() {
    this.gold = this.dice.roll(3, 6) * 10;
  }

  get availableClasses() {
    return this.
           attributes.
           topScores.
           map(item => item.key);
  }
}

export default Character;
