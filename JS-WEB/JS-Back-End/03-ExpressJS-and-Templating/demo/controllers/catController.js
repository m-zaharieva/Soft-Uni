const express = require('express');
const router = express.Router();

router.get('/navcho', (req, res) => {
    res.write('<h1>Navcho Rulez!!</h1>');
    res.end();
})

router.get('/:catName', (req, res) => {
    if (req.params.catName == 'gosho') {
        res.redirect('/cat/navcho');
        return;
    }
    res.header({'Content-Type': 'text/html'});
    res.write(`
    <h1>Cat Profile</h1>
    <h2>${req.params.catName}</h2>`);
    res.end();
});

module.exports = router;