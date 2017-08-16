module.exports = function(application) {
    //Com o ejs utiliza o response render
    application.get('/formulario_inclusao_noticia', function(req, res) {
//        res.render("admin/form_add_noticia",{validacao : {}, noticia : {}});
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
    });
    
    application.post('/noticias/salvar', function(req, res) {
        
        //Coloquei esta conteudo comentado na pasta controllers/admin,
        //assim a regra de negócio fica separada da rota
        //para utilizar o req.body, é preciso ter instalado o body-parser
        //npm install body-parser --save
//        var noticia = req.body;
//        
//        req.assert('brf_nome', 'Nome é obrigatório').notEmpty();
//        req.assert('brf_cpf_cnpj', 'CPF/CNPJ é obrigatório').notEmpty();
//        req.assert('brf_cpf_cnpj', 'CPF/CNPJ é precisa ter no minimo 9 e 15 caracteres.').len(9, 15);
//        req.assert('brf_data_nascimento', 'Data precisa ser preenchida.').notEmpty();
//        req.assert('brf_data_nascimento', 'Data precisa ser preenchida.').notEmpty().isDate({format: 'YYYY-MM-DD'});
//        
//        var erros = req.validationErrors();
//           
//           
//        if (erros) {
//            res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
//            return;
//        }
//        
//        var conn = application.config.dbConnection();
//        var noticiaModel = new application.app.models.noticiasDAO((conn));
//        
//        noticiaModel.salvarNoticia(noticia, conn, function(err, result) {
//            //nao funcionou esse redirect
//            res.redirect("/noticias");
//        });
        
        application.app.controllers.admin.noticias_salvar(application, req, res);
    });
}