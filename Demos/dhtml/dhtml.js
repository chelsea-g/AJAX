function outputDetails() {

    /*
    <ul>
        <li>walk the dog</li>
        <li>eat pizza</li>
    </ul>
    */
    var list = document.createElement("ul"); //<ul></ul>

    var li1 = document.createElement("li");
    li1.appendChild(document.createTextNode("walk the dog")); //<li>walk the dog</li>

    var li2 = document.createElement("li");
    li2.appendChild(document.createTextNode("eat pizza")); //<li>eat pizza</li>

    document.body.insertBefore(list, document.getElementById("footer"));

    list.appendChild(li1);
    list.appendChild(li2);



}




function validate() {

    outputDetails();



    var isValid = true;
    var firstNameTextbox = document.getElementById("firstName");
    var name_err = document.getElementById("name_error");

    if(firstNameTextbox.value.length == 0) {
        isValid = false;
        if(!name_err) {
            //<span class="error">Name is required</span>
            var msg = document.createElement("span"); //<span></span>
            msg.id = "name_error"; //span id= name_error
            msg.appendChild(document.createTextNode("Name is required")); //<span>name is required</span>
            //msg.className = "error"; //<span class="error">name is required</span>
            msg.setAttribute("class", "error");
            document.getElementById("firstNameContainer").appendChild(msg);
        }
    } else {
        //could already be an error message
        if(name_err) {
            //remove name_error
            name_err.parentNode.removeChild(name_err);
        }
    }

    if(isValid) {
        //output
    }

}
