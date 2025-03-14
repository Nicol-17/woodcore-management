import express from "express";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js"; 
import tareasRoutes from "./routes/tareasRoutes.js";
import proyectosRoutes from "./routes/proyectosRoutes.js";
import { PORT } from './model/config.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/index.html"));
});

app.get("/dashboard", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/dashboard.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/inicio_sesion.html"));
});

app.get("/sig-up", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/registro.html"));
});

app.get("/recuperar", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/recuperar.html"));
});

app.use("/dashboard/tasks", tareasRoutes);
app.use("/dashboard/projects", proyectosRoutes);
app.use("/users", usersRoutes); 

app.listen(PORT, function () {
    console.log("servidor creado correctamente:", PORT);
});