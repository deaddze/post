import {body} from 'express-validator';

export const postCreateValidation = [
    body('photos').isString(),
    body('description').optional().isString()
]