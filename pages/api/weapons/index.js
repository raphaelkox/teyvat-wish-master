import dbConnect from '../../../utils/dbConnect'
import Weapon from '../../../models/Weapon'

dbConnect()

export default async (req, res) => {
    const { method } = req

    switch(method){
        case 'GET':
            try{
                const weapons = await Weapon.find({})

                res.status(200).json({ success: true, data: weapons})
            } 
            catch(error) {
                res.status(400).json({success: false})
            }
            break
        case 'POST':
            try {
                const weapon = await Weapon.create(req.body)

                res.status(201).json({success: true, data:weapon})
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