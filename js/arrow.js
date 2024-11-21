function hello(){
    console.log("hello");
}
hello();
// implementation of arrow function without parameter 
const hello1=()=>console.log(hello1);
function add(a,b){
    return (a+b);
}
const sum=add(34,54);
console.log("Sum=",sum);

const add1=(a,b)=>(a+b);
const sum1=add1(134,254);
console.log("Arrow function Sum=",sum1);