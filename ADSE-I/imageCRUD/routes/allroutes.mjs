import express from 'express'
import { AddProduct, ViewProduct } from '../controller/mycontroller.mjs';

const routes = express.Router();

routes.post('/product', AddProduct)
routes.get('/product', ViewProduct)

export default routes;