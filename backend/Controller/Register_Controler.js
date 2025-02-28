
const Register_Service = require('../Services/Register_Service')


const Create_Registration = async (req, res) => {
   try {
     const userId = req.params.userId; // ✅ Extract userId from URL
     const registrationData = req.body;
 
     if (!userId) {
       return res.status(400).json({ error: "User ID is required in the URL" });
     }
 
     const newRegistration = await Register_Service.createRegistration(registrationData, userId);
 
     res.status(201).json(newRegistration);
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 };
 


const Delete_Registration = async (req, res) => {


   const productId = req.params.id;

   try {

      const product = await Register_Service.deleteRegistrationById(productId);

      return res.status(201).send(product);

   } catch (error) {

      return res.status(500).send({ error: error.message });

   }



}


const Update_Registration = async (req, res) => {


   const productId = req.params.id;

   try {

      const product = await Register_Service.updateRegistrationById(productId, req.body);

      return res.status(201).send(product);

   } catch (error) {

      return res.status(500).send({ error: error.message });

   }



}



const Find_Registration_By_Id = async (req, res) => {


   const productId = req.params.id;

   try {

      const product = await Register_Service.findRegistrationById(productId);

      return res.status(201).send(product);

   } catch (error) {

      return res.status(500).send({ error: error.message });

   }



}



const Get_All_Registration = async (req, res) => {

   try {

      const products = await Register_Service.getAllRegistrations(req.query);

      return res.status(201).send(products);

   } catch (error) {

      return res.status(500).send({ error: error.message });

   }
}






module.exports = { Create_Registration,Update_Registration,Get_All_Registration ,Find_Registration_By_Id, Delete_Registration }


