const express = require('express');
// const router = require('express-promise-router')();
const router = require('express').Router();
const controller = require('../controller/users');
// const userCont = require('../controller');
// call helper functions from controller foler

// Connect controller methods to their corresponding routes
router.post('/form1', controller.formOne.post);
router.post('/form2', controller.formTwo.post);
router.post('/form3', controller.formThree.post);
router.get('/summary', controller.sum.get);



module.exports = router;