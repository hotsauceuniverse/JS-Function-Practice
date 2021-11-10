// function 연습
const seYoung = {
  name : 'SEYOUNG',
  age : 27,
  getName: function (){
    return this.name;
  }
};

const hisName = seYoung.getName();
console.log(hisName);

function hello(){ // 이름이 있는 함수
  console.log('HELLO~');
}
let world = function(){ //이름이 없는 함수
  console.log('WORLD!');
}

hello();
world();

function sum(a, b){
  return a+b;
}

let a = sum(2, 5);
let b = sum(1, 5);
let c = sum(15, 25);

console.log(a, b, c);


function minus(d, e){
  return d-e;
}

let d = minus(5, 2);
let e = minus(2, 5);
let f = minus(10, 52);

console.log(d, e, f);

function multiply(x, y){
  return x * y;
}

let x = multiply(2, 5);
let y = multiply(5, 10);
let z = multiply(10, 25);

console.log(x, y, z);