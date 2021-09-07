const express = require('express');
const contactController = require('../Controller/contactController')

const router = express.Router();



router.post('/contact/save' ,contactController.Store);
router.get('/contact/list', contactController.Index);
router.get('/contact/list/:id', contactController.IndexOne);
router.get('/contact/delete/:id', contactController.DeleteOne);


module.exports = router;