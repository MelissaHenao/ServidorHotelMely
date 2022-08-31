import {modeloReserva} from '../models/modeloDatosReserva.js'

 export class ServicioReserva{

    constructor(){}
//metodos de la clase por eso no se encierran en fuction 
    async consultarRespuesta(){
        //para almacenar todas las habitaciones que me van a llegar 
        let reservas=await modeloReserva.find()
        return reservas
    }

    async  consultarReservaPorId(ownerId){
        let reserva= await modeloReserva.findById(ownerId)
        return reserva
    }

    async agregarReserva(datosC){

        let reservaAGuardar = new modeloReserva(datosC)
        return await reservaAGuardar.save()
    }

    async editarReserva(id,datosC){
        return modeloReserva.findByIdAndUpdate(id,datosC)
    }

    async eliminarReserva(id){
        return modeloReserva.findByIdAndDelete(id)
    }
 }