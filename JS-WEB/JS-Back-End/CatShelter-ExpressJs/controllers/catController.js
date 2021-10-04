const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

const cats = require('./../DB/cats.json');
const breeds = require('./../DB/breeds.json');
const dataManager = require('./../helpers/dataManager.js');


// Routers 
router.get('/add-breed', (req, res) => {
    res.render('addBreed');
});

router.get('/add-cat', (req, res) => {
    res.render('addCat', {
        breeds,
    })
});

router.get('/edit/:catId', (req, res) => {
    console.log(req.params.catId); 
    let currentCat = cats.filter(c => c.id == req.params.catId)[0];
    res.render('editCat', {currentCat});
});

router.get('/shelter/:catId', (req, res) => {
    console.log(req.params.catId); 
    let currentCat = cats.filter(c => c.id == req.params.catId)[0];
    res.render('catShelter', {currentCat});
});

router.post('/add-cat', (req, res, next) => {
    let form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        fs.rename(files.upload.path, path.resolve(__dirname, `./../public/images/${files.upload.name}`), () => {
            console.log('File saved successfully!');
        });

        let data = { id: cats.length + 1, ...fields, file: files.upload.name };
        dataManager.catSaver(data)
        .then(() => {
            res.redirect('/');
        });
    });
});

router.post('/add-breed', (req, res, next) => {
    let form = formidable({multiples: true});
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }

        let data = fields.breed;
        dataManager.breedSaver(data)
            .then(() => {
                res.redirect('/');
            });
    })
});


router.post('/edit/:catId', (req, res, next) => {
    let form = formidable({multiples: true});
    form.parse(req, (err, fileds, files) => {
        if (err) {
            next(err);
            return;
        }
        let catId = req.params.catId;
    });
});

router.delete('/shelter/:catId', (req, res) => {
    console.log(req.params.catId); 
    let currentCat = cats.filter(c => c.id == req.params.catId)[0];
    res.render('catShelter', {currentCat});
});





module.exports = router;

