function onLoad()
{
    
var key = “pen”;
var value = “blue”;
window.localStorage.setItem( key, value );

var hello = window.lacalstorage.getItem(key);
    
alert(hello);
    
    
}