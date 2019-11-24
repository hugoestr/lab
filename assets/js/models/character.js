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

    this.setClass();
  }

  goldRoll() {
    this.gold = this.dice.roll(3, 6) * 10;
  }

  setClass(){
    const classDefining = ["intelligence", "wisdom", "strength"];
    const topScores = this.
                     attributes.
                     sortedByScore().
                     filter(item => classDefining.includes(item[0]));
                     
    console.log("Top scores" + JSON.stringify(topScores));
    switch(topScores[0]){
      case 'strength':
        this.attributes.class = 'fighter';
        break;
      case 'intelligence':
        this.attributes.class = 'magic-user';
        break;

      case 'wisdom':
        this.attributes.class = 'cleric';
        break;
      default:
        break;
    }
  }
}

export default Character;
