
var SuperObj = {superVal:'super'}
var subObj = {subVal:'sub'}
subObj.__proto__ = SuperObj;
console.log('subObj.superVal :', subObj.superVal);

var subObj2 = Object.create(SuperObj);  // 정통적인

// debugger;   // 브레이크포인트

var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:20, second:30}
function sum(another){
    return another + (this.first + this.second);
}
console.log("sum.call(kim)", sum.call(kim, '=>') );

var kimSum = sum.bind(kim, '--->');
console.log('kimSum()', kimSum());


// built in functions
console.group('builtin functions')
console.log(Math.PI);
console.log(Math.random());
console.groupEnd('builtin functions')

// 자신의 객체를 새로 만듬
var MyMath = {
    PI:Math.PI,
    random:function(){  // method
        return Math.random();
    }
}

console.log(MyMath.PI);
console.log(MyMath.random())

// 새로운 객체의 정의
function Person(name, first, second, thrid){
    this.name = name;
    this.first = first;
    this.second = second;
    this.sum = function(){
        return this.first + this.second;
    }
}
Person.prototype.diff = function(){
    return this.second - this.first;
}

var kim = new Person('kim', 10, 20);
var lee = new Person('Lee', 10, 30);
console.log(kim.sum());
console.log(lee.sum());
console.log(kim.diff());

kim.diff = function(){
    return this.first + this.first;
}
console.log(kim.diff());
console.log(lee.diff());

// class를 이용한 프로그램
class CPerson{
    constructor(name, first, second, third){
        this.name = name;
        this.first = first;
        this.second = second;
        console.log("Inside constructor")
    }
    sum(){
        return this.first + this.second;
    }
}

class PersonPlus extends Person{
    avg(){
        return(this.first + this.second) / 2;
    }
}

var okim = new CPerson('Park', 100, 200);
var kim = new PersonPlus('Kim', 10, 20, 30)
console.log(okim);
console.log(okim.sum());
console.log("kim.avg()", kim.avg())