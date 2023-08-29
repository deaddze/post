import {body} from 'express-validator';

export const postCreateValidation = [
    body('photos').isString(),
    body('description').optional().isString(),
    body('comments').optional().isArray()
]

export const commentCreateValidation = [
    body('comments').isString()
]
