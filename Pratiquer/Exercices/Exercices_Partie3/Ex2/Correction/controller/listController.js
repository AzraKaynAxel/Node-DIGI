const listService = require("../service/listService");

const listController = {
    getAllLists: async (req, res) => {
        try {
            const lists = await listService.getAllLists(req.user.userId);
            res.json(lists);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getListById: async (req, res) => {
        try {
            const list = await listService.getListById(req.params.id, req.user.userId);
            if (list) {
                res.json(list);
            } else {
                res.status(404).json({ message: "List not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createList: async (req, res) => {
        try {
            const newList = await listService.createList(req.body, req.user.userId);
            res.status(201).json(newList);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};


module.exports = listController;
