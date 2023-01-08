const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'database.json'))
const middleWares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middleWares)
server.use(router)

const PORT = 8000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})