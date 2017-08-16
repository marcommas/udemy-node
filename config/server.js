var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

//body-parser é um middleware, utiliza atraves do app use
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());


//com o consign realiza o autoload dos arquivos

//consign reconhece todos os arquivos da pasta routes, (faz um scan no sistema) 
//e inclui dentro da variavel app, que seria dentro do sistema

//para a conexão com o banco de dados é preciso passar a extensão .js
consign()
        .include('app/routes')
        .then('config/dbConnection.js')
        .then('app/models')
        .then('app/controllers')
        .into(app);


module.exports = app;