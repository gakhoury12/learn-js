class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this.persons = [];
  }

  showId() {
    console.log(this);
    return this.#id;
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }
  push(p) {
    return this.persons.push(p)
  }

  pop() {
    return this.persons.pop().age
  }

  show() {
    return this.persons
  }

}
//soemthign
let pstack = new PStackImpl();
pstack.push({name: 'Jojo', age: 21});
pstack.push({name: 'Gabi', age: 29});
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.show());
console.log(pstack.persons);
