//Class definition
function Student() {

	//instance variables
	var courseName = "";
	var email = "";


	this.setCourseName = function(newName) {

		courseName = newName;

	}

	this.getCourseName = function() {

		return courseName;

	}

	this.setEmail = function(newEmail) {

		email = newEmail;

	}

	this.getEmail = function() {

		return email;

	}

}

Student.prototype.register = function(email, courseName) {

	alert("Email " + email + " registered for the " + courseName + " course.");

}

function init() {

	var student1 = new Student();
	student1.setEmail("cgreger@madisoncollege.edu");
	student1.setCourseName("AJAX");
	alert("Student1 Email: " + student1.getEmail() + "\nStudent1 Class: " + student1.getCourseName());

	var student2 = new Student();
	student2.register("sjobs@mac.com", "iPhone development");

}
