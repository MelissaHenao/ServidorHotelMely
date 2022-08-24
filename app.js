// variables de entorno:datos de mi servidor que no dependen de mi logica (ENV)


//llamamos a express ven estas dos lineas
//const express = require('express') vieja forma de importar

// import express from'express' //nueva forma para traer express 
// //guardamoa a express
// const app = express() (PERO SE LLEVA PARA EL ARCHIVO SERVIDOR.JS)

//ATENDIENDO PETICIONES
//los servicios son operaciones en BD, que son de 4 tipos: GET,POST,PUT,DELETE  (con nombres end point)
//recibe peticiones de tipo get(end point,funcion anonima(se ejecuta en el mismo momento))
// app.get('/', function (req, res) {
//     //aca responde y envia(recibe y procesa)
//   res.send('Hello World')
// })

//despertando el servidor 
// app.listen(3000,function(){
//     // colback:  siempre se va a ejecutar primero lo que hay antes de la coma y luego la funcion
//     console.log("servidor encendido")
// })


//cuando uso import y express se debe poner "type":"module"  en package.json

// IMPORTANTE
// EXPRESS LEVANTA EL SERVIDOR Y ATIENDE PETICIONES(RECIBIR PETICIONES Y ENVIAR RESPUESTA)


//para traer la clase del acrhivo servidor.js, utilizo import

//ESTE ARCHIVO (APP.JS) DESPIERTA EL SERVIDOR

//Importamos DOTENV PARA MANIPULAR LAL VARIABLE DE ENTORNO
import {Servidor} from './servidor/Servidor.js'
import 'dotenv/config' 

//para  utilizar una clase la debo instancias (o sea crear un objeto(Un objeto es una variable), osea sacarle COPIA)

let servidorComfama = new Servidor()

//enciendo servidor llamando el metodo de la carpeta servidor, del archivo servidor
servidorComfama.encenderServidor()


console.log(process.env.PORT)