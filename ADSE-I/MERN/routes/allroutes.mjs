import express from 'express';
import { create, read, deletePro } from "../controller/mycontroller.mjs"

const allroutes = express.Router();

allroutes.post('/create', create)
allroutes.get('/read', read)
allroutes.delete('/delete/:id', deletePro)

export default allroutes







// app.get('/download', (req, res) => {
//   res.download('abc.txt')
// })

// app.get('/notfound', (req, res) => {
//   res.status(404).send('Page Not Found')
// })

// app.get('/jsondata', (req, res) => {
//   res.json({"name": "Ali", "age": 22})
// })

// app.get('/navigateto', (req, res) => {
//   res.redirect("https://www.github.com/farazinam")
// })

// app.get('/sendfile', (req, res) => {
//   res.sendFile(path.join(dirname, "abc.txt"))
// })

// app.get('/category/:id', (req, res) => {
//     const pid = req.params.id;
//   res.send(`Category ID is: ${pid}`)
// })

// app.get('/greet', (req, res) => {
//     const {name} = req.query;
//   res.send(`Your Name is: ${name}`)
// })

// app.get('/credentials', (req, res) => {
//     const {email, password} = req.body;
//   res.send(`Email is: ${email}`)
// })

// app.use('/html', express.static(dirname, {index: "index.html"}))


// ---------------
