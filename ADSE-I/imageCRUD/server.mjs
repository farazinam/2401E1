import express from 'express'
import routes from './routes/allroutes.mjs'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Ramadan! Day 8TH')
})

app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
