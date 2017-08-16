function NoticiasDAO(conn){
    this._conn = conn;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    var queryNoticias = "SELECT brf_id, brf_nome FROM adm.boleto_responsavel_financeiro WHERE brf_id = 292 OR brf_id = 290 ";
    this._conn.query(queryNoticias, callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    var queryNoticia = "SELECT brf_id, brf_nome FROM adm.boleto_responsavel_financeiro WHERE brf_id = 290  ";
    this._conn.query(queryNoticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    console.log(noticia);
    var queryInsertNoticia = "INSERT INTO adm.boleto_responsavel_financeiro (brf_nome, brf_cpf_cnpj, brf_tipo_pessoa, brf_data_nascimento, brf_endereco_cep, brf_endereco_uf, brf_endereco_cidade, brf_endereco_bairro, brf_endereco_logradouro, brf_endereco_numero, brf_endereco_complemento, brf_data_hora_cadastro,brf_validado) VALUES ('" + noticia.brf_nome + "','" + noticia.brf_cpf_cnpj + "', 'F','" + noticia.brf_data_nascimento + "', '', '', '', '', '" + noticia.brf_endereco_logradouro + "' , '', '', now(), 'T')";
    
    console.log(queryInsertNoticia);
    try{
        this._conn.query(queryInsertNoticia, callback);
    } catch (ex) {
      console.log(ex);
    }
}

module.exports = function(){
    
    return NoticiasDAO;
    
}