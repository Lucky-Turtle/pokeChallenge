import User from "../models/userModel.js";
import DataManagerStatic from "../data/dataManagerStatic.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';

class UserController {
    async register (req, res){
        try {
            let id = DataManagerStatic.uuidv4();
            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(req.body.password, salt);
            let user = new User(id, req.body.nom, req.body.email, password);
            DataManagerStatic.userList.push(user);
            DataManagerStatic.writeFile();
            user.password = '';
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    
    }

    login (req, res){
        try {
            let user = DataManagerStatic.userList.find(x => x.email === req.body.email);
            if(user && bcrypt.compareSync(req.body.password, user.password)){
                const token = jwt.sign({sub:user.id}, 'Ceci est un secret', {expiresIn:'7d'});
                res.json({
                    id:user.id,
                    email:user.email,
                    token:token
                });
            } else {
                res.status(400).json('Mot de passe ou email incorrect')
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }


}

export default new UserController(); 