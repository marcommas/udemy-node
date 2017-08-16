module.exports.formulario_inclusao_noticia = function(application, req, res){
    
    //Com o ejs utiliza o response render
    res.render("admin/form_add_noticia",{validacao : {}, noticia : {}});
    
}

module.exports.noticias_salvar = function(application, req, res){
    
        var noticia = req.body;
        
        req.assert('brf_nome', 'Nome é obrigatório').notEmpty();
        req.assert('brf_cpf_cnpj', 'CPF/CNPJ é obrigatório').notEmpty();
        req.assert('brf_cpf_cnpj', 'CPF/CNPJ é precisa ter no minimo 9 e 15 caracteres.').len(9, 15);
        req.assert('brf_data_nascimento', 'Data precisa ser preenchida.').notEmpty();
        req.assert('brf_data_nascimento', 'Data precisa ser preenchida.').notEmpty().isDate({format: 'YYYY-MM-DD'});
        
        var erros = req.validationErrors();
           
           
        if (erros) {
            res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
            return;
        }
        
        var conn = application.config.dbConnection();
        var noticiaModel = new application.app.models.noticiasDAO((conn));
        
        noticiaModel.salvarNoticia(noticia, conn, function(err, result) {
            //nao funcionou esse redirect
            res.redirect("/noticias");
        });
}

