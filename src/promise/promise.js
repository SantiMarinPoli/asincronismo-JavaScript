const somethingWillHappen = ()=>{
    //inicializa la nueva promesa
    //resolve --> promesa aceptada
    //reject --> promesa rechazada
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('Hey!!');
        }else{
            reject('Upss!!');
        }
    });
};

//somethingWillHappen()
//.then(resp => console.log(resp))
//.catch(err => console.error(err));


const somethingWillHappen2 = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            setTimeout(() =>{
                resolve('HEY!!');
            },3000);
        }else{
            const error = new Error('Upps!!');
            console.error(error);
        }
    });
}

//somethingWillHappen2()
//.then(resp=>console.log(resp))
//.catch(err=>console.error(err));


//Forma llamar mas promesas en una instruccion 

Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(resp => console.log("Array of result: ",resp))
.catch(err=>console.error(err))