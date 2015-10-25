/**
*  Module
*
* Description
*/
angular.module('realtimeChatClient', ['ngRoute', 'realtimeChatClient.data', 'btford.socket-io']).
	controller('ChatViewCntrl', ['$scope', 'Chats', 'chatSocket', function($scope, Chats, chatSocket){
		$scope.allChats = Chats.query();
		$scope.newChat = "";

		$scope.submitNewChat = function(){
			Chats.save({
				"user" : "User1",
				"message" : $scope.newChat
			})
			$scope.newChat = "";
		};

		chatSocket.on('chat', function(chat){
			$scope.allChats.push(chat);
		})
	}])

	.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/', {
			controller : 'ChatViewCntrl',
			templateUrl : 'partials/dashboard.html'
		}).otherwise({
			redirectTo: '/'
		});
	}]);