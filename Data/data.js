module.exports = function(app, http){
	var bodyParser = require('body-parser');
	var jsonParser = bodyParser.json();
	var urlencodedParser = bodyParser.urlencoded({extended:true});

	var chats = [{
			user: 'user1' ,
			message : 'Hellooo'
		}
	];

	var io = require('socket.io')(http);
	io.on('connect', function(socket){
		console.log('a user has connected');
		socket.on('disconnect', function(){
			console.log('a user has disconnected');
		});
	});

	app.get('/api/chats', function(req, res){
	'use-strict';
		res.send(chats);
	});

	app.post('/api/chats', jsonParser, function(req,res){
		'use-strict';

		chats.push(req.body);
		
		io.emit('chat', req.body);

		return res.sendStatus(200);
	});
}