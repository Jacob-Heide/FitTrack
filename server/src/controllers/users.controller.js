import User from '../models/users.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// Handlers for routes

// logout
export const logout = async (req, res) => {
    try {
        console.log('logout', res.user)
        if (res.user) {
            res.user.token = ''
            await res.user.save()
        }
        res.json({
            data: {},
            status: 'success',
            message: 'logout success',
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const login = async(req, res) => {
    try {
        console.log(req.body);

        const {username, password} = req.body
        const user = await User.findOne({username: username})
        if (user == null) {
            res.status(404).json({ message: "username or password is incorrect" });
            return
        }
        console.log('user', user);
        const match = await bcrypt.compare(password, user.password);
        console.log('match', match);
        if (!match) {
            res.status(404).json({message: "username or password is incorrect" })
                return
                }

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET)
        res.status(200).json({...user._doc, token: token });

    } catch(error){
        res.status(404).json({ message: error.message });
    }
}; 

export const createUser = async(req, res) => {
 
    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 10);
    const newUser = new User({
        ...user,
        password: hash
    });

    console.log("new user: ", newUser);
    
    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch(error){
        res.status(409).json({ message: error.message });
    }
};

