const express = require('express');
const router = express.Router();
const personal_info = require('./../models/personal_info.js');
router.post('/',async (req,res)=>{
    try{
        const data = req.body;
        const newStudent = new personal_info(data);//create new document using mongoose model
        const response = await newStudent.save();
        console.log('Successfully sent');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Server Down'});
    }
})
router.get('/',async(req,res)=>{
    try{
        const response = await personal_info.find();
        console.log('Data is received');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Server Down'});
    }
})
router.get('/:semType',async (req,res)=>{
    try{
        //extract the parameter
        const semType = req.params.semType;
        if(semType==5 || semType==6 || semType==7 || semType==8){
            const response=await personal_info.find({sem:semType});
            console.log('Your data is ready');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'No data available'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Server Down'});
    }
})
router.put('/:studentid',async (req,res)=>{
    try{
        const studentid = req.params.studentid;
        const studentdata = req.body;
        const response = await personal_info.findByIdAndUpdate(studentid,studentdata,{
            new:true,
            runValidators:true
        });
        if(!response){
            return res.status(404).json({error:'No data there'});
        }
        console.log('Updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Server Down'});
    }
})
router.delete('/:studentid',async (req,res)=>{
    try{
        const studentid = req.params.studentid;
        const response = await personal_info.findByIdAndDelete(studentid);
        if(!response){
            return res.status(404).json({error:'No data there'});
        }
        console.log('Deleted');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Server Down'});
    }
})
module.exports=router;
