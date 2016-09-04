// ES6: syntax sugar improves classes
class Cat {
  constructor (name, color) {
    this.name = name;
    this.color = color;
  }

  present () {
    return `${this.name} is ${this.color}`;
  }
}

var cat = new Cat('Mici', 'dark brown');
console.log(cat.present()); // => Mici is dark brown





// ES6: Extend
class Tabby extends Cat {
  constructor (name) {
    super(name, ['Orange', 'White']);
  }

  present () {
    return `${super.present()} and she's cool`;
  }
}

let cat = new Tabby('Friskies Cat', 'Friskies Cat');
console.log(cat.present()); // Friskies Cat is Orange,
                            // White and she's cool







// ES6: getters/setters are great
class Cat {
  constructor (name, gender) {
    this._name = name;
    this.gender = gender;
  }
  // name is like a property, but calculatable
  get name () {
    if (this.gender == 'female') {
      return `Ms. ${this._name}`;
    }else{
      return `Mr. ${this._name}`;
    }
  }
  set name (newName) {
    if (newName) {
      this._name = newName;
    }else{
      console.log("I need a name");
    }
  }
}

let cat = new Cat('Mici', 'female');
console.log(cat.name); // Ms. Mici

cat.name = null; // I need a name

cat.name = 'John'
cat.gender = 'male';
console.log(cat.name); // Mr. John
