	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products	
// Edited by Robert Zhang S#:300077171	 

var products = [
	{
		name: "brocoli 1.99$",
		vegetarian: true,
		glutenFree: true,
		sugarFree: true,
		lactoseFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread 2.35$",
		vegetarian: true,
		glutenFree: false,
		sugarFree: false,
		lactoseFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "baguette 3.15$",
		vegetarian: true,
		glutenFree: false,
		sugarFree: false,
		lactoseFree: true,
		organic: false,
		price: 3.15
	},
	{
		name: "7UP 7.11$",
		vegetarian: true,
		glutenFree: true,
		sugarFree: false,
		lactoseFree: true,
		organic: false,
		price: 7.11
	},
	{
		name: "dozen eggs 8.99$",
		vegetarian: false,
		glutenFree: true,
		sugarFree: true,
		lactoseFree: true,
		organic: true,
		price: 8.99
	},
	{
		name: "salmon 10.00$",
		vegetarian: false,
		glutenFree: true,
		sugarFree: true,
		lactoseFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "lady's fingers 14.40$/g",
		vegetarian: true,
		glutenFree: true,
		sugarFree: true,
		lactoseFree: true,
		organic: true,
		price: 14.40
	},
	{
		name: "coffee beans 15.50$",
		vegetarian: true,
		glutenFree: true,
		sugarFree: true,
		lactoseFree: true,
		organic: true,
		price: 15.50
	},
	{
		name: "dairy & sugar free cake 29.99$",
		vegetarian: false,
		glutenFree: false,
		sugarFree: true,
		lactoseFree: true,
		organic: false,
		price: 29.99
	},
	{
		name: "sugar free candy pack 54.05$",
		vegetarian: false,
		glutenFree: true,
		sugarFree: true,
		lactoseFree: false,
		organic: false,
		price: 54.05
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	var veget, glutFree, sugFree, lactFree, organ, none;
	var num, num1;
	veget = glutFree = sugFree = lactFree = organ = none = false;
	num = -1;
	//Read inputs
	for ( var i = 0; i < restriction.options.length; i++ ){
		var o = restriction.options[i];
		if(o.selected == true){
			num = 0;
			//alert(o.value); //debug
			if (o.value == "Vegetarian"){
				veget = true;
				num++;
			}

			if (o.value == "GlutenFree"){
				glutFree = true;
				num++;
			}

			if (o.value == "SugarFree"){
				sugFree = true;
				num++;
			}

			if (o.value == "LactoseFree"){
				lactFree = true;
				num++;
			}
			
			if (o.value == "Organic"){
				organ = true;
				num++;
			}

			if (o.value == "None"){
				none = true;
			}

			if (o.value == ""){
				num = -1;
			}
		}
	}
	//filter
	for (let i=0; i<prods.length; i+=1) {
		if ((none == true) &&
			(veget == false)&&
			(glutFree == false)&&
			(sugFree == false)&&
			(lactFree == false)&&
			(organ == false)){
			product_names.push(prods[i].name);
		}
		else {
			num1 = 0;
			if ((veget == true) && (prods[i].vegetarian == true)){
				num1++;
			}

			if ((glutFree == true) && (prods[i].glutenFree == true)){
				num1++;
			}

			if ((sugFree == true) && (prods[i].sugarFree == true)){
				num1++;
			}

			if ((lactFree == true) && (prods[i].lactoseFree == true)){
				num1++;
			}

			if ((organ == true) && (prods[i].organic == true)){
				num1++;
			}

			if (num == num1){
				product_names.push(prods[i].name);
			}
		}
	}
	
	return product_names;
}

function isElemOf (prod, prodsList){
	for (let i=0; i<prodsList.length; i+=1) {
		if (prod.name == prodsList[i].name){
			return true;
		}
	}
	return false;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}