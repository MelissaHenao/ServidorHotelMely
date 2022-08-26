import { ServicioReserva } from "../servicios/servicioHabitacion";

export class controladorReserva {

    constructor(){}

    consultarRespuesta(Request,response){
        let servicioReserva = new servicioReserva

        try{
            response.status(200).json({
                mensaje:"Exito consultando reserva",
                datos:servicioReserva.consultarReserva()
            })
        } catch (error){
            response.status(400).json({
                mensaje:"Fallo consultando reserva" + error,
                datos:null
            })
        }
    }

    consultarReservaPorId(request,response){
        let identidad = request.params.id

        let ServicioReserva = new ServicioReserva

        try{
            response.status(200).json({
                mensaje:"Exito en la reserva" + identidad,
                datos:servicioReserva.buscarPorId()
            })
        }catch(error){

            response.status(400).json({
                mensaje:"fallo en la consulta" + error,
                datos:null
            })
        }
    }

    agregarReserva(request,response){
        let cuerp= request.body

        let servicioReserva = new ServicioReserva

        try{
            servicioReserva.agregar(cuerp)
            response.status(200).json({
                mensaje:"exito agregando reserva",
                datos:null
            })
        }catch(error){
            response.status(400).json({
                mensaje: "Fallo agregando reserva" + error,
                datos:null
            })
        }
    }

    editarReserva(request,response){
        let ownerId = request.params.id
        let datosC = request.body
        let servicioReserva = new ServicioReserva

        try{
            servicioReserva.actualizar(ownerId,datosC)
            response.status(200).json({
                mensaje:""
            })
        }catch(error){
            response.status(400).json({})
        }
    }

    eliminarReserva(request,response){
        try{
            response.status(200).json({})
        } catch(error){

            response.status(400).json({})
        }
    }
}