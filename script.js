var myNodeleList = document.getElementsByTagName("LI");

var i;

for(i = 0; i <myNodeleList.length; i++) {
    var span = document.createElement("Span")
    var txt = document.createrTextNode("\u00D7");
    span.className = "Close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}
//click on a close button to hide the current list
var close = document.getElementsByClassName("close");
var i;

for(i=0; i<close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var list = document.querySelector('ul');
list.addEventListener('click',function(ev) {
    if(ev.target.tagname == 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false)

function newElement() {
    var li = document.createElement("li");
    var inputvalue = document.getElementById("item").ariaValueMax;
    var t = document.createTextNode(inputvalue)
    li.appendChild(t);
    if(inputvalue === '') {
        alert("this field can not ve empty")
    } else {
        document.getElementById("list").appendChild(11);
    }
    document.getElementById("item").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode('\u00D7');
    span.ClassName = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[1].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
