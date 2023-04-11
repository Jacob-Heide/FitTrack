import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

//Route imports
import userRoutes from './routes/users.route.js';

// //sensitive variables
const DBusername = process.env.USERNAME;

const DBpassword = process.env.PASSWORD;

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//Define routes
app.use('/api', userRoutes)

//Database connection starts here
const CONNECTION_URL = `mongodb+srv://${DBusername}:${DBpassword}@fittrackdb.djl0zsm.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.nextTick.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
//.then happens if connection is successful
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}` )))
//.catch will happen if connection fails   
    .catch((error) => console.log(error.message));