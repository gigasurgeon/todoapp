var bodyparser= require('body-parser');
var urlparser = bodyparser.urlencoded({extended: false});
var todos= ["hud hud dabangg", "mushi mushi", "hey bahgwan", "ye kya ho gya nasha chha gya","lore ipsum dolor","this aint niggertown"];

function request_handler(server)
{
  server.get('/', function(req, res){
    res.render('index', {todos} );

  });

  server.post('/',urlparser, function(req,res)
  {
    todos.push(req.body.user_input);
    res.render('index', {todos});
  });

  server.delete('/', function(req, res)
  {


  });
}

module.exports={request_handler};
