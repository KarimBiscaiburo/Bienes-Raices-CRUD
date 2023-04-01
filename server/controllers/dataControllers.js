import { pool } from "../db.js";
import { unlink } from 'fs';
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );

export const getDatas = async (req, res) => {
    try {
        const [result] = await pool.query( "SELECT * FROM propiedades" );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getDatasLimit = async (req, res) => {
    try {
        const [result] = await pool.query( "SELECT * FROM propiedades LIMIT 3");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getVendedores = async (req, res) => {
    try {
        const [result] = await pool.query( "SELECT * FROM vendedores" );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getData = async (req, res) => {
    try {
        const [result] = await pool.query( "SELECT * FROM propiedades WHERE id = ?", [req.params.id] );

        if (result.length === 0)
        return res.status(404).json({ message: "Task not found" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createData = async (req, res) => {
    const imagen = req.file.filename;

    try {
        const { titulo, precio, descripcion, habitaciones, wc, estacionamientos, creado, vendedores_id } = req.body;
        const [result] = await pool.query("INSERT INTO propiedades SET ?", { titulo, precio, imagen, descripcion, habitaciones, wc, estacionamientos, creado, vendedores_id }); 

        res.json({
            id: result.insertId,
            titulo,
            precio,
            imagen,
            descripcion,
            habitaciones,
            wc,
            estacionamientos,
            creado,
            vendedores_id
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createVendedor = async (req, res) => {
    try {
        const { nombre, apellido, telefono } = req.body;
        const [result] = await pool.query("INSERT INTO vendedores SET ?", { nombre, apellido, telefono }); 

        res.json({
            id: result.insertId,
            nombre,
            apellido,
            telefono
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateData = async (req, res) => {
    let imagen;

    if(req.file) {
        imagen =  req.file.filename;
        eliminarImagen(req.body.refImg);
    } else {
        imagen = req.body.imagen;
    }  

    try {
        const { titulo, precio, descripcion, habitaciones, wc, estacionamientos, creado, vendedores_id } = req.body;
        const [result] = await pool.query("UPDATE propiedades SET ? WHERE id = ?",  [{ titulo, precio, imagen, descripcion, habitaciones, wc, estacionamientos, creado, vendedores_id }, req.params.id] );
        res.json(result);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    } 
}

export const deleteData = async (req, res) => {

    try {
        const [result] = await pool.query("DELETE FROM propiedades WHERE id = ?", [req.params.id]);
        eliminarImagen(req.body.imagen);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Propiedad no encontrada" });

        //Esto es para indicar que todo salio bien pero no hay contenido (al eliminar una tarea no necesitamos recibir nada)
        return res.sendStatus(204);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getUser = async (req, res) => {
    
    try {
        const [result] = await pool.query( "SELECT * FROM usuario");
        res.json(result);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

function eliminarImagen(urlImagen) {
    const FILE_IMAGES = path.join(__dirname, `../../client/src/img/${urlImagen}`)

        unlink( FILE_IMAGES, (error => {
            if(error) throw error
        }));
}