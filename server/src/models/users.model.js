import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//Turning schema into DB model
const User = mongoose.model('User', userSchema);

export default User;