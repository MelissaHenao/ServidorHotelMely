import { ServicioReserva } from "../servicios/servicioReserva.js";

export class ControladorReserva {

    constructor(){}

    async consultarRespuesta(Request,response){
        let servicioReserva = new servicioReserva

        try{
            response.status(200).json({
                mensaje:"Exito consultando reserva",
                datos: await servicioReserva.consultarReserva()
            })
        } catch (error){
            response.status(400).json({
                mensaje:"Fallo consultando reserva" + error,
                datos:null
            })
        }
    }

    async consultarReservaPorId(request,response){
        let identidad = request.params.id

        let servicioReserva = new ServicioReserva

        try{
            response.status(200).json({
                mensaje:"Exito en la reserva" + identidad,
                datos: await servicioReserva.consultarReservaPorId()
            })
        }catch(error){

            response.status(400).json({
                mensaje:"fallo en la consulta" + error,
                datos:null
            })
        }
    }

    async agregarReserva(request,response){
        let cuerp= request.body

        let servicioReserva = new ServicioReserva

        try{
            await servicioReserva.agregarReserva(cuerp)
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

    async editarReserva(request,response){
        let ownerId = request.params.id
        let datosC = request.body
        let servicioReserva = new ServicioReserva

        try{
            await servicioReserva.editarReserva(ownerId,datosC)
            response.status(200).json({
                mensaje:""
            })
        }catch(error){
            response.status(400).json({})
        }
    }

    async eliminarReserva(request,response){
        try{
            response.status(200).json({})
        } catch(error){

            response.status(400).json({})
        }
    }
}