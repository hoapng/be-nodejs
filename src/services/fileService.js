const uploadSingleFile = async (fileObject) => {
    let uploadPath = __dirname + fileObject.name;
    try {
        await fileObject.mv(uploadPath)
        return {
            status: 'success',
            path: 'link-image',
            error: null
        }
    } catch (err) {
        console.log("error", err)
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        }
    }
}

module.exports = uploadSingleFile