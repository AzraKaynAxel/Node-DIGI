const service = require("../service/serviceComputer")

const controller = {
    getAll: async (req, res) => {
        try {
            const listeComputer = await service.getAll()
            res.send(listeComputer)
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    getById: async (req, res) => {
        try {
            const computer = await service.getById(req.params.id)
            res.send(computer)
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    create: async (req, res) => {
        try {
            const computer = await service.create(req.body)
            res.send(computer)
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    update: async (req, res) => {
        try {
            const computer = await service.update(req.params.id, req.body)
            res.send(computer)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = controller;