const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  _addressId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  desa: {
    type: String,
    required: true,
  },
  kecamatan: {
    type: String,
    required: true,
  },
  kabupaten: {
    type: String,
    required: true,
  },
  provinsi: {
    type: String,
    required: true,
  },
  negara: {
    type: String,
    required: true,
  },
  nomor_hp: {
    type: Number,
    minlength: 11,
    required: true,
  },
  kodepos: {
    type: Number,
    minlength: 5,
    required: true,
  },
});

const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
