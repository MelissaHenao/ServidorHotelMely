//llamamos a express ven estas dos lineas
//const express = require('express') vieja forma de importar

import express from'express' //nueva forma para traer express 

// llamamos las rutas
import {rutas} from '../routes/rutas.js'

//llamar al metodo conectar con BD - del archivo de conexcion
import {conectar} from '../dataBase/conexion.js'
//creo una clase llamada Servidor
// VOY A EXPORTAR LA CLASE PARA QUE SE PUEDA VER EN OTROS ARCHIVOS
 export class Servidor{
    //Dentro de una clase van atributos(Variables) y metodos(funciones) y se definen dentro del constructor


    constructor(){
        this.app = express() // definiendo un atributo(variable), pero como es un atributo, ya no se llama const app como se programo en app.js, si no this.app
        //clase conjunto de variables(atributos) y funciones(metodos) que estan desribiendo algo
        this.habilitarBody()
        this.atenderPeticiones() //atiendo las peticiones del usuario
     
    }

    atenderPeticiones(){ //estamos enrutando peticiones
        //los servicios son operaciones en BD, que son de 4 tipos: GET,POST,PUT,DELETE  (con nombres end point)
        //recibe peticiones de tipo get(end point,funcion anonima(se ejecuta en el mismo momento))
       // this.app.get('/' //function (req, res) {
            //aca responde y envia(recibe y procesa)
         // res.send('Hello World') COPIO Y PEGO LA FUNCION EN ROUTES
        //)
        //cambio el this.app.get por this.app.use=express
      
        this.app.use('/',rutas)// atributo una variable
     
    }

    habilitarBody(){
        this.app.use(express.json()) //habilitar(permitiendo) los datos que vengan en json sean leidos
    }

    encenderServidor(){
        //PROCESS.ENV.PORT ES PARA ACCEDER AL PUERTO DE LA VARIABLE DE ENTORNO DEL SISTEMA DONDE YO DESPLIEGO O EL DEL ARCHIVO .ENV
        
        this.app.listen(process.env.PORT,function(){
            // colback:  siempre se va a ejecutar primero lo que hay antes de la coma y luego la funcion
            console.log("servidor encendido "+ process.env.PORT)
        })
                
    }

    conectarConBd(){
        conectar()
    }
}

//  carpeta de routes me permite separar todos los servicios que yo voy a tener