const mongoose = require("mongoose")

const { Schema } = mongoose;

const serviceSchema = require("./Service")

const partySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    // AQUI ESTÁ O ERRO!
    services: {
        type: [serviceSchema.schema],
    },
}, { timestamps: true })

const Party = mongoose.model("Party", partySchema)

module.exports = Party;