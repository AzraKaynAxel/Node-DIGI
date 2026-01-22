const { List, Task } = require('../models/associations');

const listService = {
    getAllLists: async (userId) => {
        return await List.findAll({ where: { userId } });
    },

    getListById: async (id, userId) => {
        return await List.findOne({
            where: { id, userId },
            include: [{ model: Task, as: 'tasks' }]
        });
    },

    createList: async (data, userId) => {
        return await List.create({ ...data, userId });
    }
};


module.exports = listService;
