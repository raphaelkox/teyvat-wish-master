import dbConnect from '../../../utils/dbConnect'
import Character from '../../../models/Character'

dbConnect()

export default async (req, res) => {
    const { method } = req

    switch(method){
        case 'GET':
            try{
                const characters = await Character.find({})

                res.status(200).json({ success: true, data: characters})
            } 
            catch(error) {
                res.status(400).json({success: false})
            }
            break
        case 'POST':
            try {
                const character = await Character.create(req.body)

                res.status(201).json({success: true, data:character})
            } 
            catch (error) {
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({success: false})
            break
    }
}