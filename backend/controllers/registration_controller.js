import Registration from '../models/registrationModel.js'; 

const createRegistration = async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
  
    const savedRegistration = await newRegistration.save();
    res.status(201).json(savedRegistration);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Error in creating registration",
      error: error.message
    });
  }
};

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json(registrations);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error in getting registrations",
      error: error.message
    });
  }
};

const getRegistrationById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const registration = await Registration.findById(id);
    
    if (!registration) {
      return res.status(404).json({
        message: "Registration Id is not found"
      });
    }
    
    res.status(200).json(registration);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error in fetching registration id",
      error: error.message
    });
  }
};

const updateRegistration = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedRegistration = await Registration.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedRegistration) {
      return res.status(404).json({
        message: "Registration record not found"
      });
    }

    res.status(200).json(updatedRegistration);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Error in updating registration record",
      error: error.message
    });
  }
};

const deleteRegistration = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRegistration = await Registration.findByIdAndDelete(id);

    if (!deletedRegistration) {
      return res.status(404).json({
        message: "Registration record not found"
      });
    }

    res.status(200).json({
      message: "Registration record deleted successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error in deleting registration record",
      error: error.message
    });
  }
};


export {createRegistration,getAllRegistrations, getRegistrationById, updateRegistration,deleteRegistration};
