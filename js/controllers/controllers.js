var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('/json/ItemClassInfo.json').success (function(data){
				$scope.ItemVariable = data;
					$http.get('/json/EquipItemInfo.json').success (function(data2){
					$scope.EquipItemInfo = data2;})
				setTimeout(function(){
						WhatIsTheURL = window.location.pathname
						if (WhatIsTheURL == '/search.html') {$('.mainiteminput').val(search).trigger('input');}
						
						RemoveSearch = function(){$('#searchmenu').children().children().first().attr('value','')}
						$('#searchmenu').click(RemoveSearch)
						
						setTimeout(function(){
						itemtooltipClass = document.getElementsByClassName('itemtooltip')
						itemtooltipClassLength = itemtooltipClass.length;
						for (var i = 0; i < itemtooltipClassLength; i++) {
							ItemClassName = itemtooltipClass[i].getAttribute('value')
							$('.Input'+ItemClassName).val(ItemClassName);
						}
						},5000)
						$('.weight').each(function(){
								weight = parseInt($(this).attr('value'));
								updateweight = weight.toFixed(0);
								$(this).children().html(updateweight);
						})
						$('.number').each(function(){
							grab = parseInt($(this).html())
							if (grab > 0) {
								convert = grab.toLocaleString()
								$(this).html(convert)
							} else {$(this).html('')}
						})
						$('.hidetooltip').each(function(){
							$(this).children().hide()
							$(this).prev().mouseover(function(){
								$(this).next().children().show()
								$(this).next().show()
								})
							$(this).prev().mouseout(function(){
								$(this).next().children().hide()
								$(this).next().hide()
								})
						})
					$('.classresvalue').each(function(){
						checkclasses = $(this).html()
							if (checkclasses != '2047') {
							$(this).parent().show();
							if (checkclasses == '1') {$(this).html('Lann')}
							if (checkclasses == '2') {$(this).html('Fiona')}
							if (checkclasses == '33') {$(this).html('Lann, Vella')}
							if (checkclasses == '4') {$(this).html('Evie')}
							if (checkclasses == '8') {$(this).html('Karok')}
							if (checkclasses == '16') {$(this).html('Kai')}
							if (checkclasses == '64') {$(this).html('Hurk')}
							if (checkclasses == '128') {$(this).html('Lynn')}
							if (checkclasses == '256') {$(this).html('Arisha')}
							if (checkclasses == '512') {$(this).html('Sylas')}
							if (checkclasses == '1185') {$(this).html('Lann, Vella, Lynn')}
							if (checkclasses == '516') {$(this).html('Evie, Sylas')}
							if (checkclasses == '260') {$(this).html('Evie, Arisha')}
							if (checkclasses == '72') {$(this).html('Karok, Hurk')}
							if (checkclasses == '772') {$(this).html('Evie, Arisha, Sylas')}
							if (checkclasses == '1024') {$(this).html('Delia')}
							if (checkclasses == '1446') {$(this).html('Fiona, Evie, Vella, Lynn, Arisha, Delia')}
							if (checkclasses == '601') {$(this).html('Lann, Karok, Kai, Hurk, Sylas')}
							if (checkclasses == '1975') {$(this).html('Lann, Fiona, Evie, Kai, Vella, Lynn, Arisha, Sylas, Delia')}
							if (checkclasses == '1983') {$(this).html('Lann, Fiona, Evie, Karok, Kai, Vella, Lynn, Arisha, Sylas, Delia')}
							if (checkclasses == '529') {$(this).html('Lann, Kai, Sylas')}
							if (checkclasses == '1518') {$(this).html('Fiona, Evie, Karok, Vella, Hurk, Lynn, Arisha, Delia')}
						} else {
							$(this).parent().hide();
						}
					})
					$('.checkreqlvl').each(function(){
						checklvl = $(this).html()
							if (checklvl > '1') {
							$(this).parent().show();
						} else {
							$(this).parent().hide();
						}
					})
					$('.checkskillreq').each(function(){
						checkskill = $(this).html()
							if (checkskill != "") {
							$(this).parent().show();
						} else {
							$(this).parent().hide();
						}
					})
					$('.skillrank').each(function(){
						WhatIsTheSkillRank = $(this).attr('value')
						if (WhatIsTheSkillRank == '1') {$(this).html('F')}
						if (WhatIsTheSkillRank == '2') {$(this).html('E')}
						if (WhatIsTheSkillRank == '3') {$(this).html('D')}
						if (WhatIsTheSkillRank == '4') {$(this).html('C')}
						if (WhatIsTheSkillRank == '5') {$(this).html('B')}
						if (WhatIsTheSkillRank == '6') {$(this).html('A')}
						if (WhatIsTheSkillRank == '7') {$(this).html('9')}
						if (WhatIsTheSkillRank == '8') {$(this).html('8')}
						if (WhatIsTheSkillRank == '9') {$(this).html('7')}
						if (WhatIsTheSkillRank == '10') {$(this).html('6')}
						if (WhatIsTheSkillRank == '11') {$(this).html('5')}
						if (WhatIsTheSkillRank == '12') {$(this).html('4')}
						if (WhatIsTheSkillRank == '13') {$(this).html('3')}
						if (WhatIsTheSkillRank == '14') {$(this).html('2')}
						if (WhatIsTheSkillRank == '15') {$(this).html('1')}
					})
					$('.itemrarity').each(function(){
						ItemRarity = $(this).attr('value')
						if (ItemRarity == 0) {$(this).prepend('Regular')}
						if (ItemRarity == 1) {$(this).prepend('Regular')}
						if (ItemRarity == 2) {$(this).prepend('Beginner')}
						if (ItemRarity == 3) {$(this).prepend('Fine')}
						if (ItemRarity == 4) {$(this).prepend('Superior')}
						if (ItemRarity == 5) {$(this).prepend('Rare')}
					} )
					setTimeout(function(){$('.stat').each(function() {
							doihide = $(this).attr("value");
							if (doihide != 0) {
								$(this).show();
							} else {$(this).hide();}
						});
					},10000)
					$('.tagname').each(function(){
						tagpopup = $(this).attr('title');
						replacetag = tagpopup.replace(/_/g, ' ');
						$(this).attr('title',replacetag)
					});
					$('.weight').each(function() {
							doihide = $(this).attr("value");
							if (doihide != "") {
								$(this).show();
							} else {$(this).hide();}
						});
					$('.eventcheck').each(function(){
						IsThisEvent = $(this).attr('value')
						if (IsThisEvent == 'DEFAULT') {
								$(this).html('No')
						}
					})
					$('.trade').each(
						function(){
							checktrade = $(this).attr('value')
							if (checktrade == 'DEFAULT') {
								$(this).html('This item cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							} else {
								$(this).html('Can use all forms of trade')
							}
						}
					)
					$('.desc').each(
						function(){
							ValueofDesc = $(this).attr('value')
							TransformedDescClass = ValueofDesc.replace(/ /g,'_')
							$(this).addClass('ItemDesc_'+TransformedDescClass)
						}
					)
				setTimeout(function(){$('input').trigger('input')},9000)
				setTimeout(function(){
					var url = "/js/descriptions.js";
							$.getScript( url, function() {
								RunningDescriptions()
							})
				},9000)
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
				$http.get('/json/ItemClassInfo.json').success (function(data){
				$scope.ItemVariable = data;
					$http.get('/json/EquipItemInfo.json').success (function(data2){
					$scope.EquipItemInfo = data2;
					});
					$http.get('/json/RecipeMaterialInfo.json').success (function(data3){
					$scope.RecipeMaterialInfo = data3;
					})
				$scope.whichItem = $routeParams.ItemID;
				$scope.keyToDisplay = 'ItemClass';
				setTimeout(function(){
					WhatIsTheURL = window.location.pathname
					RemoveSearch = function(){$('#searchmenu').children().children().first().attr('value','')}
					$('#searchmenu').click(RemoveSearch)
					weight = parseInt($('#weight').attr('value'));
					updateweight = weight.toFixed(0);
					$('#changeweight').html(updateweight);
					replacestart = $('#valueitem').attr('value');
					ItemClass = $('#valueitem').attr('value');
					$('title').html(replacestart + ' &bull; VinDB');
					finalreplace = replacestart.replace(/ /g,"_");
					$('.iteminput').val(finalreplace).trigger('input');
					$('.itemtooltip').each(function(){
							ItemClassName = $(this).attr('value')
							$('.Input'+ItemClassName).val(ItemClassName).trigger('input');
						})
					$('.mainiteminput').val(ItemClass).trigger('input');
					$('.itemdetail').each(function(){
							RecipeID = $(this).attr('value')
							$('.Recipe'+RecipeID).val('recipe_'+RecipeID).trigger('input');
						})
					$('.RecipeID').each(function(){
							NPCMatID = $(this).attr('value')
							$('.NPC'+NPCMatID).val(NPCMatID).trigger('input');
						})
					$('#classresvalue').each(
					function(){
					checkclasses = $('#classresvalue').html();
					if (checkclasses != '2047') {
						$('#classres').show();
					} 
					if (checkclasses == '1') {$(this).html('Lann')}
							if (checkclasses == '2') {$(this).html('Fiona')}
							if (checkclasses == '33') {$(this).html('Lann, Vella')}
							if (checkclasses == '4') {$(this).html('Evie')}
							if (checkclasses == '8') {$(this).html('Karok')}
							if (checkclasses == '16') {$(this).html('Kai')}
							if (checkclasses == '64') {$(this).html('Hurk')}
							if (checkclasses == '128') {$(this).html('Lynn')}
							if (checkclasses == '256') {$(this).html('Arisha')}
							if (checkclasses == '512') {$(this).html('Sylas')}
							if (checkclasses == '1185') {$(this).html('Lann, Vella, Lynn')}
							if (checkclasses == '516') {$(this).html('Evie, Sylas')}
							if (checkclasses == '260') {$(this).html('Evie, Arisha')}
							if (checkclasses == '72') {$(this).html('Karok, Hurk')}
							if (checkclasses == '772') {$(this).html('Evie, Arisha, Sylas')}
							if (checkclasses == '1024') {$(this).html('Delia')}
							if (checkclasses == '1446') {$(this).html('Fiona, Evie, Vella, Lynn, Arisha, Delia')}
							if (checkclasses == '601') {$(this).html('Lann, Karok, Kai, Hurk, Sylas')}
							if (checkclasses == '1975') {$(this).html('Lann, Fiona, Evie, Kai, Vella, Lynn, Arisha, Sylas, Delia')}
							if (checkclasses == '1983') {$(this).html('Lann, Fiona, Evie, Karok, Kai, Vella, Lynn, Arisha, Sylas, Delia')}
							if (checkclasses == '529') {$(this).html('Lann, Kai, Sylas')}
							if (checkclasses == '1518') {$(this).html('Fiona, Evie, Karok, Vella, Hurk, Lynn, Arisha, Delia')}
					})
					checklvl = $('#checkreqlvl').html();
					if (checklvl > '1') {
						$('#requlvl').show();
					}
					checkskill = $('#checkskillreq').html();
					if (checkskill != "") {
						$('#skilllvlres').show();
					}
					checkmaxdura = $('#checkmaxdura').html();
					if (checkmaxdura != "") {
						$('#maxdura').show();
					}
					checkarmorhp = $('#checkarmorhp').html();
					if (checkarmorhp != "") {
						$('#armorhp').show();
					}
					$('.tagname').each(function(){
							console.log('I swapped the underscores for you.')
							tagpopup = $(this).attr('title');
							replacetag = tagpopup.replace(/_/g, ' ');
							replaceforlink = tagpopup.replace(/_/g, '+');
							$(this).attr('title',replacetag)
							$(this).parent().attr('href','http://db.vindictusinn.com/search.html?find='+replaceforlink)
						});
					$('.desc').each(function(){
					hidedesc = $(this).html();
						if (hidedesc != "") {
						$(this).css({'display':'block'});
						GetReadytoReplaceDesc = $(this).html();
						ReplacedDesc = GetReadytoReplaceDesc.replace(/\\n/g, "<br/>")
						$(this).html(ReplacedDesc)
						}
					})
					$('.number').each(function(){
							grab = parseInt($(this).html())
							convert = grab.toLocaleString()
							$(this).html(convert)
						})
					$('.trade').each(
						function(){
							checktrade = $(this).attr('value')
							if (checktrade == 'DEFAULT') {
								$(this).html('This item cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							} else {
								$(this).html('Can use all forms of trade')
							}
						}
					)
					$('.NPCCraft').each(function(){
						IsThereANPC = $(this).html()
						if (IsThereANPC == '') {
							$(this).parent().hide()
						}
					})
					$('.fee').each(function(){
						IsThereGold = $(this).html()
					})
					$('.manufacture').each(function(){
						IsThereManuID = $(this).html()
						
					})
					$('.weight').each(function(){
								weight = parseInt($(this).attr('value'));
								updateweight = weight.toFixed(0);
								$(this).children().html(updateweight);
						})
						
						$('.hidetooltip').each(function(){
							$(this).children().hide()
							$(this).prev().mouseover(function(){
								$(this).next().children().show()
								$(this).next().show()
								})
							$(this).prev().mouseout(function(){
								$(this).next().children().hide()
								$(this).next().hide()
								})
						})
					$('.classresvalue').each(function(){
						checkclasses = $(this).html()
							if (checkclasses != '2047') {
							$(this).parent().show();
						} else {
							$(this).parent().hide();
						}
							if (checkclasses == '1') {$(this).html('Lann')}
							if (checkclasses == '2') {$(this).html('Fiona')}
							if (checkclasses == '33') {$(this).html('Lann, Vella')}
							if (checkclasses == '4') {$(this).html('Evie')}
							if (checkclasses == '8') {$(this).html('Karok')}
							if (checkclasses == '16') {$(this).html('Kai')}
							if (checkclasses == '32') {$(this).html('Vella')}
							if (checkclasses == '64') {$(this).html('Hurk')}
							if (checkclasses == '128') {$(this).html('Lynn')}
							if (checkclasses == '256') {$(this).html('Arisha')}
							if (checkclasses == '512') {$(this).html('Sylas')}
							if (checkclasses == '1185') {$(this).html('Lann, Vella, Lynn')}
							if (checkclasses == '516') {$(this).html('Evie, Sylas')}
							if (checkclasses == '72') {$(this).html('Karok, Hurk')}
							if (checkclasses == '772') {$(this).html('Evie, Arisha, Sylas')}
							if (checkclasses == '1024') {$(this).html('Delia')}
							if (checkclasses == '1446') {$(this).html('Fiona, Evie, Vella, Lynn, Arisha, Delia')}
							if (checkclasses == '601') {$(this).html('Lann, Karok, Kai, Hurk, Sylas')}
					})
					$('.checkreqlvl').each(function(){
						checklvl = $(this).html()
							if (checklvl > '1') {
							$(this).parent().show();
						} else {
							$(this).parent().hide();
						}
					})
					$('.checkskillreq').each(function(){
						checkskill = $(this).html()
							if (checkskill != "") {
							$(this).parent().show();
						} else {
							$(this).parent().hide();
						}
					})
					$('.skillrank').each(function(){
						WhatIsTheSkillRank = $(this).attr('value')
						if (WhatIsTheSkillRank == '1') {$(this).html('F')}
						if (WhatIsTheSkillRank == '2') {$(this).html('E')}
						if (WhatIsTheSkillRank == '3') {$(this).html('D')}
						if (WhatIsTheSkillRank == '4') {$(this).html('C')}
						if (WhatIsTheSkillRank == '5') {$(this).html('B')}
						if (WhatIsTheSkillRank == '6') {$(this).html('A')}
						if (WhatIsTheSkillRank == '7') {$(this).html('9')}
						if (WhatIsTheSkillRank == '8') {$(this).html('8')}
						if (WhatIsTheSkillRank == '9') {$(this).html('7')}
						if (WhatIsTheSkillRank == '10') {$(this).html('6')}
						if (WhatIsTheSkillRank == '11') {$(this).html('5')}
						if (WhatIsTheSkillRank == '12') {$(this).html('4')}
						if (WhatIsTheSkillRank == '13') {$(this).html('3')}
						if (WhatIsTheSkillRank == '14') {$(this).html('2')}
						if (WhatIsTheSkillRank == '15') {$(this).html('1')}
					})
					$('.itemrarity').each(function(){
						ItemRarity = $(this).attr('value')
						if (ItemRarity == 0) {$(this).prepend('Regular')}
						if (ItemRarity == 1) {$(this).prepend('Regular')}
						if (ItemRarity == 2) {$(this).prepend('Beginner')}
						if (ItemRarity == 3) {$(this).prepend('Fine')}
						if (ItemRarity == 4) {$(this).prepend('Superior')}
						if (ItemRarity == 5) {$(this).prepend('Rare')}
					} )
					$('.stat').each(function() {
							doihide = $(this).attr("value");
							if (doihide != 0) {
								$(this).show();
							} else {$(this).hide();}
						});
					$('.weight').each(function() {
							doihide = $(this).attr("value");
							if (doihide != "") {
								$(this).show();
							} else {$(this).hide();}
						});
					$('.trade').each(
						function(){
							checktrade = $(this).attr('value')
							if (checktrade == 'DEFAULT') {
								$(this).html('This item cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							} else {
								$(this).html('Can use all forms of trade')
							}
						}
					)
					$('.itemicon').each(
						function(){
							ValueofIcon = $(this).attr('value')
							if ( ValueofIcon.indexOf('imgur') > -1 ) {
								$(this).css('background-image','url('+ ValueofIcon +')');
							}
						}
					)
					$('.tableicon').each(
						function(){
							ValueofTableIcon = $(this).attr('value')
							if ( ValueofTableIcon.indexOf('imgur') > -1 ) {
								$(this).css('background-image','url('+ ValueofTableIcon +')');
							}
						}
					)
					$('.desc').each(
						function(){
							ValueofDesc = $(this).attr('value')
							TransformedDescClass = ValueofDesc.replace(/ /g,'_')
							$(this).addClass('ItemDesc_'+TransformedDescClass)
						}
					)
					var url = "/js/descriptions.js";
							$.getScript( url, function() {
								RunningDescriptions()
							})
					var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})		
					$.getScript( "/js/modelviewer.js", function() {
								SetUpViewer()
							})		
					$('#tabs').tabs();
}, 200);
			}); 
		}]
);
