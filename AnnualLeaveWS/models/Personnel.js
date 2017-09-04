var db=require('../dbconnection');

var Personnel={
getAllPersonnel:function(callback){

return db.query("CALL `annual_leave_app`.`sp_get_all_personnels`();",callback);
},
getPersonnelById:function(id,callback){

    return db.query("CALL `annual_leave_app`.`sp_get_personnel_by_id`(?);",[id],callback);
},
addPersonnel:function(Personnel,callback){

   console.log("inside addPersonnel");

   return db.query("CALL `annual_leave_app`.`sp_save_personnel`(?, ?, ?, ?);",[Personnel.PERSONNEL_NAME,Personnel.PERSONNEL_DEPARTMENT,Personnel.START_DATE,Personnel.END_DATE],callback);
},
deletePersonnel:function(id,callback){

    return db.query("CALL `annual_leave_app`.`sp_delete_personnel_by_id`(?);",[id],callback);
},
updatePersonnel:function(id,Personnel,callback){

    return  db.query("CALL `annual_leave_app`.`sp_update_personnel_by_id`(?, ?, ?, ?, ?);",[id,Personnel.PERSONNEL_NAME,Personnel.PERSONNEL_DEPARTMENT,Personnel.START_DATE,Personnel.END_DATE],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from annual_leave_app.personnel p where hex(p.GUID) in (?)",[delarr],callback);
}
};
module.exports=Personnel;
