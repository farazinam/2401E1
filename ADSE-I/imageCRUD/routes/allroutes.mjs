import express from 'express'
import { AddProduct, ViewProduct, DeleteProduct } from '../controller/mycontroller.mjs';

import { database } from '../connection/connection.mjs';
import { parser } from '../CloudinaryConfig.mjs';

const routes = express.Router();

routes.post('/product', parser.single('pi'), AddProduct);

routes.get('/product', ViewProduct)
routes.delete('/product/:id', DeleteProduct)


export default routes;