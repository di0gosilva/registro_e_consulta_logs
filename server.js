const express = require("express")

const PORT = 3000

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Servidor rodando...")
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})