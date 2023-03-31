//Declaraciones
const servidorHTTP = require('express');
const app = servidorHTTP();
const port = process.env.PORT || 3000;

//Configuraciones - Respuestas para el cliente (Navegadores)
//app.get == Solicitamos un recurso del servidor
app.get("/",(req,res)=>{
    res.send("Pagina principal. Servidor en Node.js con express")
})//htdocs
app.get('*',(req,res)=>{
    res.send("404 | Pagina no encontrada");
})
/*app.post == Creamos un recurso en el servidor
app.delete == Eliminamos un recurso en el servidor 
app.put == Actualizamos un recurso en el servidor */

//Procesos - Respuestas para el desarrollador
app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto',port);
})