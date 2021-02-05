import mongoose from 'mongoose'

const WeaponSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
    },
    type:{
        type: String,
        required: [true, 'Type is required'],
    },
    stars:{
        type: Number,
        required: [true, 'Stars is required'],
    }
})

module.exports = mongoose.models.Weapon || mongoose.model('Weapon', WeaponSchema)