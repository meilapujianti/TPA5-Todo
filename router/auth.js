const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require("../schema/user");

const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

// Membuat user baru (Register)
router.post("/register", async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const hash = await bcrypt.hash(password, 10);

        const data = await userSchema.create({
            username: username,
            password: hash,
            email: email,
        });

        if (data) {
            res.send(data);
        } else {
            res.send("Error");
        }
    } catch (error) {
        res.send(error);
    }
});

// Login
router.post("/login", async (req, res) => {
    const { username, password} = req.body;

    try {
        const checkUsername = await userSchema.findOne({
            username: username,
        });

    if (checkUsername){
        const checkPass = await bcrypt.compare(password, checkUsername.password);

        if (checkPass) {
            const token = jsonwebtoken.sign({
                username: checkUsername.username,
            }, process.env.JWT_KEY );
            
            res.send(token);
        } else{
            res.send("Salah Password")
        }
    } else{
        console.log("Username salah");
    }
  } catch (error) {
        res.send(error);
    }
});

module.exports = router;