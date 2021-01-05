function TimereStartSwitch(){
    var x = document.getElementById("checked").checked;
    console.log(x);
    if(x == true){
        document.getElementById("restart").style.display = "block";
    }
    else{
        document.getElementById("restart").style.display = "none";
    }

}

function JedgeInterval(){
    var x = parseInt(document.getElementById("interval").value);

    if( x >= 0 && x <= 9){}
    else{
        document.getElementById("jinterval").innerHTML = "0-9之间的数";
    }

}
function Interval(){
    document.getElementById("jinterval").innerHTML = null;

}
function JudgePeoplePhoto(){
    var index = document.getElementById("peoplephoto").selectedIndex;
    var x = document.getElementById("peoplephoto").options[index].value;
    if(x == "unselect"){
        document.getElementById("jselect").innerHTML = "必选";
    }
}
function PeoplePhoto(){
    document.getElementById("jselect").innerHTML = null;
}
function JudgeTime(){
    var v = document.getElementById("retime").value;
    var z = new RegExp("^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$");
    var x = z.test(v);
    console.log(x);
    if (x == false){
        document.getElementById("jtime").innerHTML = "时间格式为：时分，24小时制，如05:20";
    }
}
function Retime(){
    document.getElementById("jtime").innerHTML = null;
}
function JudgeAlarmInput(){
    var index = document.getElementById("alarminput").selectedIndex;
    var x = document.getElementById("alarminput").options[index].value;
    if(x == "unselect"){
        document.getElementById("jalarminput").innerHTML = "必填";
    }
}
function AlarmInput(){
    document.getElementById("jalarminput").innerHTML = null;
}
function JudgeStandby(){
    var x = parseInt(document.getElementById("standby").value);
    if(x >= 0 && x <= 30){}
    else{
        document.getElementById("jstandby").innerHTML = "0-30之间的数";
    }
}
function Standby(){
    document.getElementById("jstandby").innerHTML = null;
}