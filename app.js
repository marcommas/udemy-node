var app = require('./config/server');

//sem o consign, é preciso realizar dessa maneira as rotas
//var rotaNoticias = require('./app/routes/noticias')(app);
//
//var rotaHome = require('./app/routes/home')(app);
//
//var rotaFormInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia')(app);



app.listen(3000, function(){
    console.log("Servidor ON");
});