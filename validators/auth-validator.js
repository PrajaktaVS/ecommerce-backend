const { z } = require("zod");



const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 characters" })
        .max(255, { message: "Email must be not more than 255 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least of 7 characters" })
        .max(1024, { message: "Password must be not more than 1024 characters" }),
});



const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 characters" })
        .max(255, { message: "Name must be not more than 255 characters" }),
});




module.exports = { signupSchema, loginSchema };