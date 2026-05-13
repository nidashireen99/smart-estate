const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB =
  require("./config/db")

const authRoutes =
  require("./routes/authRoutes")

const propertyRoutes =
  require("./routes/propertyRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

// ROUTES

app.use(
  "/api/auth",
  authRoutes
)

app.use(
  "/api/properties",
  propertyRoutes
)

app.get("/", (req, res) => {
  res.send("Smart Estate API Running")
})

const PORT =
  process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  )
})