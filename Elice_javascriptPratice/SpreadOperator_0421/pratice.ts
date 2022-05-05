class Dog {
    name: string;
    species : string;
    constructor(name:string,species:string){
        this.name = name;
        this.species = species;
    }
    bark(){
        console.log(`${this.name}(${this.species}) : BOWWOW!`)
    }
}


function bark(dog: any) {
    console.log(`${dog.name}(${dog.species}) : BOWWOW!`);
}

const daisy: object = {
    name: 'Daisy',
    species: 'Bulldog'
};
const dog = new Dog('Dasisy','bulldog')
dog.bark()
bark(daisy);

console.log(bark)