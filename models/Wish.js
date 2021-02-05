import mongoose from 'mongoose'

const WishSchema = new mongoose.Schema({
    wishItem: {
        type:String,
        required: [true, 'WishItem is required'],
    },
    wishType: {
        type:String,
        required: [true, 'WishType is required'],
    },
    timestamp:{
        type:  Date,
        required: [true, 'Date is required'],
    },
    stars:{
        type: Number,
        required: [true, 'Stars is required'],
    }
})

module.exports = mongoose.models.Wish || mongoose.model('Wish', WishSchema)