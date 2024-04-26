const pool = require('../config/database')

let getAllUser = async (req,res) => {
    const [rows,field] = await pool.execute("SELECT * FROM Users")
    return res.status(200).json({status: "200",message: 'OK',data: rows})
        
}
let createUser = async (req, res) => {
    let {name,email,city} = req.body

    if(!name){
        return res.status(200).json({message : "missing"})
    }
    await pool.execute(
    `INSERT INTO Users (email , name , city) VALUES (?,?,?);`,[email,name,city],)

    return res.status(200).json({message: "ok"})
}
let updateUser = async (req, res) => {
    let {name,email,city} = req.body

    if(!name){
        return res.status(200).json({message : "missing"})
    }
    await pool.execute(
    `UPDATE Users Set email = ?, name = ?, city = ? where name = ?`,[email,name,city],)

    return res.status(200).json({message: "ok"})

}
let deleteUser = async (req, res) => {
    let name = req.body.name
    await pool.execute(
        `DELETE from Users where name = ?`,[name],)
    return res.status(200).json({message: "ok"})

}
module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser
}