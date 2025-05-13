const express = require("express")
const router_logs = express.Router()
const { salvarDados } = require("../script.js")

router_logs.post("/logs", salvarDados)

module.exports = router_logs