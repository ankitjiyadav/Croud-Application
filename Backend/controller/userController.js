import User from '../model/userModel.js';

// Create a new user
export const creat = async (req, res) => {
    try {
        const userData = new User(req.body);
        if (!userData) {
            return res.status(400).json({ message: 'Invalid user data' });
        }
        const saveData = await userData.save();
        res.status(201).json({ message: 'User created successfully', data: saveData });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

// Get all users
export const getAll = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData || userData.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

// Get one user by ID
export const getOne = async (req, res) => {
    try {
        const id = req.params.id; // Get ID from request parameters
        const userData = await User.findById(id); // Find user by ID

        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User fetched successfully', data: userData });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

// update user
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401).json({message:'User not found'});
        }
        else{
            const updatedData = await User.findByIdAndUpdate(id, req.body, {new:true});
            res.status(200).json({message:'User updated successfully',data:updatedData});
        }
    }     
    catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });

    }
}
// delete user 
export const deleteuser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401).json({message:'User not found'});
        }
        else{
            await User.findByIdAndDelete(id);
            res.status(200).json({message:'User deleted successfully'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });

    }
}

