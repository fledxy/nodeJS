
const connection = require('../config/database')

const getHomepage = (req, res) =>{

    return res.render('homepage.ejs')
    //     // process data
    // // call model
    // let users = []
    // connection.query(
    //     'SELECT * FROM Users u',
    //     function (err, results, fields) {
    //         users = results
    //         console.log(">>>results   ",results); // results contains rows returned by server
    //         console.log(">>>>>field   ",fields); // fields contains extra meta data about results, if available
    //         res.send(JSON.stringify(users))
    //  }
    // );
}
const getFledxy = (req, res) =>{

    res.render('sample.ejs')
}

const portCreateUsers = async (req,res) => {
    let name = req.body.fname;
    let city = req.body.lname;
    let email = req.body.email

    // Using placeholders
//     connection.query(
//         `INSERT INTO 
//         Users (email , name , city)
//         VALUES (?,?,?);`,
//         [email,name,city],
//         function (err, results) {
//             console.log(results);
//             err.code;
//             res.send('create user succes !')

//         }
//   );
  let [results,fields] = await  connection.query(
    `INSERT INTO Users (email , name , city) VALUES (?,?,?);`,[email,name,city],
);
    console.log('check resualt >>>>>>.', results)

    res.send('ok')

}

module.exports = {
    getHomepage,
    getFledxy,
    portCreateUsers
}