//IMPORTAR A MONGOOSE
import mongoose from 'mongoose'


//el await siempre debe estar asociado a una funcion asincrona, por esto se coloca async al inicio de la funcion
 export async function conectar(){

    //como no depende de mi, yo voy a intentar conectarme, si no me da
    //te digo por que falle (ese es el TRY CATCH)
    try{
        //el await es como una promesa(con este pedaso de cofigo me estoy conectando a la base de datos)
        await mongoose.connect(process.env.DATABASE);
    }catch(error){

        console.log("upss " +error)
    }
}
