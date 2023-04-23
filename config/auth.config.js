import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
    let token = req.header('token');
   
    if (!token){ 
        return res.status(401).json('Utilisateur non connecté');
    }
    try {
        const decoded = jwt.verify(token, 'Ceci est un secret');
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(500).send(`Token invalide ${error}`)
    }
}