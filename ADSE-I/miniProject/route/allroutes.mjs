import react from 'react'
import express from 'express'
import { SignIn, SignUp } from '../controller/allcontroller.mjs'

const routes = express.Router();

routes.post('/signup', SignUp)
routes.post('/signin', SignIn)

export default routes;