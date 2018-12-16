var express = require('express');
var categoryRepo = require('../repos/khachHangRepos');

var router = express.Router();

router.get('/', (req, res) => {
    categoryRepo.loadAll()
        .then(rows => {
            res.json(rows);
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on server console');
        })
})

router.post('/add', (req, res) => {
    var c = {
        HoTen: req.body.HoTen,
		DienThoai: req.body.DienThoai,
		DiaChi: req.body.DiaChi,
		GhiChu: req.body.GhiChu,
    }
    categoryRepo.add(c)
        .then(value => {
            console.log(value);
            res.statusCode = 201;
            res.json({
                msg: 'khachhang added'
            })
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on server console');
        })
})

router.delete('/remove/:id', (req, res) => {
    var id = +req.params.id;
    categoryRepo.delete(id)
        .then(value => {
            res.json({
                msg: 'khachhang deleted'
            })
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on server console');
        })
})

router.post('/edit', (req, res) => {
    var c = {
        HoTen: req.body.HoTen,
		DienThoai: req.body.DienThoai,
		DiaChi: req.body.DiaChi,
		GhiChu: req.body.GhiChu,
    }
    categoryRepo.add(c)
        .then(value => {
            console.log(value);
            res.statusCode = 201;
            res.json({
                msg: 'khachhang edited'
            })
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on server console');
        })
})

router.get('/:id', (req, res) => {
    var id = +req.params.id;
    productRepo.loadSingle(id)
        .then(rows => {
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.statusCode = 204;
                res.end('NO DATA');
            }
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on server console');
        })
})
module.exports = router;