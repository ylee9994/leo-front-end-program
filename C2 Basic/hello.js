//  자바스크립트의 시작  edwith 강좌
//  2022.6  공부
// 객체입문


console.log('Hello OOP from hello.js');

console.group('array loop')
var memberArray = ['eg', 'gr', 'lee'];
console.log(memberArray[2])

var i = 0;
while(i<memberArray.length){
    console.log(i, memberArray[i]);
    i = i+1;
}
console.groupEnd('array loop')


var memberObject = {
    manager:'egm',
    developer:'grm',
    designer:'leem'
}
console.group('object loop')
for(var key in memberObject){
    console.log(key, memberObject[key]);
}
console.groupEnd('object loop')


memberObject.designer = "leezm"
console.log(memberObject.designer)
console.log(memberObject['designer'])
delete memberObject.manager
console.log(memberObject['manager'])