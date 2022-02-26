const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index', {
        breads: Bread,
        title: 'Index Page'
    })
})

// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    //res.send(Bread[req.params.arrayIndex])
    if (Bread[req.params.arrayIndex]) {
        res.render('show', {
            bread: Bread[req.params.arrayIndex]
        })
    } else {
        res.render('NotFound')
    }
})

// CREATE
breads.post('/', (req, res) => {
    console.log(req.body)
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten === 'true'
    } else {
        req.body.hasGlutten === 'false'
    }
    Bread.push(req.body)
    res.redirect('/breads')
})

module.exports = breads