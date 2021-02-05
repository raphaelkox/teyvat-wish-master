import mongoose from `mongoose`

const UserSchema = new mongoose.Schema({
    favorite:{
        type: String,
        required: [true, 'Favorite is required'],
    },
    fourstar:{
        type:  Number,
        required: [true, 'FourStar is required'],
        default: 0
    },
    fivestar:{
        type:  Number,
        required: [true, 'FiveStar is required'],
        default: 0
    },
    characters:{
        type: Array,
        required: [true, 'Characters is required'],
        default: []
    }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)