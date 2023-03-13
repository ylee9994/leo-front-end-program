// bootcourse
// 3장 DOM API
// 2022.7.5.

// 실습 1망고를 과일 리스트의 뒤에 추가

var mango = document.createElement("li");
var mangoText = document.createTextNode("망고");
mango.appendChild(mangoText);

var parent = document.querySelector("ul");
parent.appendChild(mango);

// 실습2
// insertBefore메서드를 사용해서, orange와  banana 사이에 새로운 과일을 추가하시오.
var nfruit = document.createElement("li");
var nfruitText = document.createTextNode("New fruit");
nfruit.appendChild(nfruitText);

var banana = document.querySelector("li:nth-child(3)");
var parent = document.querySelector("ul");
parent.insertBefore(nfruit, banana);

// 실습3
// 실습2를 insertAdjacentHTML메서드를  사용해서, orange와 banana 사이에 새로운 과일을 추가하시오.
var banana = document.querySelector("li:nth-child(3)");
banana.insertAdjacentHTML('afterend', "<li>참외</li>");

// 실습4
// apple을 grape 와 strawberry 사이로 옮기시오.
var strawberry = document.querySelector("li:nth-child(6)");
var apple = document.querySelector("li:nth-child(1)");
var parent = document.querySelector("ul");
parent.insertBefore(apple, strawberry);

// 실습5
// class 가 'red'인 노드만 삭제하시오.

var reds = document.querySelectorAll("li.red");
var parent = document.querySelector("ul");
    // for 문
    // for(var i=0; i<reds.length; i++){
    //     parent.removeChild(reds[i]);
    // }

    // foreach
    // reds.forEach(element => {
    //     parent.removeChild(element);   
    // });
reds.forEach(element =>{
    element.remove();
})

// 실습6
// section 태그의 자손 중에 blue라는 클래스를 가지고 있는 노드가 있다면, 그 하위에 있는 h2 노드를 삭제하시오.
var bluenode = document.querySelectorAll("section .blue");

bluenode.forEach(bnode =>{
    section = bnode.closest("section");
    var h2 = section.querySelector("h2");
    section.removeChild(h2);
})
