import express from 'express'
import deleteBook from '../Controller/deleteController'

let deleteRoute = express.Router()

deleteRoute.delete('/remove', deleteBook)

export default deleteRoute
