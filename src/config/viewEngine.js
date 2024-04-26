const path = require('path');
const express = require('express');

const _dirname = './src'

const configViewEngine = (app)=> {
    app.set('views',path.join(_dirname,'views'));
    app.set('view engine', 'ejs')
    //config static file
    app.use(express.static(path.join(_dirname,'public')))
}

module.exports = configViewEngine; 