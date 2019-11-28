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
    this.ac = 10;

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

  healthRoll() {
    var dice = 8;
  
    switch(this.class) {
      case 'cleric':
        dice = 6;
        break;
      case 'magic-user':
      case 'thief':
        dice = 4;
        break;
      default:
        dice = 8;
    }

    this.hp = this.dice.roll(1, dice);
  }


  get availableClasses() {
    return this.
           attributes.
           topScores.
           map(item => item.key);
  }

  get availableRaces() {
    var characterClasses =[
      'human' 
    ];

    if (this.class == 'magic-user'){
      characterClasses.push('elf');
    }

    if (this.class == 'fighter') {
      characterClasses.push('elf');
      characterClasses.push('dwarf');
    }

    if (this.class == 'thief') {
        characterClasses.push('elf');
        characterClasses.push('dwarf');
    }

    if ((this.class == 'thief' ||
         this.class == 'fighter') && 
        this.alignment != 'chaotic'){
        characterClasses.push('hobbit');
    }

    return characterClasses;
  }
}

export default Character;
