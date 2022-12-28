const router = require("express").Router()

const serviceRouter = require("./service")

router.use("/", serviceRouter)

const partyRouter = require("./party")

router.use("/", partyRouter)


module.exports = router;