
var cart;

function init() {
	
	//Get cart div object
 	cart = document.getElementById("cart");

	//Get the button objects
	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var btn3 = document.getElementById("btn3");

	//event handlers
	btn1.onclick = function() {

		btn_click(btn1.value);

	}

	btn2.onclick = function() {

		btn_click(btn2.value);

	}

	btn3.onclick = function() {

		btn_click(btn3.value);

	}

}

function btn_click(btnValue) {

	//Add the btnValue to the cart div
    cart.appendChild(document.createTextNode(btnValue));
    cart.appendChild(document.createElement("br"));

}