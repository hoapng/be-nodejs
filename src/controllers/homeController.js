const connection = require("../config/database");

const getHomepage = (req, res) => {
    //xử lý data
    //call model
    let users = []

    connection.query(
        'SELECT * FROM Users',
        function (err, results, fields) {
            users = results;
            console.log("check results homepage", results); // results contains rows returned by server
            console.log("check users:", users)
            res.send(JSON.stringify(users))
        }
    );
}

const getABC = (req, res) => {
    res.render('sample')
}

module.exports = {
    getHomepage,
    getABC
}