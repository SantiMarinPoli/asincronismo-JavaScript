//Se crea la funcion de promesas
const doSomethingAsync = () =>{
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(() => resolve('Do something Async'),3000) 
        : reject(new Error('Test Error'))
    });
}

//esta variable local se utiliza el await 
const doSomething = async() =>{
    const something = await doSomethingAsync();
    console.log(something);
}

console.log(`Before 1`);
//esperar cuando se ejecuta o no se ejecuta la promesa con el async
doSomething();
console.log(`After 1`);

const doAnotherFunction = async () =>{
    try{
        const something = await doSomethingAsync();
        console.log(something)
    }catch(error){
        console.error(error)
    }
}

console.log(`Before 2`);
//esperar cuando se ejecuta o no se ejecuta la promesa con el async
doAnotherFunction();
console.log(`After 2`);