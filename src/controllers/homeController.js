const getHomepage = (req, res) => {
    //xử lý data
    //call model
    res.send('Hello World!Test nodemon')
}

const getABC = (req, res) => {
    res.render('sample')
}

module.exports = {
    getHomepage,
    getABC
}