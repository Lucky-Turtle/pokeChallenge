import PokemonController from "../controller/pokemonController.js";
import { verifyToken } from "../config/auth.config.js";

export const pokemonRoutes = (app) => {
    app.get('/pokemon/all',verifyToken, PokemonController.findAll);
    app.get('/pokemon/findById/:id', PokemonController.findById);
    app.get('/pokemon/findByName/:name', PokemonController.findByName);
    app.get('/pokemon/findByType/:type', PokemonController.findByType);
    app.put('/pokemon/update/:id',verifyToken, PokemonController.update);
    app.delete('/pokemon/delete/:id',verifyToken, PokemonController.delete);
    app.post('/pokemon/create',verifyToken, PokemonController.create);
}