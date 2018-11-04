
function add(){
var addValue = parseInt(document.getElementById("add-op1").value) + parseInt(document.getElementById("add-op2").value);
document.getElementById("add-result").value =addValue;
}

var btnAdd = document.getElementById('add');
btnAdd.onclick= add;

function sub(){
var subValue = parseInt(document.getElementById("sub-op1").value) - parseInt(document.getElementById("sub-op2").value);
document.getElementById("sub-result").value =subValue;
}

var btnSub = document.getElementById('sub');
btnSub.onclick= sub;

function mul(){
var mulValue = parseInt(document.getElementById("mul-op1").value) * parseInt(document.getElementById("mul-op2").value);
document.getElementById("mul-result").value =mulValue;
}

var btnMul = document.getElementById('mul');
btnMul.onclick= mul;

function div(){
var divValue = parseInt(document.getElementById("div-op1").value) / parseInt(document.getElementById("div-op2").value);
document.getElementById("div-result").value =divValue;
}

var btnDiv = document.getElementById('div');
btnDiv.onclick= div;