import mongoose from 'mongoose'

const connection = {}

const dbConnect = async () => {
    if(connection.isConnected) {
        return true
    }

    const db = await mongoose.connect(
        process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            user: process.env.MONGO_INITDB_ROOT_USER,
            pass: process.env.MONGO_INITDB_ROOT_PASSWORD
        }
    )

    connection.isConnected = db.connections[0].readyState

    console.log('DBCONNECT DEBUG!!!!! ' + connection.isConnected)

    return
}

export default dbConnect