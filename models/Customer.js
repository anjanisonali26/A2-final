const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const customerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 4,
    },
    email: {
      type: String,
      required: true,
      default: "example@gmail.com",
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "bukan email yang valid"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
      minlength: 3,
    },
    role:{
    type: String,
    default: 'user',
    }
  },

  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

customerSchema.pre("save", function (next) {
  Customer.findOne({ email: this.email })
    .then((customer) => {
      if (customer) next({ name: "ALREADY_EXISTS" });
      else {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
        next();
      }
    })
    .catch((err) => next({ name: "MONGOOSE_ERROR" }));
});
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
