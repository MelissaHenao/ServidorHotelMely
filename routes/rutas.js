
//en este archivo SE ENRUTAN O ATIENDEN LAS PETICIONES
import express from 'express' //nueva forma para traer express 
//importar el controlador de habitaciones (como es algo mio, lo coloco entre llaves)

import {ControladorHabitacion} from "../controllers/ControladorHabitacion.js" //para llamar la clase, debo instanciarla e instanciarla es crear un objeto
import {ControladorReserva} from "../controllers/ControladorReserva.js"

let controladorHabitacion=new ControladorHabitacion()
let controladorReserva = new ControladorReserva()
//si yo traigo a express puedo crear una variable para personalizar las rutas (end point) de mis servicios
//como se observa a continuacion 


export let rutas = express.Router() //archivo global
//Router m,e permite crear el archivo de rutas, me permite separar

//escribo mis rutas(cada ruta es un servicio)
//Rutas (endpoints ) para los servicios asociados a las habitaciones 



rutas.get('/viajescomfama/v1/habitaciones', controladorHabitacion.buscarHabitaciones)//Ruta para buscar una habitacion
rutas.get('/viajescomfama/v1/habitacion/:id',controladorHabitacion.buscarHabitacionPporId) //Ruta para buscar una habitacion por id
//le coloco dos puntos antes del id para indicarle que va a resivir un codiggo variable
rutas.post('/viajescomfama/v1/habitacion/',controladorHabitacion.agregarHabitacion) //Ruta para crear una habitacion
rutas.put('/viajescomfama/v1/habitacion/:id',controladorHabitacion.editarHabitacion) //Ruta para actualizaruna habitacion
 


//Rutas (endpoint) para los servicios asociados a las reservas
/*rutas.get('viajescomfama/v1/reserva,',function (req, res) { //este es un endpoint para buscar reserva
    
 res.send('Hello World')
})

rutas.get('viajescomfama/v1/reserva/:id',function (req, res) { //este es un endpoint para buscar reserva
    
  res.send('Hello World')
 })
 
rutas.post('viajescomfama/v1/reserva',function (req, res) {
    
  res.send('Hello World')
})
rutas.put('viajescomfama/v1/reserva/id',function (req, res) {
   
  res.send('Hello World')
})
rutas.delete('viajescomfama/v1/reserva/id',function (req, res) {
    
  res.send('Hello World')
})*/
rutas.get('/viajescomfama/reservas', controladorReserva.consultarRespuesta)
rutas.get('/viajescomfama/reserva/:id',controladorReserva.consultarReservaPorId)
rutas.post('/viajescomfama/reserva',controladorReserva.agregarReserva)
rutas.put('/viajescomfama/reserva/id',controladorReserva.editarReserva)
rutas.delete('/viajescomfama/reserva/id',controladorReserva.eliminarReserva)