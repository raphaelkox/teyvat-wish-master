import mongoose from 'mongoose'

const CharacterSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
    },
    stars:{
        type: Number,
        required: [true, 'Stars is required'],
    }
})

module.exports = mongoose.models.Character || mongoose.model('Character', CharacterSchema)