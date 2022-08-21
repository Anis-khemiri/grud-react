const Users = require('../models/users.models')





const AddUser = async (req, res)=> {
try {
    await Users.create(req.body)
    res.status(201).json({message: 'user add with success'})
} catch (error) {
    
}
}
const FindAllUser = async (req, res)=> {
    try {
        const data = await Users.find()
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
        
    }
}
const FindSinglUser = async (req, res)=> {
    try {
        const data = await Users.findOne({ _id: req.params.id })
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
        
    }
}
const UpdateUser = async (req, res)=> {
    try {
        const data = await Users.findOneAndUpdate({_id: req.params.id },
            req.body,
            {new: true}
            )
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }
}
const DeleteUser = async (req, res)=> {
    try {
        await Users.findOneAndDelete({_id: req.params.id})
        res.status(201).json({message: "user deleted with success"})
    } catch (error) {
        
    }
}

module.exports = {
    AddUser,
    FindAllUser,
    FindSinglUser,
    UpdateUser,
    DeleteUser
}