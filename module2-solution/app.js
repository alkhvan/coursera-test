(function(){
	'use strict';

	var buyingList = [  {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donut",
      quantity: "200"
    },
    {
      name: "Cookie",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Ice Cream",
      quantity: "500"
    }];

	angular.module("shoppingListApp", [])
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);



	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var buy = this;
		buy.buyingList = buyingList;
		buy.value = false;
		buy.counter = 5;
		buy.removeItem = function(index){
			ShoppingListCheckOffService.removeItem(index);
			buy.counter--;
			if(buy.counter == 0){
				buy.value = true;
			}
		}

	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var bought = this;
		bought.items = ShoppingListCheckOffService.getItems();
		bought.status = ShoppingListCheckOffService.getStatus();


	}

	function ShoppingListCheckOffService(){
		var service = this;
		service.status = true;
		var tobuy = buyingList;
		var bought = [];

		service.removeItem = function(itemIndex){
			var itemList = tobuy.splice(itemIndex, 1);
			var item = {
				name: itemList[0].name,
				quantity: itemList[0].quantity
			}
			bought.push(item);
			service.changeStatus();
		}
		service.getItems = function(){
			return bought;
		}
		service.changeStatus = function(){
			service.status = false;
		}
		service.getStatus = function(){
			return service.status;
		}
	}

}())
