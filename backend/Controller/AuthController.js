const User_Service = require('../Services/UserServices');
const JWT_PROVIDER = require('../Config/jwtProvider');
const bcrypt = require('bcrypt')


const register = async (req, res) => {
    try {

        const user = await User_Service.createUser(req.body);
        const jwt = JWT_PROVIDER.generateToken(user._id);
          

        return res.status(200).send({ jwt, message: 'Register User' });

    } catch (error) {
        return res.status(500).send({ error: error.message });

    }
}

const login = async (req, res) => {
    const { password, email} = req.body;

    try {
        let user;

        if (email) {
            user = await User_Service.findUserByEmail(email);
       
        } else {
            return res.status(400).send({ message: 'Please provide either email or userName.' });
        }

        if (!user) {
            return res.status(404).send({ message: 'User not found with the provided email or userName.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid Password' });
        }

        const jwt = JWT_PROVIDER.generateToken(user._id);

        return res.status(200).send({ 
            jwt, 
            message: 'Login Success',
            userName: user.userName // Include the userName in the response
        });

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}



// Logout User
const Logout_User = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(400).send({ message: 'Token not provided' });

        const result = await User_Service.Logout_User(token);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};



module.exports = { register, login, Logout_User}