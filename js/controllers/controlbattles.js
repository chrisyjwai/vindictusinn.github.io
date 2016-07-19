var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('/json/QuestInfo.json').success (function(data){
				$scope.ItemVariable = data;

				setTimeout(function(){
				WhatIsTheURL = window.location.pathname
						if (WhatIsTheURL == '/search.html') {$('.mainiteminput').val(search).trigger('input');}	
						
				console.log('DataTable loaded.')
						if (WhatIsTheURL.indexOf('expertise') == 1) {
							$('.nametable').DataTable({
								"order": [[ 2, "asc" ]]
							});
						} else {
							$('.nametable').DataTable({
								"order": [[ 1, "asc" ]]
							});
						}
				var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})	
	
}, 200);
			}); 
		}]
);

ItemControllers.controller("DetailsController", ['$scope','$http','$routeParams',
	 function($scope, $http, $routeParams)
		{    
				$http.get('/json/QuestInfo.json').success (function(data){
				$scope.ItemVariable = data;
					
				$scope.whichItem = $routeParams.ItemID;
				$scope.keyToDisplay = 'ID';
				setTimeout(function(){
				WhatIsTheURL = window.location.pathname
						if (WhatIsTheURL == '/search.html') {$('.mainiteminput').val(search).trigger('input');}

					console.log('DataTable loaded.')
						if (WhatIsTheURL.indexOf('expertise') == 1) {
							$('.nametable').DataTable({
								"order": [[ 2, "asc" ]]
							});
						} else {
							$('.nametable').DataTable({
								"order": [[ 1, "asc" ]]
							});
						}
					var menu = "/js/battledesc.js";
							$.getScript( menu, function() {
								BattleQuote()
							})	
					var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})	
					$('#tabs').tabs();
					$('#battletabs').tabs();
}, 200);
			}); 
		}]
);