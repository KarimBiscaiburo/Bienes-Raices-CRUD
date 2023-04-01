import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import { getDatas, getDatasLimit, getData, createData, updateData, deleteData, getVendedores, createVendedor, getUser } from "../controllers/dataControllers.js";

// import { createUser } from "../controllers/dataControllers.js";

const router = Router();

//Configurando multer para enviar las img a una carpeta
const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join( __dirname, "../../client/src/img" ));
    },

    filename: (req, file, cb) => {
        const posicion = file.mimetype.indexOf("/");
        const extension = file.mimetype.slice(posicion + 1);
        cb(null, `${req.body.titulo}-${Date.now()}.${extension}`);
    }
});


const enviarImagen = multer({ storage: diskStorage });

//Rutas
router.get("/data", getDatas);

router.get("/data-limit", getDatasLimit);

router.get("/vendedores", getVendedores);

router.get("/data/:id", getData);

router.post("/data", enviarImagen.single("imagen"), createData);

router.post("/vendedores", createVendedor);

router.put("/data/:id", enviarImagen.single("imagen"), updateData);

router.delete("/data/:id", deleteData);

router.get("/user", getUser);

export default router;