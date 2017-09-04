var db=require('../dbconnection');

var Leave={
getAllLeaves:function(callback){

return db.query("CALL `annual_leave_app`.`sp_get_leave_types`();",callback);
},
getLeaveById:function(id,callback){

    return db.query("CALL `annual_leave_app`.`sp_get_leaves`(?);",[id],callback);
},
addLeave:function(Leave,callback){

   return db.query("CALL `annual_leave_app`.`sp_save_leaves`(?,?,?,?);",[Leave.PERSONNEL_GUID,Leave.LEAVE_TYPE_GUID,Leave.LEAVE_START_DATE,Leave.LEAVE_END_DATE],callback);
}
};
module.exports=Leave;
