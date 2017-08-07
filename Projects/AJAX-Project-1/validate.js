function validate() {

	var isValid = true;
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var phoneAreaCode = document.getElementById("phoneAreaCode");
	var phonePrefix = document.getElementById("phonePrefix");
	var phoneSuffix = document.getElementById("phoneSuffix");
	var address = document.getElementById("address");
	var city = document.getElementById("city");
	var state = document.getElementById("state");
	var zip = document.getElementById("zip");
	var genders = [document.getElementById("gender1"), document.getElementById("gender2")];
	var courses = findCheckedBoxes([document.getElementById("course1"), 
				   					document.getElementById("course2"), 
				   					document.getElementById("course3")]);

	if (!validateField(name)) {

		isValid = false;
		createErrorMessage(name, "Name required.", document.getElementById("nameDiv"));

	}

	if (!validateField(email)) {

		isValid = false;
		createErrorMessage(email,"Email required.", document.getElementById("emailDiv"));

	}

	if (!validateField(phoneAreaCode) 
		|| !validateField(phonePrefix) 
		|| !validateField(phoneSuffix)) {

		isValid = false;
		createErrorMessage(phoneSuffix, "Full phone number required.", document.getElementById("phoneDiv"));

	}

	if (!validateField(address)) {

		isValid = false;
		createErrorMessage(address, "Address required.", document.getElementById("addressDiv"));

	}

	if (!validateField(city)) {

		isValid = false;
		createErrorMessage(city, "City required.", document.getElementById("cityDiv"));

	}

	if (!validateField(state)) {

		isValid = false;
		createErrorMessage(state, "State required.", document.getElementById("stateDiv"));

	}

	if (!validateField(zip)) {

		isValid = false;
		createErrorMessage(zip, "Zip required.", document.getElementById("zipDiv"));

	}

	if (!validateField(courses)) {

		isValid = false;

		createErrorMessage(courses, "At least one course required.", document.getElementById("coursesDiv"));

	}


	// Output details if isValid flag still true
	if (isValid) {

		outputDetails(name, 
					  email, 
					  phoneAreaCode,
					  phonePrefix,
					  phoneSuffix,
					  address,
					  city,
					  state,
					  zip,
					  genders,
					  courses);
	}

}

function outputDetails(name, email, phoneAreaCode, phonePrefix, 
					   phoneSuffix, address, city, state, zip, 
					   genders, courses) {

	var formattedCourses = "";

	for (var course = 0; course < courses.length; course++) {

		if (course < courses.length - 1) {

			formattedCourses += courses[course].value + ", ";

		} else {

			formattedCourses += courses[course].value;

		}

	}

    var formattedPhoneNumber = "(" + phoneAreaCode.value 
    						 + ") " + phonePrefix.value
    						 + "-" + phoneSuffix.value;
    var checkedGender;

    if (genders[0].checked) {

    	checkedGender = genders[0].value;

    } else {

    	checkedGender = genders[1].value;

    }

    var outputItems = ["Name: " + name.value,
					   "Email: " + email.value,
					   "Phone: " + formattedPhoneNumber,
					   "Address: " + address.value,
					   "City: " + city.value,
					   "State: " + state.value,
					   "Zip: " + zip.value,
					   "Gender: " + checkedGender,
					   "Previous Course(s): " + formattedCourses];

	var outputDiv = document.createElement("div");
	outputDiv.setAttribute("id", "outputDiv");
	var h2 = document.createElement("h2");
	h2.appendChild(document.createTextNode("---Entered Form Values---"));

	outputDiv.appendChild(h2);

	for (var item = 0; item < outputItems.length; item++) {

		outputDiv.appendChild(document.createTextNode(outputItems[item]));
		outputDiv.appendChild(document.createElement("br"));

	}
	
	document.body.appendChild(outputDiv);
}

// Is the field valid?
function validateField(element) {

	if (isCheckbox(element)) {

		if (element.length > 0) {

			removeErrorMessage(element);
			return true; //valid

		} else {

			return false;

		}

	} else if (element.value.length > 0) {

		removeErrorMessage(element);
		return true; //valid

	} else {

		return false;

	}
}

// Creates the error message if there is not one already present
function createErrorMessage(element, error, div) {

	if (!getErrorElement(element)) {

		//<div><element></element><span>there was an error</span></div>
		var span = document.createElement("span");
		var text = document.createTextNode(error);

		span.setAttribute("class", "error"); //error styling

		if (isCheckbox(element)) {

			span.setAttribute("id", "checkbox_error");

		} else {

			span.setAttribute("id", element.id + "_error"); //id of element_error

		}

		span.appendChild(text);
		div.appendChild(span);

	}

}

function findCheckedBoxes(boxes) {

	var checkedBoxes = [];

	for (var box = 0; box < boxes.length; box++) {

		if (boxes[box].checked) {

			checkedBoxes.push(boxes[box]);

		}

	}

	return checkedBoxes;

}

// Returns true if the given element is an array of checkboxes
function isCheckbox(element) {

	if (element.constructor == Array) {

		return true;

	} else {

		return false;

	}

}

// If there is an error message to remove, the function will remove it.
function removeErrorMessage(element) {

	var errorElement = getErrorElement(element);

	if (errorElement) {

		//<div><element></element><span>there was an error</span><div> //current
		//<div><element></element> //desired
		errorElement.parentNode.removeChild(errorElement);

	}

}

// Returns the errorElement if an error msg is present
// Returns null if no error message is present
function getErrorElement(element) {

	if (isCheckbox(element)) {

		return document.getElementById("checkbox_error");

	} else {

		return document.getElementById(element.id + "_error");

	}

}

