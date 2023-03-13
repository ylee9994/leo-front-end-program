// var snapDate = new Date();
function setClock(){
    var dateInfo = new Date(); 
    var hour = modifyNumber(dateInfo.getHours());
    var min = modifyNumber(dateInfo.getMinutes());
    var sec = modifyNumber(dateInfo.getSeconds());
    var year = dateInfo.getFullYear();
    var month = dateInfo.getMonth()+1; //monthIndex를 반환해주기 때문에 1을 더해준다.
    var date = dateInfo.getDate();
    document.getElementById("time").innerHTML = hour + ":" + min  + ":" + sec;
    document.getElementById("date").innerHTML = year + "년 " + month + "월 " + date + "일";
}

function CountDown(){
    var nowDate = new Date(); 
    var gap = snapDate.getTime() - nowDate.getTime();
    if (gap < 0){
        gap = gap * (-1);
        document.getElementById('dtime').style.color='black';
    }
    var hour = Math.floor((gap % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000));
    var min = Math.floor((gap % (60 * 60 * 1000)) / (60 * 1000));
    var sec = Math.floor((gap % (60 * 1000)) / 1000);
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth()+1; //monthIndex를 반환해주기 때문에 1을 더해준다.
    var date = nowDate.getDate();
    hour = modifyNumber(hour);
    min = modifyNumber((min));
    sec = modifyNumber((sec))
    document.getElementById("dtime").innerHTML = hour + ":" + min  + ":" + sec;
    document.getElementById("ddate").innerHTML = year + "year " + month + "월 " + date + "일";
}
function modifyNumber(time){
    if(parseInt(time)<10){
        return "0"+ time;
    }
    else
        return time;
}
window.onload = function(){
    setClock();
    targethour = 0;
    targetmin = 1;
    targetsec = 0;
    snapDate = new Date();
    snapDate.setHours(snapDate.getHours() + targethour);
    snapDate.setMinutes(snapDate.getMinutes() + targetmin);
    
    CountDown();
    setInterval(setClock,1000); //1초마다 setClock 함수 실행
    setInterval(CountDown, 1000)
}