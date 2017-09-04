var express = require('express');
var router = express.Router();
var AnnualLeave=require('../models/AnnualLeave');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    AnnualLeave.getAnnualLeaveById(req.params.id,function(err,rows){

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

 AnnualLeave.getAllAnnualLeave(function(err,rows){

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

        AnnualLeave.addAnnualLeave(req.body,function(err,count){
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
  AnnualLeave.deleteAll(req.body,function(err,count){
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
router.delete('/:id',function(req,res,next){

        AnnualLeave.deleteAnnualLeave(req.params.id,function(err,count){

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
router.put('/:id',function(req,res,next){

    AnnualLeave.updateAnnualLeave(req.params.id,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;
