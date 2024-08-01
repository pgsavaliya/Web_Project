// Import necessary modules using ES6 import
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import v1 from "./router/v1.js"


// Create an instance of express
const app = express();


// Middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use("/v1", v1);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Web Project!' });
});




// MongoDB URL // here I use lab2 mongodb project but different database
const MONGODB_URL = 'mongodb+srv://root:root@lab2.1fhsemz.mongodb.net/Web_Project';

// Options for the connection
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connecting to MongoDB
mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(2300, () => {
            console.log(`Server is running on port 2300`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });