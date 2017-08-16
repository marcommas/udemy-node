module.exports.noticias = function(application, req, res){
    var conn = application.config.dbConnection();
    var noticiaModel = new application.app.models.noticiasDAO((conn));

    noticiaModel.getNoticias(conn, function (err, result) {
          res.render("noticias/noticias", {noticias: result.rows});
    });
}

module.exports.noticia = function(application, req, res){
    
        var conn = application.config.dbConnection();
        var noticiaModel = new application.app.models.noticiasDAO(conn);
        
        try {
            noticiaModel.getNoticias(conn, function (err, result) {
                res.render("noticias/noticia", {noticia: result.rows});
            });
        } catch (err) {
          console.log("!!! ERRO DE EXCECAO Repositorio Apoio: " + err.message);
        }

}