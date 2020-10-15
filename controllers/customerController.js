const Customer = require("../models/Customer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


class customerController {


// Register
  static registercustomer(req, res, next) {
    const { username, email, password, nama_depan, nama_belakang, umur, role } = req.body;
    const customer = new Customer({
      username,
      email,
      password,
      nama_depan,
      nama_belakang,
      umur,
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

// // List resources

//   static registerFind(req, res, next){
//     User.find().then((user)=>{
//       res.status(200).json({ 
//         msg: 'List resource',
//         data: user,
//       });
//     })
//     .catch(next);
//   }

  
  // Login customer
  static logincustomer(req, res, next) {
    const { email, password } = req.body;
    Customer.findOne({ email })
      .then((customer) => {
        if (customer && bcrypt.compareSync(password, customer.password)) {
          const access_token = jwt.sign({ _id: customer._id }, "ASSIGMENT_GAME");
          res.status(200).json({ success: true, access_token });
        } else throw { name: "LOGIN_FAIL" };
      })
      .catch(next);
  }

// // get

// static getUser(req, res, next){
//   const {UserId} = req.params;
//   User.findById(UserId)
//   .then((user)=>{
//     res.status(200).json({ 
//       success: true,
//       data: user,
//     });
//   })
//   .catch(next);
//   }
  
//   static registerModify(req, res, next) {
//     const {username, tawnhallName} = req.body;
//     const {UserId} = req.params;
  
//     const updateData = {
//       username: username,
//       tawnhallName: tawnhallName,
   
//     }
  
//     for (let key in updateData){
//       if(!updateData[key]){
//         delete updateData[key]
//       }
//     }
  
//     User.findByIdAndUpdate(UserId, updateData, {new: true})
//     .then((User)=>{
//       res.status(200).json({ 
//         msg: 'Success Update Tawnhall Name',
//         data: User,
//       });
//     })
//     .catch(next);
//   }

//   // Delete User

//   static registerDelete(req, res, next){
//     const {UserId} = req.params
//     User.findById(UserId).then((user)=>{
//       res.status(200).json({ 
//         msg: 'Success delete user', 
//         data: user.remove(),
//       })
//     })
//     .catch(next);
//   }

  

//   // Edit tawnhallName

//   static put(req, res, next) {
//     ({
//       tawnhallName
//     }= req.body);

//     User.findOne({ 
//       _id: req.params.id
//     })
//     .then(users =>{
//       users.tawnhallName = tawnhallName;
//       return users.save();
//         })
//         .then((users)=>{
//           res.status(200).json({ 
//             success: true,
//             data: users,
//           })
//         })
//         .catch(next);
//   }
}

module.exports = customerController;
