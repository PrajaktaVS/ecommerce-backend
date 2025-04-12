const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
});


//secure password with bcrypt
userSchema.pre("save", async function () {
    // console.log("pre method", this);
    const user = this;

    if (!user.isModified) {
        return next()
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashedPassword;
    } catch (error) {
       return next(error);
    }
});


//compare password
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}


//json web token
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "365d",
            }
        )
    } catch (error) {
        console.error("Token error",error);
    }
};




//define model or collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;