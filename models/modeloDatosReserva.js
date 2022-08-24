//IMPORTAR A MONGOOSE
import mongoose from "mongoose";

//ESQUEMA=REGLA QUE VOY A PERMITIR QUE SE CREE EN MI DOCUMENTACION
const Schema = mongoose.Schema;


//esquema de datos mongoose
//clase que me permite crear regla de mis propios datos, que va a tener o no tener mi codigo
const Reserva = new Schema({
    idHabitacion:{
        type:String,
        required:true

    },
    checkIn:{
        type:Date,
        required:true
    },
    
    checkOut:{
        type:Date,
        required:true
    },
    numeroNiños:{
        type:Number,
        required:false
    },
    numeroAdultos:{
        type:Number,
        required:true
    },
    valorReserva:{
        type:Number,
        requerid:true

    }
})

//crear modelo(estructur que encierra un esquema, adicionalmente permite crear consultas(solo tiene esquemas y consultas)) en base a el esquema

const modeloReserva = mongoose.model('reserva',Reserva)
