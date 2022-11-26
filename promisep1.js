
const value = 2;

const promise = new Promise((resolve,reject)=>{
    const random = Math.floor(Math.random()*3);
    console.log(random);
    if(random ===value){
        resolve('Bothe the values are same');
    }else{

    
    reject('Bothe the  values are not same');
    }


});
console.log(promise);
promise.then((data)=>console.log(data)).catch((err)=>console.log(err));