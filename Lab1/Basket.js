var prodcuts = [{
	name : "test",
	price : 12.9,
	inventory : 20
}, {
	name : "test2",
	price : 30,
	inventory : 80
}];

class ProductLineItem {
 	
	constructor(product) {
		this.amount = 1;
		this.product = product;
	}
	
	  getAmount () {
		return this.amount;
	}
	 setAmount(quantity) {
		this.amount = quantity;
	}
	 getProduct() {
		return this.product;
	}
	
	
}


var basket = (function(){
	var a = []
	return {
		addProduct : function(productID){
			if(a[productID] == null) {
				if ( prodcuts[productID].inventory-1 >= 0) {
					a[productID] = new ProductLineItem(prodcuts[productID]);
					a[productID].getProduct().inventory--;
				} else {
					alert("Продукт відсутній на складі");
				}
			} else {
				alert("Продукт вже обраний");
			}
				
		},
		removeProduct : function(productID){
			prodcuts[productID].inventory = prodcuts[productID].inventory + a[productID].getAmount();
			delete a[productID];
		},
		updateProductQuantity : function(productID, quantity) {
			if ( a[productID].getProduct().inventory-quantity+ a[productID].getAmount() >= 0) {
				a[productID].getProduct().inventory = a[productID].getProduct().inventory - quantity + a[productID].getAmount();
				a[productID].setAmount(quantity);
			} else {
				alert("Продукт відсутній на складі");
			}
		},
		getTotalPrice : function(){
			var totalPrice = 0;
			if ( a[0] == null && a[1] == null) {
				alert("Корзина порожня");
			} else {
				if ( a[0] != null){
				totalPrice = totalPrice + a[0].amount*a[0].product.price;
			} 
			if ( a[1] != null) {
				totalPrice = totalPrice + a[1].amount*a[1].product.price;
			}
			alert(totalPrice);
			}
		}
	}
})();
