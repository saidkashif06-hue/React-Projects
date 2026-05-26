const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const cors = require("cors")
const bcrypt = require('bcrypt')
require ('dotenv').config()


const userModel = require('./models/user')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/user")

app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (password.length < 8) {
      return res.json({
        success: false,
        message: 'Password must be at least 8 characters'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.create({
      name,
      email,
      password: hashedPassword
    });

    res.json({
      success: true,
      message: 'Account created successfully'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
});

app.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: 'User not found'
      });
    }

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (match) {

      const token = jwt.sign(
        {
          id: user._id,
          email: user.email
        }, 
        process.env.JWT_SECRET,
        {
          expiresIn: '15d'
        }
      )
      console.log(token)

      return res.json({
        success: true,
        message: 'Login successful'
      });
      
       
       {
        res.json({
          token : token,
          message: 'success',
        })
       }
    }

    res.json({
      success: false,
      message: 'Something went wrong'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
});
app.get('/profile',(req,res)=>{

    const token = req.headers.token
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err){
            return res.json({
                status: "error",
                message:"Invalid token"
            })
        }
        res.json({
            status: "success",
            user:decoded,
        })
    })
})

app.listen(3000)