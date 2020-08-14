const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
	res.render('eventos')
});

router.get('/evinfantiles' , (req, res) =>{
 	res.render('evinfantiles')
 });

router.get('/evgraduaciones' , (req, res) =>{
 	res.render('evgraduaciones')
 });

router.get('/evbodas' , (req, res) =>{
 	res.render('evbodas')
 });

router.get('/evXV', (req, res) =>{
	res.render('evXV')
});

module.exports = router;
