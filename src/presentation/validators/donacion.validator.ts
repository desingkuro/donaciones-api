import { body, param } from "express-validator";

export  const donacionesCreateValidator = [
    body('idTipoDonacion').notEmpty().withMessage('El idTipoDonacion es obligatorio'),
    body('idDonador').notEmpty().withMessage('El idDonador es obligatorio'),
    body('idCampania').notEmpty().withMessage('El idCampania es obligatorio'),
    body('fechaCreacion').notEmpty().withMessage('La fechaCreacion es obligatoria'),
    body('state').notEmpty().withMessage('El state es obligatorio'),
    body('checker').notEmpty().withMessage('El checker es obligatorio'),
]

export const donacionesDeleteValidator = [
    param('id').notEmpty().withMessage('El id es obligatorio'),
]
    