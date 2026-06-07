import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/productos", (req, res) => {
  const productos = ["Medialuna🥐", "Cafe cortado☕", "Flan🍮"];
  res.json({
    mensaje: "Conexion creada",
    productos: productos,
  });
});

console.log("hola mundo");
console.log("El backend ya escucha");

app.listen(PORT, () => {
  console.info(`escuchando en el puerto ${PORT}`);
});
