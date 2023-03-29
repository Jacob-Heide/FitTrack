import User from '../models/users.model.js';
// Handlers for routes
export const getUsers = async(req, res) => {
    try {
        console.log('getting users....')
        const user = await User.find();

        res.status(200).json(user);
    } catch(error){
        res.status(404).json({ message: error.message });
    }
}; 

export const createUser = async(req, res) => {
    // console.log("headers", req.headers);


    //for front end 
    const user = req.body;
    // console.log('request body', user);

    //send in user we get from the front end
    const newUser = new User(user);
    console.log("new user: ", newUser);
    
    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch(error){
        res.status(409).json({ message: error.message });
    }
}; 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // // Extract the user data from the request body
    //     const { firstName, lastName, username, password } = req.body;
    //     // Create a new user object
    //     let user = {
    //       firstName,
    //       lastName,
    //       username,
    //       password,
    //     };
    //     console.log(user);

    // user = new User(req.body);
    // user.save()
    //     .then(() => {
    //         res.status(200).json({ 'user': 'Added successfully' });
    //     })
    //     .catch((err) => {
    //         res.status(400).send('Failed to create new record');
    //     });
    // };





