/*function hello (){
console.log("hello");
}
function callme(Callback:()=>void){
    Callback();
}
callme(hello)
let name1 : any = "ali";
name1 = 10 
name1 = true
console.log(name1)
let name2 : unknown = "noor";
name2.toUppercase()
name2.toLowercase()
if(typeof(name2)=="string"){
    let result = name2.toLowerCase
}
console.log((name2 as string).toLowerCase());*/

console.log("Hello World!")  //synchronous programing
let a = 10           //asynchronous programing
let b = 20
setTimeout(
    function(){
        console.log(a);
        console.log(b);
    }, 5000
) 
a = 50
b = 60









