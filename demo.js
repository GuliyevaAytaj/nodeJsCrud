const { error } = require('console');
const express = require('express')
const mongoose = require('mongoose');
const User = require('./models/userModel');
const exp = require('constants');

const app = express()

app.use(express.json())



//routes
app.get("/",( req, res) => {
    res.send("Hello Api")
})

app.get('/user',async (req, res)=> {
    try {
        
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
        
    }
    })

app.get('/user/:id', async (req, res)=> {
    try {
        const {id} = req.params;
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

app.post('/user',async (req, res)=> {
    try {
        
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
        
    }
    })
app.put('/user/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
            return res.status(404).json({mesage: `User with ${id} was not found`})
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})





// delete a user

app.delete('/user/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: `User with ${id} was not found`})
        }
        res.status(200).json({message: `User was deleted`});
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://accessManager:FUUSmPRt2J8JvLV9@shopwebsite.4udfl98.mongodb.net/User?retryWrites=true&w=majority')
.then(() =>  {
    console.log("Connected to db")
    app.listen(3000,()=> {
        console.log("Node runing in a port 3000")
    
    });

})
.catch((error) => {
console.log(error)
})