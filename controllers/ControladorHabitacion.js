//en la carpeta de controladores se ejecuta la logica de negocio (el controlador recibe la peticion(que viene de rutas) y la responde)

import {ServicioHabitacion} from '../servicios/servicioHabitacion.js'
//En el archivo de controllers se configuran las respuestas 
//uso export para poder usar el controlador y poderlo llamar
 export class ControladorHabitacion {

    //dentro de mi clase voy hacer metodos, cada metodo estara asociado a cada uno de las rutas o peticiones que voy atender (get-post.etc)

    constructor(){}

    //buscar habitaciones
   async buscarHabitaciones(request,response){
        //llamo a un servicio, para llamar al servicio debo usar una clase

        let servicioHabitacion = new ServicioHabitacion
        // siempre un controlador va intentar dar solucion a la Peticion, pero es posible que no lo logre por eso hay que programar un catch
        try{
            
            response.status(200).json({
                mensaje:"Exito en la consulta",
                datos: await servicioHabitacion.buscarTodas()
            })

        } catch(error){
            //cuando se va por el catch  se fallo resolviendo la peticion

            response.status(400).json({
                mensaje:"Fallo en la consulta" + error,
                datos:null
            })
        }
    }
 

    //buscar habitacion por ID
    async buscarHabitacionPporId(request,response){
        ///recibi un parametro que se llama id que viene por la peticion y lo almacene en una variable que se llama identificador
        
    
        let identificador = request.params.id

        //llamo al servicio
        let servicioHabitacion = new ServicioHabitacion
       
        try{
            
            response.status(200).json({
                mensaje:"Exito en la consulta " + identificador,
                datos: await servicioHabitacion.buscarPorId(identificador)
            })

        } catch(error){
       

            response.status(400).json({
                mensaje:"Fallo en la consulta" + error,
                datos:null
            })
        }
    }
 
        
    


    //agregar habitacion
    async agregarHabitacion(request,response){
        
        let cuerpo=request.body

          //llamo al servicio
          let servicioHabitacion = new ServicioHabitacion
       
        try{
           await servicioHabitacion.agregar(cuerpo)
            response.status(200).json({
                mensaje:"Exito agregando la habitacion",
                datos: null
            })

        } catch(error){
       

            response.status(400).json({
                mensaje:"Fallo en la consulta" + error,
                datos:null
            })
        }
    }
 
    

//Lo primero que hace un controlador es esculcar la peticion
    //Editar habitacion
    async editarHabitacion(request,response){

        //recibir el id como parametro
        let id=request.params.id

        //recibir los datos que voy a editar(body)
        let datos= request.body

         //llamo al servicio
         let servicioHabitacion = new ServicioHabitacion
       
        
        //El controlador responde, le responde al cliente
        try{
           await servicioHabitacion.actualizar(id,datos)
            response.status(200).json({
                mensaje:"Exito editando habitacion" +id,
                datos:null
            })

        } catch(error){
            

            response.status(400).json({
                mensaje:"Fallo en la consulta" + error,
                datos:null
            })
        }
    }
 
    


    //eliminar habitacion
    async elimarHabitacion(request,response){
        try{
            
            response.status(200).json({})

        } catch(error){
            
            response.status(400).json({})
        }
    }
 
}