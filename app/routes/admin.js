module.exports = function(application){
    //Com o ejs utiliza o response render
    application.get('/formulario_inclusao_noticia', function(req, res){
       res.render("admin/form_add_noticia");
    });
    
    application.post('/noticias/salvar', function(req, res){
       
        //para utilizar o req.body, é preciso ter instalado o body-parser
        //npm install body-parser --save
        var noticia = req.body;
       
        var conn = application.config.dbConnection();
        var noticiaModel = application.app.models.noticiasModel;
        
        noticiaModel.salvarNoticia(noticia, conn, function (err, result) {
            //nao funcionou esse redirect
            res.redirect("/noticias");
        });
       
    });
}