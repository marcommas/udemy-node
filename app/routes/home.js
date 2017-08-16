module.exports = function(application){
    //Com o ejs utiliza o response render
    application.get('/', function(req, res){
//       res.render("home/index");
        application.app.controllers.home.index(application, req, res);
    });
}