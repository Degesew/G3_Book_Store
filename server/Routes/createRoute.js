import express from 'express'
import createTable from '../Controller/createController'


let createRoute = express.Router();

createRoute.get('/create',createTable)

export default createRoute; 
