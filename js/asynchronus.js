function register(cb){
    setTimeout(()=>{
        console.log("register");
        cb();
    },5000)
    
   
}
function sendmail(cb){
    setTimeout(()=>{
        console.log("sendmail ");
        cb();
    },5000)
}
function login(cb){
    setTimeout(()=>{
        console.log("login ");
        cb();
    },5000)
}
function getuserdata(cb){
    setTimeout(()=>{
        console.log("got user data");
        cb();
    },5000)
    
}
function displayuserdata(cb){
     setTimeout(()=>{
        console.log("display user data");
        cb();
    },5000)
}
register(function(){
    sendmail(function(){
        login(function(){
            getuserdata(function(){
                displayuserdata();
            });
        });
    });
});
