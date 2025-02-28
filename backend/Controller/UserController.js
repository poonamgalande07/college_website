const User_Services = require('../Services/UserServices');

const getUserProfile = async (req, res) => {
    try {
        const jwt = req.headers.authorization?.split(" ")[1];

        if (!jwt) {
            return res.status(401).send({ message: 'Token Not Found' });
        }

        const user = await User_Services.getUserProfileByToken(jwt); // Corrected here

        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getAllUser = async (req, res) => {
    try {
        const users = await User_Services.getAllUsers(); // Corrected here

        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = { getUserProfile, getAllUser };
