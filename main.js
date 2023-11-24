import express from 'express';
const app = express();

app.get('/', (req,resp)=> {
    resp.send("Hola mundo")
})

app.listen(3000, ()=> console.log("Servidor corriendo en el puerto 3000"));
