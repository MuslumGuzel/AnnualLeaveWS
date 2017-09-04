var db=require('../dbconnection');

var AnnualLeave={
getAllAnnualLeave:function(callback){

return db.query("CALL `annual_leave_app`.`sp_get_leave_types`();",callback);
},
getAnnualLeaveById:function(id,callback){

    return db.query("CALL `annual_leave_app`.`sp_get_AnnualLeave_by_id`(?);",[id],callback);
},
addAnnualLeave:function(AnnualLeave,callback){

   return db.query("CALL `annual_leave_app`.`sp_save_leave_types`(?);",[AnnualLeave.LEAVE_TYPE_NAME],callback);
},
deleteAnnualLeave:function(id,callback){

    return db.query("CALL `annual_leave_app`.`sp_delete_leave_type_by_id`(?);",[id],callback);
},
updateAnnualLeave:function(id,AnnualLeave,callback){

    return  db.query("CALL `annual_leave_app`.`sp_update_AnnualLeave_by_id`(?, ?, ?, ?, ?);",[id,AnnualLeave.PERSONNEL_NAME,AnnualLeave.PERSONNEL_DEPARTMENT,AnnualLeave.START_DATE,AnnualLeave.END_DATE],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from annual_leave_app.AnnualLeave p where hex(p.GUID) in (?)",[delarr],callback);
}
};
module.exports=AnnualLeave;
