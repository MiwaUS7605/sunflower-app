const express = require('express');
const router = express.Router();

const adminController = require('../components/admin/AdminController');

router.get('/', adminController.dashboard);
router.get('/dashboard', adminController.dashboard);
router.get('/revenue', adminController.revenue);
router.get('/order-history', adminController.history);
router.get('/chat', adminController.chat);
router.get('/feedback', adminController.feedback);
router.get('/google-map', adminController.location);
router.get('/signin', adminController.signin);
router.get('/signup', adminController.signup);

module.exports = router;