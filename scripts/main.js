
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
// Edited by Robert Zhang S#:300077171

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
	//document.write(slct1);
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		//document.write(s1.value);
		//document.write(slct1);
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		
		s2.appendChild(document.createElement("br"));
		
		var product_img = document.createElement("img");
		if (productName == "brocoli 1.99$"){
			product_img.src = "images/Broccoli_and_cross_section_edit.jpg";
			product_img.style.width = "100px";
			product_img.style.height = "75px";
		} else if (productName == "bread 2.35$"){
			product_img.src = "images/IMG_7173-white-bread-2.jpg";
			product_img.style.width = "100px";
			product_img.style.height = "75px";
		} else if (productName == "baguette 3.15$"){
			product_img.src = "images/8-3-large.jpg";
			product_img.style.width = "100px";
			product_img.style.height = "120px";
		} else if (productName == "7UP 7.11$"){
			product_img.src = "images/7up_featured_m.jpg";
			product_img.style.width = "100px";
			product_img.style.height = "120px";
		} else if (productName == "dozen eggs 8.99$"){
			product_img.src = "images/a-dozen-eggs-in-their-carton-isolated-on-white-CWT0GX.jpg";
			product_img.style.width = "100px";
			product_img.style.height = "75px";
		} else if (productName == "salmon 10.00$"){
			product_img.src = "images/broiled-salmon-11.jpg";
			product_img.style.width = "100px";
			product_img.style.height = "120px";
		} else if (productName == "lady's fingers 14.40$/g"){
			product_img.src = "images/pushcart_ladies_finger_vendakkai_.jpg";
			product_img.style.width = "100px";
			product_img.style.height = "75px";
		} else if (productName == "coffee beans 15.50$"){
			product_img.src = "images/download.jpg";
			product_img.style.width = "100px";
			product_img.style.height = "75px";
		} else if (productName == "dairy & sugar free cake 29.99$"){
			product_img.src = "images/choco-cake5-pin-mpk-683x1024.jpg";
			product_img.style.width = "100px";
			product_img.style.height = "120px";
		} else if (productName == "sugar free candy pack 54.05$"){
			product_img.src = "images/71XujoSv7TL._AC_SY445_.jpg";
			product_img.style.width = "100px";
			product_img.style.height = "75px";
		}
		s2.appendChild(product_img);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}


// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts) + "$"));
		
}