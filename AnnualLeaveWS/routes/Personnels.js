var express = require('express');
var router = express.Router();
var Personnel=require('../models/Personnel');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Personnel.getPersonnelById(req.params.id,function(err,rows){

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

 Personnel.getAllPersonnel(function(err,rows){

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

        Personnel.addPersonnel(req.body,function(err,count){
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
  Personnel.deleteAll(req.body,function(err,count){
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

        Personnel.deletePersonnel(req.params.id,function(err,count){

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

    Personnel.updatePersonnel(req.params.id,req.body,function(err,rows){

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
