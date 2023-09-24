const { createCustomerService, createArayCustomerService, getAllCustomerService, putUpdateCustomerService, deleteCustomerService } = require("../services/customerService");
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
        let limit = req.query.limit;
        let page = req.query.page;
        let name = req.query.name;
        let results = null;
        if (limit && page) {
            results = await getAllCustomerService(limit, page, name, req.query);
        } else {
            results = await getAllCustomerService();
        }
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
    },

    deleteCustomer: async (req, res) => {
        let id = req.body.id;
        let results = await deleteCustomerService(id);
        return res.status(200).json({
            EC: 0,
            data: results
        })
    },

    deleteArrayCustomer: async (req, res) => {
        let ids = req.body.customersId;
        // console.log("customersId", ids)
        let results = await deleteCustomerService(ids);
        return res.status(200).json({
            EC: 0,
            data: results
        })
    },
}