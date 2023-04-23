import express from 'express';
import cors from 'cors';
import {userRoutes} from "./routes/userRoutes.js";
import {pokemonRoutes} from "./routes/pokemonRoutes.js";
import DataManagerStatic from "./data/dataManagerStatic.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

DataManagerStatic.readFile();
pokemonRoutes(app);
userRoutes(app);