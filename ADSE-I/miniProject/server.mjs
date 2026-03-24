import express from 'express'
import routes from './route/allroutes.mjs'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
