module.exports = function(){
    
    var queryNoticias = "SELECT brf_id, brf_nome FROM adm.boleto_responsavel_financeiro WHERE brf_id = 292 OR brf_id = 290 ";
    this.getNoticias = function (conn, callback){
        conn.query(queryNoticias, callback)
    }
    
    var queryNoticia = "SELECT brf_id, brf_nome FROM adm.boleto_responsavel_financeiro WHERE brf_id = 290  ";
    this.getNoticia = function (conn, callback){
        conn.query(queryNoticia, callback)
    }
    
    this.salvarNoticia = function(noticia, conn, callback){
        var queryInsertNoticia = "INSERT INTO adm.boleto_responsavel_financeiro (brf_nome, brf_cpf_cnpj, brf_tipo_pessoa, brf_data_nascimento, brf_endereco_cep, brf_endereco_uf, brf_endereco_cidade, brf_endereco_bairro, brf_endereco_logradouro, brf_endereco_numero, brf_endereco_complemento, brf_data_hora_cadastro,brf_validado) VALUES ('" + noticia.nome + "','" + noticia.cpfCnpj + "', 'F', now(), '', '', '', '', '', '', '', now(), 'T')";
        
        try{
            conn.query(queryInsertNoticia);
        } catch (ex) {
          console.log(ex);
        }
    }
    
    
    return this;
    
}