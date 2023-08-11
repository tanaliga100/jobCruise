import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    addressLine: {
      type: String,
      maxlength: 50,
      required: true,
      trim: true,
      default: "#22 Zone 1",
    },
    state: {
      type: String,
      maxlength: 15,
      required: true,
      trim: true,
      defaul: "Manila",
    },
    country: {
      type: String,
      maxlength: 20,
      trim: true,
      default: "Philippines",
    },
    zipCode: {
      type: String,
      maxlength: 7,
      trim: true,
      default: "1116",
    },
  },
  {
    _id: false, // To prevent Mongoose from creating a separate _id for the sub-document
  }
);

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (value) {
          // Custom validation to ensure the email format is valid
          // You can add more complex email validation using regex if needed
          return /\S+@\S+\.\S+/.test(value);
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,

      minlength: 6, // Password should have at least 6 characters
    },
    age: {
      type: Number,
      required: true,
      min: 18, // Minimum age should be 18
      default: 18,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
      default: "Other",
    },
    department: {
      type: String,
      enum: ["Admin", "Integration", "Marketing", "Accounting", "N/A"],
      required: true,
      default: "N/A",
    },
    DOB: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          // Custom validation to ensure the DOB is not in the future
          return value <= new Date();
        },
        message: "Date of Birth cannot be in the future",
      },
      default: "2000-01-01",
    },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // Custom validation to ensure the phoneNumber is a valid Philippine number format
          return /^\+639\d{9}$/.test(value);
        },
        message:
          "Phone Number must be a valid Philippine number format (+639XXXXXXXXX)",
      },
      default: "+63690243354",
    },

    address: addressSchema, // sub-document
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
  },
  {
    timestamps: true,
    // toJSON: {
    //   virtuals: true,
    //   transform: function (doc, ret) {
    //     ret.id = ret._id;
    //     delete ret._id;
    //   },
    // },
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
