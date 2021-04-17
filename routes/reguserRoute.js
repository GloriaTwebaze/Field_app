const express = require("express")
const router = express.Router()
const mongoose = require('mongoose');
const Employee = require('../models/Employee')
const multer = require("multer")
router.get("/registeruser", (req, res) => {
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

router.post('/registeruser', upload.single('imageupload'), async (req, res) => {
    try {
        const employee = new Employee(req.body);
        employee.imageupload = req.file.path;
        await employee.save()
        res.redirect('/list')
    }catch(err){
        console.log(err);
        res.send('Sorry! Please fill all the required fields!');
    }
 })
 // retriving employee info in Employee collection
 router.get('/list',async (req,res)=>{
    try {
         // find all the data in the Employee collection
         let employeeDetails = await Employee.find();
         if (req.query.gender) {
             employeeDetails = await Employee.find({ gender: req.query.gender })
         }
        res.render('employeelist', { users: employeeDetails, title: 'Employeelist' })
    } catch (err) {
        res.send('Failed to retrieve employee details');
    }

})
// get details of an employee
router.get('/update/:id', async (req, res) => {
    try {
        const updateEmp = await Employee.findOne({ _id: req.params.id })
        res.render('updateEmployee', { user: updateEmp })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})

// route to save the updated data
router.post('/update', async (req, res) => {
    try {
        await Employee.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('/list');
    } catch (err) {
        console.log(err)
        res.status(404).send("Unable to update item in the database");
    }
})

// delete an entry
router.post('/delete', async (req, res) => {
    try {
        await Employee.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
})




module.exports = router
