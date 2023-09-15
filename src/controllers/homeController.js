const connection = require("../config/database");

const getHomepage = (req, res) => {
    return res.render('home.ejs')
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