import express from 'express';
import { creat, deleteuser, getAll, getOne,update } from '../controller/userController.js';
const route = express.Router();

route.post('/create',creat);
route.get('/users', getAll);
route.get('/getone/:id',getOne);
route.put('/update/:id',update);
route.delete('/delete/:id',deleteuser)
export default route;