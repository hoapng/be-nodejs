const Customer = require('../models/customer')
const aqp = require('api-query-params');


const createCustomerService = async (customerData) => {
    try {
        let results = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        });
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const createArayCustomerService = async (arr) => {
    try {
        let results = await Customer.insertMany(arr)
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getAllCustomerService = async (limit, page, name, queryString) => {
    try {
        let results = null;
        if (limit && page) {
            let offset = (page - 1) * limit;

            const { filter } = aqp(queryString);
            delete filter.page;
            results = await Customer.find(filter).skip(offset).limit(limit).exec();
        } else {
            results = await Customer.find({});
        }
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const putUpdateCustomerService = async (id, name, email, address) => {
    try {
        let results = await Customer.updateOne({ _id: id }, { name, email, address });
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const deleteCustomerService = async (id) => {
    try {
        let results = await Customer.deleteById(id);
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const deleteArrayCustomerService = async (arrIds) => {
    try {
        let results = await Customer.delete({ _id: { $in: arrIds } });
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    createCustomerService,
    createArayCustomerService,
    getAllCustomerService,
    putUpdateCustomerService,
    deleteCustomerService
}