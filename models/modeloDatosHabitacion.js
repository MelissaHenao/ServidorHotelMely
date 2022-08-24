//IMPORTAR A MONGOOSE
import mongoose from "mongoose";

//ESQUEMA=REGLA QUE VOY A PERMITIR QUE SE CREE EN MI DOCUMENTACION
const Schema = mongoose.Schema;


//esquema de datos mongoose
//clase que me permite crear regla de mis propios datos, que va a tener o no tener mi codigo
const Habitacion = new Schema({
    nombre:{
        type:String,
        required:true
    },
    valorNoche:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    imagenes:{
        type:String,
        required:false
    },
    numeroPersonas:{
        type:Number,
        required:true
    }
})

//crear modelo(estructur que encierra un esquema, adicionalmente permite crear consultas(solo tiene esquemas y consultas)) en base a el esquema

 export const modeloHabitacion = mongoose.model('habitacion',Habitacion)
