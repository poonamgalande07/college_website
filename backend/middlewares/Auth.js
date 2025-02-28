const JWT_PROVIDER = require('../Config/jwtProvider');
const User_Service = require('../Services/UserServices');

const authenticate = async (req, res, next) => {
    try {
        // Get token from Authorization header
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).send({ message: 'Token Not Found' });
        }

        // Decode user ID from token
        const userId = JWT_PROVIDER.getUserIdFromToken(token);

        if (!userId) {
            return res.status(401).send({ message: 'Invalid or Expired Token' });
        }

        // Find user by ID
        const user = await User_Service.findUserById(userId);

        if (!user) {
            return res.status(404).send({ message: 'User Not Found' });
        }

        // Attach user data to the request object
        req.user = user;
        
        // Proceed to the next middleware/route handler
        next();

    } catch (error) {
        // Catch and handle any errors during the authentication process
        console.error('Authentication Error: ', error.message);  // Log the error for debugging
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = authenticate;
