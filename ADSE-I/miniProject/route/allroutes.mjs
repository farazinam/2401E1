import react from 'react'
import express from 'express'
import SignUp from '../frontend/src/Pages/SignUp';

const routes = express.Router();

routes.post('/signup', SignUp)

export default routes;