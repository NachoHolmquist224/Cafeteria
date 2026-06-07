import express from "express"

const app = express()
const PORT = 3000

console.log("hola mundo")
console.log("El back ya vive rey")

app.listen(PORT, ()=>{console.info(`escuchando en el puerto ${PORT}`)})

