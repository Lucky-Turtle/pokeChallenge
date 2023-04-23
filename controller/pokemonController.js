import DataManagerStatic from "../data/dataManagerStatic.js";
import Pokemon from "../models/pokemonModel.js";


class PokemonController {
  

    findAll(req, res) {
        try {
            let result = DataManagerStatic.pokeList;
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    findById(req, res) {
        try {
            let result = DataManagerStatic.pokeList.find(x => x.id === req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    findByName(req, res) {
        try {
            let result = DataManagerStatic.pokeList.find(x => x.nom === req.params.name);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    findByType(req, res) {
        try {
            let result = DataManagerStatic.pokeList.filter(x => x.type === req.params.type);
            res.json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    update(req, res) {
        try {
            let index = DataManagerStatic.pokeList.findIndex(x => x.id === req.params.id);
            DataManagerStatic.pokeList[index].nom = req.body.nom;
            DataManagerStatic.pokeList[index].type = req.body.type;
            DataManagerStatic.pokeList[index].imgSrc = req.body.imgSrc;
            DataManagerStatic.writeFile();
            res.json(DataManagerStatic.pokeList[index]);
        } catch (error) {
            res.status(500).json(error);
        }
     }
    delete(req, res) {
        try {
            DataManagerStatic.pokeList = DataManagerStatic.pokeList.filter(x => x.id != req.params.id);
            DataManagerStatic.writeFile();

            res.json(`Pokemon supprimé ! ${req.params.id}`);
        } catch (error) {
            res.status(500).json(error);
        }
    }
     
    create(req, res) { 
        try {
           let id = DataManagerStatic.uuidv4();
           let pokemon = new Pokemon(id, req.body.nom, req.body.type, req.body.imgSrc);
           DataManagerStatic.pokeList.push(pokemon);
           DataManagerStatic.writeFile();
           res.json(pokemon);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default new PokemonController();