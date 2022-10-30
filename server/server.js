// *************** Imports *****************
const cors 	        = require('cors');
const express 	    = require('express');
require('dotenv').config({ path: './../.env' });
const colors        = require('colors');

const db            = require('./db')
const getItems      = require('./routes/getItems')
const addItem       = require('./routes/addItem');
const updateItem    = require('./routes/updateItem');
const deleteItem    = require('./routes/deleteItem');
const messages      = require('./helpers/messages');

// *************** Constants and variables ***************
const server 	= express();
const port      = process.env.REACT_APP_SERVER_PORT;

// *************** Middleware *************** 
server.use(cors());
server.use(express.json());

// *************** Routes *************** 
server.get('/allCompanies'          , getItems.all);
server.get('/allJobs'               , getItems.all);
server.get('/job/:id'               , getItems.jobByID);
server.get('/company/:id'           , getItems.companyByID);
server.post('/addJob'               , addItem.job);
server.post('/addCompany'           , addItem.company);
server.post('/addEmployee'          , addItem.employee);
server.put('/updateCompany'         , updateItem.company);
server.put('/updateJob'             , updateItem.job);
server.put('/updateEmployee'        , updateItem.employee);
server.delete('/deleteCompany/:id'  , deleteItem.company);
server.delete('/deleteJob/:id'      , deleteItem.job);

// Testing Docker container
server.get('/', (req, res) => res.send(`Good day! ${process.env.TEST_PARAM}`));

// *************** Inititialisation ***************

server.listen(  port, 
                err => console.log(err ||
                messages.portListening, port.green));

