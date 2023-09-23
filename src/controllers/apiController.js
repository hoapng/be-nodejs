const User = require("../models/user");
const uploadSingleFile = require("../services/fileService");

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

const postUploadSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let results = await uploadSingleFile(req.files.image);
    console.log("results", results)

    return res.send('OK')
}

module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    puttUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFile
}