/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor (attributes) {
    this.createdAt = attributes.createdAt,
    this.name = attributes.name,
    this.dimensions = attributes.dimensions
  }
    destroy(){
      return `${this.name} was removed from the game.`;
    }
}


class CharacterStats extends GameObject{
    constructor (characAttributes){
    super(characAttributes);
    this.healthPoints = characAttributes.healthPoints
  }
    takeDamage(){
    return `${this.name} took damage.`;
    };
} 


class Humanoid extends CharacterStats{
    constructor (humanAttributes){
    super(humanAttributes);    
    this.team = humanAttributes.team,
    this.weapons = humanAttributes.weapons,
    this.language = humanAttributes.language
  } 
    greet(){
        return `${this.name} offers a greeting in ${this.language}.`;
    };
}





const object1 = new GameObject({
    createdAt: 09192019,
    name: "Naruto",
    dimensions: {
      length: 3,
      width: 1,
      height: 2,
    },    
  });

  const object2 = new CharacterStats({
    healthpoints: 50,
    createdAt: 09192019,
    name: "Haley",
    dimensions: {
    length: 3,
    width: 1,
    height: 2,
  },  
        
  })

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


