var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'123456',
database:'ANNUAL_LEAVE_APP'

});
module.exports=connection;