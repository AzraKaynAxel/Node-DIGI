const { Computer, Park } = require('../models/associations');

const service = {
    getAll: async () => {
        return await Computer.findAll({
            include: [{
                model: Park,
                as: 'park'
            }]
        });
    },
    getById: async (id) => {
        return await Computer.findByPk(id, {
            include: [{
                model: Park,
                as: 'park'
            }]
        });
    },
    create: async (computerData) => {
        return await Computer.create(computerData);
    },
    update: async (id, computerData) => {
        return await Computer.update(computerData, {
            where: {
                id: id
            }
        });
    }
};

module.exports = service;