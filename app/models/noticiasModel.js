module.exports = function(){
    
    var queryNoticias = "SELECT brf_id, brf_nome FROM adm.boleto_responsavel_financeiro WHERE brf_id = 292 OR brf_id = 290 ";
    this.getNoticias = function (conn, callback){
        conn.query(queryNoticias, callback)
    }
    
    var queryNoticia = "SELECT brf_id, brf_nome FROM adm.boleto_responsavel_financeiro WHERE brf_id = 290  ";
    this.getNoticia = function (conn, callback){
        conn.query(queryNoticia, callback)
    }
    
    return this;
    
}