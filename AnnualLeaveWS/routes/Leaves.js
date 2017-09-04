var express = require('express');
var router = express.Router();
var Leave=require('../models/Leave');


router.get('/:id?',function(req,res,next){
if(req.params.id){

    Leave.getLeaveById(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{

 Leave.getAllLeaves(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }

    });
}
});
router.post('/',function(req,res,next){

        Leave.addLeave(req.body,function(err,count){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(req.body);
            }
        });
});
 router.post('/:id',function(req,res,next){
  Leave.deleteAll(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
  });
});


module.exports = router;
