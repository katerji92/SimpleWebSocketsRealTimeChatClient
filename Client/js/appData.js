angular.module('realtimeChatClient.data', ['ngResource'])
.factory('Chats', ['$resource', function($resource){
	var server = $resource("http://localhost:3000/api/chats");
	return {
		save : function(newChat){
			server.save(newChat);
		},

		query : function(){
			return server.query();
		}
	};
}]);