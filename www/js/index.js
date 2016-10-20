var key = "pen";
var value = "blue";

window.localStorage.setItem(key,value);

var hello = window.localStorage.getItem(key);


function onLoad()
{


    
alert(hello);
    
    
}