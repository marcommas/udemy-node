module.exports = function(app){
    //Com o ejs utiliza o response render
    app.get('/formulario_inclusao_noticia', function(req, res){
       res.render("admin/form_add_noticia");
    });
    
    app.post('/noticias/salvar', function(req, res){
       
        //para utilizar o req.body, é preciso ter instalado o body-parser
        //npm install body-parser --save
        var noticias = req.body;
       
        res.send(noticias);
       
    });
}