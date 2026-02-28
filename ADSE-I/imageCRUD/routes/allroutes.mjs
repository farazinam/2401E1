import express from 'express'
import { AddProduct, ViewProduct } from '../controller/mycontroller.mjs';

import { database } from '../connection/connection.mjs';
import { parser } from '../CloudinaryConfig.mjs';

const routes = express.Router();

routes.post('/product', parser.single('image'), AddProduct);

routes.get('/product', ViewProduct)


export default routes;