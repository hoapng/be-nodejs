const { createCustomerService, createArayCustomerService, getAllCustomerService, putUpdateCustomerService } = require("../services/customerService");
const { uploadSingleFile } = require("../services/fileService");

module.exports = {
    postCreateCustomer: async (req, res) => {

        let { name, address, phone, email, description } = req.body;
        let imageUrl = '';

        if (!req.files || Object.keys(req.files).length === 0) {

        } else {
            let results = await uploadSingleFile(req.files.image);
            imageUrl = results.path;
        }


        let customerData = { name, address, phone, email, description, image: imageUrl };
        let customer = await createCustomerService(customerData)

        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },

    postCreateArrayCustomer: async (req, res) => {
        let customers = await createArayCustomerService(req.body.customers);
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            })
        } else {
            return res.status(200).json({
                EC: -1,
                data: customers
            })
        }
    },

    getAllCustomer: async (req, res) => {
        let results = await getAllCustomerService();
        return res.status(200).json({
            EC: 0,
            data: results
        })

    },

    puttUpdateCustomer: async (req, res) => {
        let { id, name, email, address } = req.body;
        let results = await putUpdateCustomerService(id, name, email, address);
        return res.status(200).json({
            EC: 0,
            data: results
        })

    }
}