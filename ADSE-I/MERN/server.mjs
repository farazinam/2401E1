import allroutes from './routes/allroutes.mjs'
import { resolve } from 'dns'
import express, { urlencoded } from 'express'
const app = express()
const port = 3000
import { run } from './connection/connection.mjs'
import cors from 'cors'


import path from 'path'
const dirname = path.resolve();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello To MERN!')
})


app.use(allroutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
