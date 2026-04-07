import react from 'react'
import express from 'express'
import { SignIn, SignUp, ViewProduct } from '../controller/allcontroller.mjs'

const routes = express.Router();

routes.post('/signup', SignUp)
routes.post('/signin', SignIn)
routes.get('/product', ViewProduct)

export default routes;