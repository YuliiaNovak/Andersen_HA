function createObjWithLiteral(name, age) {
  return { name, age };
}

function createObjWithNew(name, age) {
  const obj = new Object();
  obj.name = name;
  obj.age = age;
  return obj;
}

function createObjWithConstructorFn(name, age) {
  this.name = name;
  this.age = age;
}

function createObjWithConstructorFnPrototype(name, age) {
  function constructorFnWithPrototype() {}
  constructorFnWithPrototype.prototype.name = name;
  constructorFnWithPrototype.prototype.age = age;
  const obj = new constructorFnWithPrototype(name, age);
  return obj;
}

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  displayInfo() {
    return { name: this.name, age: this.age };
  }
}

function createObjWithMap(name, age) {
  const obj = new Map();
  obj.set("name", name);
  obj.set("age", age);
  return obj;
}

function createObjWithEntries(name, age) {
  const entries = [
    ["name", name],
    ["age", age],
  ];
  return Object.fromEntries(entries);
}

function getPeople(name, age) {
  const objLiteral = createObjWithLiteral(name, age);
  const objWithCreate = Object.create(objLiteral);
  const objWithNew = createObjWithNew(name, age);
  const objWithConstructorFn = new createObjWithConstructorFn(name, age);
  const objWithConstructorFnWithPrototype = createObjWithConstructorFnPrototype(
    name,
    age
  );
  const objWithClass = new PersonClass(name, age);
  const objWithSpread = { ...objLiteral };
  const objWithMap = createObjWithMap(name, age);
  const objWithEntries = createObjWithEntries(name, age);

  return [
    objLiteral,
    Object.assign({}, objLiteral),
    objWithCreate,
    objWithNew,
    objWithConstructorFn,
    objWithConstructorFnWithPrototype,
    objWithClass.displayInfo(),
    objWithSpread,
    objWithMap,
    objWithEntries,
  ];
}

console.log(getPeople("Boba", 101));
