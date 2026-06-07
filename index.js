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

app.get("/api/promo", (req, res) => {
  res.json({
    mensaje:
      "❗💙🤍HOY PROMO MUNDIALISTA💙🤍❗ ¡Cafe grande ☕ + tostado mixto a tan solo $6000❗❗",
  });
});

app.get("/api/horarios", (req, res) => {
  res.json({
    mensaje:
      "HORARIOS => Lunes a viernes: 10hs a 22hs - Sabado: 10hs a 20hs - Domingo: CERRADO",
  });
});

console.log("hola mundo");
console.log("El backend ya escucha");

app.listen(PORT, () => {
  console.info(`escuchando en el puerto ${PORT}`);
});
