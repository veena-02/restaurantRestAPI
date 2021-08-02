const express = require('express');
//We use Express Router
// Its a sub package that express framework ships us
// Gives us the ability to manage different routes and Wnd points

const router = express.Router();
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling GET requests to /products'
    });
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling POST requests to /products'
    });
});
module.exports = router;