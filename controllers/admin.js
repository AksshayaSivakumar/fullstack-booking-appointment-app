const path = require('path');

const rootDir=require('../util/path');
const Users= require('../models/user');


exports.getForm=async(req, res, next) =>{
  res.sendFile(path.join(rootDir,'views','registration.html'));
}

//   try {
//     const users= await Users.findAll()
//     console.log("users");
//     console.log(users); 
//     res.status(200).json({allUsers:users})
//   } catch (error) {
//    console.log('Get user is failing',JSON.stringify(error));
//    res.status(500).json({error:err})
// }
// }


exports.postUserDetails= async (req,res,next)=>{

  try 
    {

   if(!req.body.mobileNumber)
   {
    throw new Error('mobile number is mandatory')
   }
 
    const name = req.body.name;
    const mobileNumber=req.body.mobileNumber;
    const emailId=req.body.emailId;
    const data = await Users.create({
        name:name,
        mobileNumber:mobileNumber,
        emailId:emailId
       
    })
     console.log('updated success');
     
    res.status(201).json({newUserDetail:data})
    
     
    }
catch(err)

{
    res.status(500).json({error:err})
}


}

exports.deleteUserDetails=async (req,res,next)=> {
  try {
   if(req.params.id == 'undefined')
   {

       console.log('ID is Missing');
       return res.status(400).json({err:'Id is missing'})
   }
    const userId=req.params.id;
    await Users.destroy({where:{id:userId}});
    res.sendStatus(200);
  } catch (err) {
   console.log(err);
   res.status(500).json(err)
  }
}

exports.getUserDetails= async (req,res,next)=>{

  try {
    const users= await Users.findAll()
    console.log("users");
    console.log(users); 
    res.status(200).json({allUsers:users})
  } catch (error) {
   console.log('Get user is failing',JSON.stringify(error));
   res.status(500).json({error:err})
}

}




  