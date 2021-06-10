const http = require('http')
const fs = require('fs')
const port = 4011

const server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type' : 'text/html'})
	fs.readFile('FoodProject.html', function(error,data){
		if(error){
          res.writeHead(404)
          res.write('Error: File Not Found')
		} else {
			res.write(data)
		}
		res.end()
	})

})

server.listen(port,function(error){
  if(error){
  	console.log('Something Went Wrong')
  } else {
    console.log('Server is listening on port' + port)
  }
})

/*
let express = require('express');
var bodyParser = require('body-parser');
//var routes = require("./routes");   //new

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('./'));   //new
app.use('/js', express.static('./public/js'));   //new
//app.use(routes);  //new


//app.use('/', express.static('./'));   //new

//req is info sending to server from client.
//res is info sending to client from server.

let port = process.env.PORT || 4011;
app.listen(port);
*/
