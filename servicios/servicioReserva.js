import {modeloReserva} from '../models/modeloDatosReserva.js'

 export class ServicioHabitacion{

    constructor(){}
//metodos de la clase por eso no se encierran en fuction 
    async buscarTodas(){
        //para almacenar todas las habitaciones que me van a llegar 
        let reservas=await modeloReserva.find()
        return habitaciones
    }

    async buscarPorId(ownerId){
        let reserva= await modeloReserva.findById(ownerId)
        return habitacion
    }

    async agregar(datosC){

        let reservaAGuardar = new modeloReserva(datosC)
        return await reservaAGuardar.save()
    }

    async actualizar(ownerId,datosC){
        return modeloReserva.findByIdAndUpdate()
    }

    async eliminar(ownerId){
        return modeloReserva.findByIdAndDelete()
    }
 }