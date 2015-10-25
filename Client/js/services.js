(function(){
	var app = angular.module('realtimeChatClient');
	app.factory('chatSocket', ['socketFactory', function(socketFactory){
			return socketFactory();
		}
	]);
})();