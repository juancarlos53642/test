import express from 'express';
const app = express();

app.get('/', (req,resp)=> {
    resp.send("Hola mundo")
})

app.get('/alumnos', (req,resp)=> {
    resp.json({nombre:"Juan",edad:26})
})

app.get('/grupo', (req,resp)=> {
    resp.json({nombre:"E306",capacidad:26})
})

app.get('/profesores', (req,resp)=> {
    resp.json({nombre:"Maricela CLaudia Bravo"})
})

app.listen(3000, ()=> console.log("Servidor corriendo en el puerto 3000"));
