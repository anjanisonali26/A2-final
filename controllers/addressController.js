const Address = require("../models/Address");

class addressController {

  // Address Create
  static addressCreate(req, res, next) {
    const {
      desa,
      kecamatan,
      kabupaten,
      provinsi,
      negara,
      nomor_hp,
      kodepos,
    } = req.body;
    const address = new Address({
      _addressId: req._addressId,
      desa,
      kecamatan,
      kabupaten,
      provinsi,
      negara,
      nomor_hp,
      kodepos,
    });
    address
      .save()
      .then((address) => {
        res.status(201).json({
          success: true,
          data: address,
        });
      })
      .catch(next);
  }


  // modify address
  static addressModify(req, res, next) {
    const {
      desa,
      kecamatan,
      kabupaten,
      provinsi,
      negara,
      nomor_hp,
      kodepos
    } = req.body;
    Address.findOne({
      _addressId: req._addressId,
    })
    .then((address)=>{
      address.desa = desa;
      address.kecamatan = kecamatan;
      address.kabupaten = kabupaten;
      address.provinsi = provinsi;
      address.negara = negara;
      address.nomor_hp = nomor_hp;
      address.kodepos = kodepos;
      return address.save();
    })
    .then((address)=> {
      res.status(200).json({message:'Success Edit Address', data:address})
    })
    .catch(next)
    
  }
 

  // Delete Address

  static addressDelete(req, res, next) {
    Address.findOne({ 
      _addressId: req._addressId
    })
    .then((address)=>{
      res.status(200).json({
        msg: 'Delete Success',
        data: address.remove()
      });
    })
    .catch(next);
  }

  // List All Address

  static listAll(req, res, next){
    Address.find().then((address)=>{
      res.status(200).json({
        msg: 'List All Address Customer',
        data: address
      });
    })
    .catch(next);
  }

  // List Address Customer

  static getAddresscustomer(req, res, next){
    const {Id} = req.params;
    Address.findById(Id)
    .then((address) =>{
      // console.log(address)
      res.status(200).json({
        success: true,
        data: address,
      });
    })
    .catch(next);
  }
}

module.exports = addressController;
