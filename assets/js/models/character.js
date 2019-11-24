import Dice from '../utilities/dice.js';
import Attributes from './attributes.js';

class Character {
  constructor(){
    this.created = false;

    this.name = "";
    this.class = "";
    this.race  = "";
    this.alignment = "";

    this.level = 1;
    this.hp = 0;
    this.xp = 0;
    this.ac = 0;

    this.gold = 0;

    this.attributes = new Attributes();
    
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
}

export default Character;
