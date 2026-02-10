import allroutes from './routes/allroutes.mjs'
import { resolve } from 'dns'
import express, { urlencoded } from 'express'
const app = express()
const port = 3000


import path from 'path'
const dirname = path.resolve();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Hello To MERN!')
})


app.use(allroutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
