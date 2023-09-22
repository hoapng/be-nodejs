const connection = require("../config/database");
const User = require("../models/user");
const { getAllUser, getUserById, updateUserById, deleteUserById } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
    let results = [];
    return res.render('home.ejs', { listUsers: results })
}

const getABC = (req, res) => {
    res.render('sample')
}

const postCreateUser = async (req, res) => {

    let { email, name, city } = req.body;

    // console.log(email, name, city, req.body);

    await User.create({ email, name, city })

    res.redirect('/')
    // console.log(results)
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('edit.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {

    let { email, name, city, userId } = req.body;

    // console.log(email, name, city, req.body);

    await updateUserById(email, name, city, userId)
    res.redirect('/')
    // console.log(results)
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('delete.ejs', { userEdit: user })
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;
    await deleteUserById(id)
    res.redirect('/')
}

module.exports = {
    getHomepage,
    getABC,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}