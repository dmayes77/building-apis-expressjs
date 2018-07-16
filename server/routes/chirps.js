const express = require('express');
const chirpStore = require('../chirpstore');

let router = express.Router();

//Index Route - list all chirps
router.get('/', (req, res) => {
	res.send(chirpStore.GetChirps());
});

//Show Route - show info about one specific chirp
router.get('/:id', (req, res) => {
	let id = req.params.id;
	res.send(chirpStore.GetChirp(id));
});

//Create Route - create a new chirp
router.post('/', (req, res) => {
	chirpStore.CreateChirp(req.body);
	res.sendStatus(200);
});

//Update Route - update a specific chirp
router.put('/:id', (req, res) => {
	let id = req.params.id;
	chirpStore.UpdateChirp(id, req.body);
	res.sendStatus(200);
});

//Delete Route - delete a specific chirp
router.delete('/:id', (req, res) => {
	let id = req.params.id;
	chirpStore.DeleteChirp(id);
	res.sendStatus(200);
});

module.exports = router;
