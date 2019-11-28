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

    console.log("stop here");
    return characterClasses;
  }
}

export default Character;
