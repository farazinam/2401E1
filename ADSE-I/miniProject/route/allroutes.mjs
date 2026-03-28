import react from 'react'
import express from 'express'
import { SignUp } from '../controller/allcontroller.mjs'

const routes = express.Router();

routes.post('/signup', SignUp)

export default routes;