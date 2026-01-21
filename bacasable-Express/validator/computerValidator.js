const { body, param } = require('express-validator');

const computerValidator = [
    body('marque')
        .notEmpty().withMessage('La marque est obligatoire')
        .isString().withMessage('La marque doit être une chaîne de caractères')
        .isLength({ min: 2 }).withMessage('La marque doit avoir au moins 2 caractères'),
    body('prix')
        .notEmpty().withMessage('Le prix est obligatoire')
        .isFloat({ min: 0 }).withMessage('Le prix doit être un nombre positif')
];

const idComputerValidator = [
    param('id')
        .notEmpty().withMessage('L\'id est obligatoire')
        .isInt().withMessage('L\'id doit être un nombre entier')
];

module.exports = { computerValidator, idComputerValidator };
