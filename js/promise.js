const mypromise=new Promise(
    (resolve,reject)=>{
        console.log("execute promise");
        // resolve();
        reject("netwrok error");
    }
);

mypromise.then(()=>{
    console.log("All set");
}).catch((err)=>{
    console.log("Error is",err);
}).finally(()=>{
    console.log("executed final block");
});