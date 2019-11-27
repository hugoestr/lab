import Dice from '../utilities/dice.js';
import Attributes from './attributes.js';

class Character {
  constructor(){
    this.created = false;
    this.tiedTopScore = false;

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

    this.setClass();
  }

  goldRoll() {
    this.gold = this.dice.roll(3, 6) * 10;
  }

  setClass(){
    this.topAttributes = this.attributes.topScores;

    if (this.topAttributes.length > 1) {
      this.tiedTopScore = true;
    }

    switch(this.topAttributes[0].key){
      case 'strength':
        this.attributes.class = 'fighter';
        break;
      case 'intelligence':
        this.attributes.class = 'magic-user';
        break;
      case 'wisdom':
        this.attributes.class = 'cleric';
        break;
      case 'dexterity':
        this.attributes.class = 'thief';
        break;

      default:
        break;
    }
  }
}

export default Character;
