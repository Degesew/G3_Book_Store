import express from 'express'
import newBook from '../Controller/insertController'

let insertRoute = express.Router();

insertRoute.post('/addbooks',newBook)

export default insertRoute