//types typescript knows
//number, string,boolean,object,array |tuple, enums, any,union type, literal types,unknown
const person: object = {
  name: "chamara",
  age: 34
};

const person2: { name: string; age: number; nickname: string } = {
  name: "chamara",
  age: 34,
  nickname: "test"
};

type combination = number | string | object; //can define our own types

interface Person {
  name: string;
  age: number;
  nickname: string;
  hobbies: string[];
  roleTuple: [number, string];
  enumTest: personEnum;
  unionTest: string | number;
  literalType: "test-lit" | "test-not-lit";
  com: combination;
}

enum personEnum {
  one,
  two,
  three
}

const person3: Person = {
  name: "chamara",
  age: 34,
  nickname: "test",
  hobbies: ["test", "test2"],
  roleTuple: [1, ""],
  enumTest: personEnum.one,
  unionTest: "test", //1
  literalType: "test-lit", //'test-not-lit',
  com: "teset"
};

console.log(person2.nickname);

//return types
function add(a: number, b: number): number {
  return a + b;
}
//function types
function add1(a: number, b: number): void {
  console.log(a + b);
}

function add2(a: number, b: number): undefined {
  console.log(a + b);
  return;
}
function test() {
  console.log("shound not work");
}

let carriesFunction: Function = add2;
carriesFunction(1, 2);

let carriesFunction2: (a: number, b: number) => void;
carriesFunction2(3, 4);
//unknown
let x: unknown;
let y: string;
//y=x; this gives error any will not give error

//never
//this function never returns any thing should crash
function genError(msg: string, code: number):never {
  throw { message: msg, errorCode: code };
  genError("message", 404);
}
