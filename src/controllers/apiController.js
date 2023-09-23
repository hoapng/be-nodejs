const User = require("../models/user");

const getUsersAPI = async (req, res) => {
    let results = await User.find({});

    return res.status(200).json({
        EC: 0,
        data: results
    })
}

const postCreateUserAPI = async (req, res) => {

    let { email, name, city } = req.body;

    let user = await User.create({ email, name, city })

    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const puttUpdateUserAPI = async (req, res) => {

    let { email, name, city, userId } = req.body;

    // console.log(email, name, city, req.body);

    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city })
    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const deleteUserAPI = async (req, res) => {
    const id = req.body.userId;
    let results = await User.deleteOne({ _id: id });
    return res.status(200).json({
        EC: 0,
        data: results
    })
}


module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    puttUpdateUserAPI,
    deleteUserAPI
}