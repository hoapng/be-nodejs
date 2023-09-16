const connection = require("../config/database");
const { getAllUser } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
    let results = await getAllUser();
    return res.render('home.ejs', { listUsers: results })
}

const getABC = (req, res) => {
    res.render('sample')
}

const postCreateUser = async (req, res) => {

    let { email, name, city } = req.body;

    // console.log(email, name, city, req.body);

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city]
    );
    res.send('Create succeed')
    console.log(results)
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    postCreateUser,
    getCreatePage
}