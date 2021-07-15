const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const AnotherFunction = async (url_api) =>{
    try{
        //Capturando los datos con el api 
        //utlizando con la funcion await
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        //Mostar los datos con el api de RICKY AND MORTY
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    }catch(error){
        console.error(error)
    }

}

console.log('Before');
//La funcion del ascyn se espera cuando termine la promesa
AnotherFunction(API);
console.log('After');