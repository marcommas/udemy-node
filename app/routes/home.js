module.exports = function(app){
    //Com o ejs utiliza o response render
    app.get('/', function(req, res){
       res.render("home/index");
    });
}