import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
    firstName: {
         type: String, 
         required: [
            true, "First name is required"
        ], 
        minlength: [
            2, "Minimum 2 characters required"
        ] },
    middleName: {
         type: String
         },

    lastName: {
       type: String,
         required: [
            true, "Last name is required"
        ],
         minlength: [
            2, "Minimum 2 characters required"
        ] },

    dob: { 
        type: String,
         required: [
            true, "Date of birth is required"
        ] },

    gender: { 
        type: String,
         required: [
            true, "Gender is required"
        ], 
        enum: [
            "Male", "Female", "Other"
        ] },

    email: { 
      type: String, 
      required: [
        true, "Email is required"
    ], 
      unique: true, 
      match: [
        /^\S+@\S+\.\S+$/, "Invalid email format"
    ] 
    },

    phone: { 
      type: String, 
      required: [
        true, "Mobile number is required"
    ], 
      match: [
        /^\d{10}$/, "Mobile number must be 10 digits"
    ] 
    },

    address: {
         type: String, 
         required: [
            true, "Address is required"
        ], 
        minlength: [
            5, "Address should be at least 5 characters"
        ] },

    aadhar: { 
      type: String, 
      required: [
        true, "Aadhar number is required"
    ], 
      unique: true, 
      match: [
        /^\d{12}$/, "Aadhar number must be 12 digits"
    ] 
    },

    board: { 
        type: String,
         required: [
            true, "Board is required"
        ] },

    schoolName: { 
        type: String,
         required: [
            true, "School name is required"
        ] },

    passingYear: { 
      type: String, 
      required: [
        true, "Passing year is required"
    ], 
      match: [
        /^\d{4}$/, "Passing year must be a 4-digit year"
    ] 
    },

    percentage: { 
      type: Number, 
      required: [
        true, "Percentage is required"
    ], 
      min: [
        0, "Percentage cannot be negative"
    ], 
      max: [
        100, "Percentage cannot exceed 100"
    ] 
    },

    city: { 
        type: String,
         required: [
            true, "City is required"
        ] }
  });
  
  const Registration = mongoose.model("Registration", registrationSchema);
  module.exports = Registration;