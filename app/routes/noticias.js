//Da maneira antiga, sem o consign que carrega o banco dade dados
////module.exports = function(app){
//    
//    //Com o ejs utiliza o response render
//    app.get('/noticias', function(req, res){
//        var pgPool = require('pg').Pool;
//    
//        const config = require('../../config/config');
//        var conn = new pgPool(config.baseInfodigi);
//
//        var query = "SELECT brf_id, brf_nome FROM adm.boleto_responsavel_financeiro WHERE brf_id = 292 OR brf_id = 290 ";
//        try {
//          conn.query(query, function (err, result) {
////              res.send(result.rows);
//              res.render("noticias/noticias", {noticias: result.rows});
//          });
//        } catch (e) {
//          console.log("!!! ERRO DE EXCECAO Repositorio Apoio: " + e.message);
//          cError(e);
//        }
//    
//    });
//}

//Sem o autoload de Models
//module.exports = function(app){
//    
//    app.get('/noticias', function(req, res){
//        
//        var conn = app.config.dbConnection();
//        
////        conn.connect();
//        var query = "SELECT brf_id, brf_nome FROM adm.boleto_responsavel_financeiro WHERE brf_id = 292 OR brf_id = 290 ";
//        try {
//          conn.query(query, function (err, result) {
////              res.send(result.rows);
//              res.render("noticias/noticias", {noticias: result.rows});
//          });
//        } catch (err) {
//          console.log("!!! ERRO DE EXCECAO Repositorio Apoio: " + err.message);
//        }
//    
//    });
//}


module.exports = function(application){
    
    application.get('/noticias', function(req, res){
        
//        var conn = application.config.dbConnection();
//        var noticiaModel = new application.app.models.noticiasDAO((conn));
//        
//        noticiaModel.getNoticias(conn, function (err, result) {
//              res.render("noticias/noticias", {noticias: result.rows});
//        });
        
        
//        conn.connect();
//        var query = "SELECT brf_id, brf_nome FROM adm.boleto_responsavel_financeiro WHERE brf_id = 292 OR brf_id = 290 ";
//        try {
//          conn.query(query, function (err, result) {
////              res.send(result.rows);
//              res.render("noticias/noticias", {noticias: result.rows});
//          });
//        } catch (err) {
//          console.log("!!! ERRO DE EXCECAO Repositorio Apoio: " + err.message);
//        }
        
        application.app.controllers.noticias.noticias(application, req, res);
    });
    
    application.get('/noticia', function(req, res){
//        var conn = application.config.dbConnection();
//        var noticiaModel = new application.app.models.noticiasDAO(conn);
//        
//        try {
//            noticiaModel.getNoticias(conn, function (err, result) {
//                res.render("noticias/noticia", {noticia: result.rows});
//            });
//        } catch (err) {
//          console.log("!!! ERRO DE EXCECAO Repositorio Apoio: " + err.message);
//        }
        
        application.app.controllers.noticias.noticia(application, req, res);
    });
}