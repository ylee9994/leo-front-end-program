// bootcourse frontend course
// chap3. arrays of javascript
// 2022.7.4.


var a = [];
//배열 안에는 모든 타입이 다 들어갈 수 있다. 함수도 배열 안에 배열도, 배열 안에 객체도 들어갈 수 있음.
var a = [1,2,3,"hello", null, true, []];
console.log(a);
console.log(a.length);

a.push(5);

[1,2,3,4].indexOf(3); // 2

// concat
//[1,2,3,4].concat(2,3);

var origin = [1,3, 5,7];
var corigin = [...origin, 2,3];
corigin.forEach(function(v,i,o){
    console.log(v);
})

var mapped = corigin.map(function(v){
    return v*2;
})

console.log(mapped)

// key, value pair, object
var obj = {name:"cc", age:20}
console.log(obj.name);
console.log(obj["age"]);  // obj.age

for(key in obj){
    console.log(obj[key]);
}

const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

// show keys made of numbers
var numcontainingkeys = [];

for(k in data){
    console.log(k, data[k]);
    for(k2 in data[k]){
        console.log(k2, data[k][k2]);
        if(typeof(data[k][k2]) == "number"){
            numcontainingkeys.push(k2)
        }
    }
}
console.log(numcontainingkeys)