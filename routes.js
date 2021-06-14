

let path = require("path");
let express = require("express");    //new
let router = express.Router();      //new


router.get("/",function(req,res){
//	res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
	res.sendFile(path.resolve(__dirname,"public/views/FoodProject.html"));
});



module.exports = router;   //new
