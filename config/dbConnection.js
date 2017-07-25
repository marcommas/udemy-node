
var pgPool = require('pg');

var connPg = function(){
    console.log("conexão foi estabelecida");
    
    var conString = "pg://user:password@localhost:5432/database";

    var client = new pgPool.Client(conString);
    client.connect();
    
    return client;

};

module.exports = function(){
    
    console.log("o autoload carregou a conexao");
    return connPg;
    

}