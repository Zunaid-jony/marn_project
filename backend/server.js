const app = require("./app")
const dotenv = require("dotenv")

const connectDatabase = require("./config/database")
dotenv.config({path:"backend/config/config.env"})


const PORT = 4000

// conecting data base
connectDatabase()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})