const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/controller.service');

// Create a new service
router.post('/add', serviceController.createService);

// Get all services
router.get('/get_all', serviceController.getAllServices);

// Get a single service by ID
router.get('/getSingle/:id', serviceController.getServiceById);

// Update a service by ID
router.put('/update/:id', serviceController.updateService);

// Delete a service by ID
router.delete('/delete/:id', serviceController.deleteService);

// Block a service by ID
router.put('/block/:id', serviceController.blockService);

module.exports = router;
