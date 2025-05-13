const express = require("express")
const PORT = 3000
const app = express()
const router_logs = require("./routes/route_logs")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Servidor rodando...")
})

app.use("/api", router_logs)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})