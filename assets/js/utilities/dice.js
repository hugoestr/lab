class Dice {
  dice(upperLimit){
    return  Math.floor(Math.random() * upperLimit) + 1;
  }

  roll(numberOfDice, sides) {
    var result = 0;

    for(var i = 0; i < numberOfDice; i++){
      result += this.dice(sides);
    }

    return result;
  }
}

export default Dice;
