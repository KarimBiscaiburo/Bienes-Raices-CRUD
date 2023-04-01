import express from "express";
import cors from "cors";
import dataRoutes from "./routes/dataRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(dataRoutes);

app.listen(4000);
console.log(`Server is listening on port 4000`);