//module.exports = function(app){
//    
//    app.get('/noticia', function(req, res){
//        var conn = app.config.dbConnection();
//        var query = "SELECT brf_id, brf_nome FROM adm.boleto_responsavel_financeiro WHERE brf_id = 290  ";
//        try {
//          conn.query(query, function (err, result) {
////              res.send(result.rows);
//              res.render("noticias/noticia", {noticia: result.rows});
//          });
//        } catch (err) {
//          console.log("!!! ERRO DE EXCECAO Repositorio Apoio: " + err.message);
//        }
//    
//    });
//}
module.exports = function(app){
    
    app.get('/noticia', function(req, res){
        var conn = app.config.dbConnection();
        var noticiaModel = app.app.models.noticiasModel;
        
        try {
            noticiaModel.getNoticias(conn, function (err, result) {
                res.render("noticias/noticia", {noticia: result.rows});
            });
        } catch (err) {
          console.log("!!! ERRO DE EXCECAO Repositorio Apoio: " + err.message);
        }
    
    });
}