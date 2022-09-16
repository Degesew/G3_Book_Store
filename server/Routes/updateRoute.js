import express from 'express'
import updateBook from '../Controller/updateController'

let updateRoute = express.Router()

updateRouter.post('/edit', updateBook)

export default updateRoute