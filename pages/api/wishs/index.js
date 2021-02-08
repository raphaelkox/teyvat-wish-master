import dbConnect from "../../../utils/dbConnect"
import Wish from '../../../models/Wish'

dbConnect()

export default async (req, res) => {
    const { method } = req

    switch(method){
        case 'GET':
            try{
                const wishs = await Wish.find({})

                res.status(200).json({ success: true, data: wishs})
            } 
            catch(error) {
                res.status(400).json({success: false})
            }
            break
        case 'POST':
            try {
                const wish = await Wish.create(req.body)

                res.status(201).json({success: true, data:wish})
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