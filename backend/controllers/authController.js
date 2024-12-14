const register = async (req, res) => {
    try {
        console.log(req.body);
        res.json({ status: 'ok' });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
};

const login = async (req, res) => {
    try {
        // Login logic will go here
        res.json({ status: 'ok' });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
};

module.exports = {
    register,
    login
}; 