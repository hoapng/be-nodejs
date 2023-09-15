const connection = require("../config/database");

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.render('sample')
}

const postCreateUser = (req, res) => {

    let { email, name, city } = req.body;

    // console.log(email, name, city, req.body);

    connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log("results", results);
            res.send('create a new user')
        }
    )
}

module.exports = {
    getHomepage,
    getABC,
    postCreateUser
}