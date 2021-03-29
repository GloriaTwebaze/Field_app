const express = require("express")
const router = express.Router()
const mongoose = require('mongoose');
const Employee = require('../models/Employee')
const multer = require("multer")
router.get("/registerUser", (req, res) => {
	res.render("registeruser")
})

// image upload
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images")
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname)
	}
})
var upload = multer({ storage: storage })

router.post('/registerUser', upload.single('imageupload'), async (req, res) => {
    try {
        const employee = new Employee(req.body);
        employee.imageupload = req.file.path;
        await employee.save()
        res.redirect('/list')
    }catch(err){
        console.log(err);
        res.send('Sorry! Something went wrong.');
    }
 })
 // retriving employee info in Employee collection
 router.get('/List',async (req,res)=>{
    try {
        const employeeDetails = await Employee.find();
        res.render('employeelist', { users: employeeDetails, title: 'Employeelist' })
    } catch (err) {
        res.send('Failed to retrieve employee details');
    }

})



module.exports = router
