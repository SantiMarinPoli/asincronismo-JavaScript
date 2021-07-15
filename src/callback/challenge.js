//importa la libreria xmlhttorequest
let xmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fectchData(url_api,callback){
    let xhttp = new xmlHttpRequest();
    //el tipo de request es un get, atrae los datos del api
    //true activa el asincronismo
    xhttp.open('GET',url_api,true);
    xhttp.onreadystatechange = function (event){
        // el valor 4 significa el request del servicio esta finalizado en los estados del HTTP
        if(xhttp.readyState === 4){
            //Estado 200 significa que accedio correctamente el programa
            if(xhttp.status === 200){
                //realiza el llamado la funcion callback y trae la informacion con la estruptura JSON
                callback(null,JSON.parse(xhttp.responseText));
            }else{
                //Se inicializa el nuevo error
                const error = new Error('Error '+ url_api);
                return callback(error,null);
            }
        }
    }
    //Envio la solicitud
    xhttp.send();
}

//Encadenar Callbacks o Callbacks hell
//Callbacks hells, es una mala practiva cuando llamamos bastantes peticiones al servidor, la mejor forma es analizar y impplementar cual es la
//forma efectiva para no aumentar la linea de codigo
//=======================================================================================================
//accede la primera capa de la estruptura JSON
fectchData(API,function(errro1,data1){
    if(errro1) return console.error(error1);
    //Accede la segunda capa del JSON y asi sucesivamente el llamado de los callbacks
        fectchData(API + data1.results[0].id,function (error2,data2){
        if(error2) console.error(error2);
        fectchData(data2.origin.url, function (error3,data3){
            if(error3) console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.name);
        })
    })
})