function register(){
    waitforfiveseconds()
    console.log("register end");
}
function sendmail(){
    waitforfiveseconds()
    console.log("send mail end");
}
function login(){
    waitforfiveseconds()
    console.log("login end");
}
function getuserdata(){
    console.log("got user data");
}
function displayuserdata(){
    console.log("display user data");
}
function waitforfiveseconds(){
    const ms=5000+new Date().getTime();
    while(ms>new Date()){}
}
register();
sendmail();
login();
getuserdata();
displayuserdata();