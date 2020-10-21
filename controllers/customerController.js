const Customer = require("../models/Customer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


class customerController {


// Create Customer
  static registercustomer(req, res, next) {
    const { username, email, password, firstname, lastname, age, role } = req.body;
    const customer = new Customer({
      username,
      email,
      password,
      firstname,
      lastname,
      age,
      role,
      date: Date.now()
    });
    customer
      .save()
      .then((customer) => {
        res.status(201).json({
          success: true,
          data: customer,
        });
      })
      .catch(next);
  }

// List customer

  static listCustomer(req, res, next){
    Customer.find().then((customer)=>{
      res.status(200).json({ 
        msg: 'List Customer',
        data: customer,
      });
    })
    .catch(next);
  }

  
  // Login customer
  static logincustomer(req, res, next) {
    const { email, password } = req.body;
    Customer.findOne({ email })
      .then((customer) => {
        if (customer && bcrypt.compareSync(password, customer.password)) {
          const access_token = jwt.sign({ _id: customer._id }, "ASSIGMENT_STORE");
          res.status(200).json({ success: true, access_token });
        } else throw { name: "LOGIN_FAIL" };
      })
      .catch(next);
  }

// get

static getCustomer(req, res, next){
  const {Id} = req.params;
  Customer.findById(Id)
  .then((customer)=>{
    res.status(200).json({ 
      success: true,
      data: customer,
    });
  })
  .catch(next);
  }
  

  // modify customer
  static customerModify(req, res, next) {
    const {username, email, password, nama_depan, nama_belakang, umur} = req.body;
    const {Id} = req.params;
  
    const updateData = {
      username: username,
      email: email, 
      password: password,
      nama_depan: nama_depan,
      nama_belakang: nama_belakang,
      umur: umur,
   
    }
  
    for (let key in updateData){
      if(!updateData[key]){
        delete updateData[key]
      }
    }
  
    Customer.findByIdAndUpdate(Id, updateData, {new: true})
    .then((Customer)=>{
      res.status(200).json({ 
        msg: 'Success Update Data Customer',
        data: Customer,
      });
    })
    .catch(next);
  }

  // Delete customer

  static customerDelete(req, res, next){
    const {Id} = req.params
    Customer.findById(Id).then((customer)=>{
      res.status(200).json({ 
        msg: 'Success delete customer', 
        data: customer.remove(),
      })
    })
    .catch(next);
  }

}

module.exports = customerController;
