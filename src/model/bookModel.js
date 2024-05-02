// var db = require('../config/database');

// var Author={
// 	getAllAuthor:function(callback){
// 		return db.query("Select * from Author",callback);
// 	},
// 	getAuthorById:function(id,callback){
// 		return db.query("select * from Author where Id=?",[id],callback);
// 	},
// 	addAuthor:function(sinhvien,callback){
// 		return db.query("Insert into Author(name,class,dob) values(?,?,?)",[sinhvien.name,sinhvien.class,sinhvien.dob],callback);
// 	},
// 	deleteAuthor:function(id,callback){
// 		return db.query("delete from Author where Id=?",[id],callback);
// 	},
// 	updateAuthor:function(id,sinhvien,callback){
// 		return db.query("update Author set name=?,class=?,dob=? where Id=?",[sinhvien.name,sinhvien.class,sinhvien.dob,id],callback);
// 	}
// };
//  module.exports=Author;
