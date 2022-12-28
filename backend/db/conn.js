const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect("mongodb+srv://lauromiottojr:nPvz0H3F60g8O3c7@cluster0.o3e5jbd.mongodb.net/?retryWrites=true&w=majority")
        console.log("Conectado ao banco!")
    } catch (error) {
        console.log("ERRO: " + error)
    }
}

module.exports = main

// nPvz0H3F60g8O3c7