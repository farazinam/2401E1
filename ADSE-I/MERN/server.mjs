import { resolve } from 'dns'
import express from 'express'
const app = express()
const port = 3000

import path from 'path'
const dirname = path.resolve();

app.get('/', (req, res) => {
  res.send('Hello To MERN!')
})

app.get('/download', (req, res) => {
  res.download('abc.txt')
})

app.get('/notfound', (req, res) => {
  res.status(404).send('Page Not Found')
})

app.get('/jsondata', (req, res) => {
  res.json({"name": "Ali", "age": 22})
})

app.get('/navigateto', (req, res) => {
  res.redirect("https://www.github.com/farazinam")
})

app.get('/sendfile', (req, res) => {
  res.sendFile(path.join(dirname, "abc.txt"))
})

app.get('/category/:id', (req, res) => {
    const pid = req.params.id;
  res.send(`Category ID is: ${pid}`)
})



app.use('/html', express.static(dirname, {index: "index.html"}))





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
