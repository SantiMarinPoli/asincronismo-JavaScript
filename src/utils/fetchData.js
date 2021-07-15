//importa la libreria xmlhttorequest
let xmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const  fectchData =(url_api)=>{

    return new Promise((resolve,reject)=>{

        const xhttp = new xmlHttpRequest();
        //el tipo de request es un get, atrae los datos del api
        //true activa el asincronismo
        xhttp.open('GET',url_api,true);
        xhttp.onreadystatechange = (() =>{
            // el valor 4 significa el request del servicio esta finalizado en los estados del HTTP
            if(xhttp.readyState === 4){
                
                //Estado 200 significa que accedio correctamente el programa
                //realizando un condicional alternaria
                (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))//realiza el llamado la funcion callback y trae la informacion con la estruptura JSON
                : reject(new Error(`Error ${url_api}`))//Se inicializa el nuevo error
            }
        });
        //Envio la solicitud
        xhttp.send();
    });
}

module.exports = fectchData;