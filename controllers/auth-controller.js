const User = require("../models/user-model");


const home = async (req, res) => {
    try {
        res.status(200).send("Prajakta from controllers");
    } catch (error) {
        console.log(error);
    }
};

// register user
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(400).json({ message: "email already exist" });
        }


        const userCreated = await User.create({
            username,
            email,
            password
        });

        res.status(201).json({
            msg: "Registration Successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};


//user login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" })
        }
        const isPasswordValid = await userExist.comparePassword(password);

        if (isPasswordValid) {
            res.status(200).json({
                msg: "Login successfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            });
        } else {
            res.status(401).json({ message: "Invalid credentials" })
        }

    } catch (error) {
        res.status(500).json("Internal server error");
        console.log(error);
    }
}



//to send data from database - user logic
const user = async (req, res) => {
    try {
        const userData = req.user;
        return res.status(200).json({ userData })
    } catch (error) {
        console.log(`error from the user route ${error}`);
    }
};




module.exports = { home, register, login, user };