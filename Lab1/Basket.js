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

	constructor(productID) { 
		this.id = productID; 
		this.quantity = 1; 
		this.product = prodcuts[productID]; 
	} 

	setQuantity(quantity) { 
		this.quantity = quantity; 
	}  
} 


var basket = (function(){ 
	var productsInBasket = [] 
	var getIndexProduct = function (productID) { 
		var index = null; 
		productsInBasket.forEach(function(item, i, array) { 
			if (item.id == productID) { 
			index = i; 
			} 
		}); 
		return index; 
	} 
	return { 
		addProduct : function(productID){ 
			var indexProduct = getIndexProduct(productID); 
			if(indexProduct == null) { 
				if (prodcuts[productID].inventory >= 1) { 
					productsInBasket.push(new ProductLineItem(productID)); 
					prodcuts[productID].inventory--; 
				} else { 
				alert("Немає продуктів на складі!"); 
			} 
			} else { 
				alert("Ви вже вибрали цей продукт"); 
			} 

		}, 
		removeProduct : function(productID){ 
			var indexProduct = getIndexProduct(productID); 
			if(indexProduct == null) { 
				alert("Ви ще не вибрали цей продукт!"); 
			} else { 
				var productInBasket = productsInBasket[indexProduct]; 
				productInBasket.product.inventory += + productInBasket.quantity; 
				delete productsInBasket[indexProduct]; 
			} 
		}, 
		updateProductQuantity : function(productID, quantity) { 
			var productInBasket = productsInBasket[getIndexProduct(productID)]; 
			if ( productInBasket.product.inventory - quantity + productInBasket.quantity >= 0) { 
				productInBasket.product.inventory += productInBasket.quantity - quantity; 
				productInBasket.setQuantity(quantity); 
			} else { 
				alert("Немає продуктів на складі!"); 
			} 
		}, 
		getTotalPrice : function(){ 
			var totalPrice = 0; 
			productsInBasket.forEach(function(item, i, arr) { 
				totalPrice += item.quantity * item.product.price; 
			}); 
		alert(totalPrice); 
		} 
	} 
})();
