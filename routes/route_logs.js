const express = require("express")
const router_logs = express.Router()
const { salvarDados, lerDados } = require("../script.js")

router_logs.post("/logs", salvarDados)
router_logs.get("/logs/:id", lerDados)

module.exports = router_logs