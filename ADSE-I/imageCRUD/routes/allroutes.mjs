import express from 'express'
import { AddProduct, ViewProduct, DeleteProduct, viewProductById, updateProduct } from '../controller/mycontroller.mjs';

import { database } from '../connection/connection.mjs';
import { parser } from '../CloudinaryConfig.mjs';

const routes = express.Router();

routes.post('/product', parser.single('pi'), AddProduct);

routes.get('/product', ViewProduct)
routes.delete('/product/:id', DeleteProduct)
routes.get('/product/:id', viewProductById)
routes.put('/product/:id', parser.single('pi'), updateProduct)

export default routes;