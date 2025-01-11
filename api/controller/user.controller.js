
let users = [];

const generateId = () => {
    return Date.now().toString();
};

const getAllUsers = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const getUserById = (req, res) => {
    try {
        const user = users.find(u => u.id === req.params.id);
        
        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const createUser = (req, res) => {
    try {
        console.log("======",req.body)
        const { name, email, age } = req.body;
        if (!name || !email) {
            return res.status(400).json({
                success: false,
                error: 'Please provide name and email'
            });
        }

        const newUser = {
            id: generateId(),
            name,
            email,
            age: age || null,
            createdAt: new Date()
        };

        users.push(newUser);

        res.status(201).json({
            success: true,
            data: newUser
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const updateUser = (req, res) => {
    try {
        const userIndex = users.findIndex(u => u.id === req.params.id);

        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        const updatedUser = {
            ...users[userIndex],
            ...req.body,
            id: users[userIndex].id 
        };

        users[userIndex] = updatedUser;

        res.status(200).json({
            success: true,
            data: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const deleteUser = (req, res) => {
    try {
        const userIndex = users.findIndex(u => u.id === req.params.id);

        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        users.splice(userIndex, 1);

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};