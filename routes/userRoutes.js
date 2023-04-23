import UserController from "../controller/userController.js";


export const userRoutes = (app) =>{
    app.post('/user/register', UserController.register);
    app.post('/user/login', UserController.login);
}