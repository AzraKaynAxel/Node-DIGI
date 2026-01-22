const { Task, List } = require('../models/associations');

const taskService = {
    getAllTasks: async (userId) => {
        return await Task.findAll({
            where: { userId },
            include: [{
                model: List,
                as: 'list'
            }]
        });
    },

    getTaskById: async (id, userId) => {
        return await Task.findOne({
            where: { id, userId },
            include: [{
                model: List,
                as: 'list'
            }]
        });
    },


    createTask: async (data, userId) => {
        return await Task.create({ ...data, userId });
    },

    updateTask: async (id, data, userId) => {
        const task = await Task.findOne({ where: { id, userId } });
        if (task) {
            return await task.update(data);
        }
        return null;
    },

    deleteTask: async (id, userId) => {
        const task = await Task.findOne({ where: { id, userId } });
        if (task) {
            await task.destroy();
            return task;
        }
        return null;
    }
};


module.exports = taskService;
