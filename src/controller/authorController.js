const Author = require("../model/bookModel");
const pool = require('../config/database')

// const {Author, Book} = require("../model/bookModel")

const authorController = {
    getAuthor: async (req,res) => {
        const [rows,field] = await pool.execute("SELECT * FROM Author")
        return res.status(200).json({status: "200",message: 'OK',data: rows})
        // res.status(200).json({status : "200", messages: "get author"})
    },

    addAuthor: async (req, res) => {
        let {name, years, book} = req.body

        await pool.execute(`INSERT INTO Author (name , years, book) VALUES (?,?,?);`,[ name , years, book],)
        
       res.status(201).json({status : "201", messages: "Add Author"});     
         
    },

    updateAuthor: async (req, res) => {
        let {id,name, years, book} = req.body

        await pool.execute(`UPDATE Author Set name = ?, years = ?, book = ? where id = ?`,[name, years , book, id],)
        

        res.status(200).json({status : "200",messages : "Update Author"})
    },
    deleteAuthor: async (req, res) => {
        let id = req.body.id
        await pool.execute(
            `DELETE from Author where id = ?`,[id])
        

        res.status(200).json({status : "200",messages : "Delete Author"})
    }
    
}

module.exports = authorController