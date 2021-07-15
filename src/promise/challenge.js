//importar el fechDatajs
const fechtData = require('../utils/fetchData');
let API = 'https://rickandmortyapi.com/api/character/';

//la  buena forma llamar promesas en una funcion
fechtData(API)
.then(data=>{
    console.log(data.info.count);
    return fechtData(`${API}${data.results[0].id}`)
})
.then(data=>{
    console.log(data.name);
    return fechtData(data.origin.url)
})
.then(data=>{
    console.log(data.dimension)
})
.catch(err=>console.error(err));