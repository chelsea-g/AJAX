$(document).ready(function() {

    // Render the current list from the database when app starts
    initializeList();

    // Add task button even handler
    $("#btnAddTask").on("click", function() {

        // Get the element for the new description
        var taskToAdd = $("#taskToAdd");

        // Add the task to the database & rendered list
        var id = addTask(taskToAdd.val());

        // Clear the input text
        taskToAdd.val("");

    }).hover(function() {

        $(this).css("color", "limegreen");

    }).mouseout(function() {

        $(this).css("color", "black");

    });

})

// Renders current list from the database
function initializeList() {

    /* allTasks.php
         - this file will return all tasks from the database as xml */

    // Send get request to get all tasks from database
    $.get("allTasks.php", function(response) {

        // Get all the tasks from the response xml
        var tasks = $(response).find("task");

        // Render the id and description of each task from the response
        tasks.each(function(index, currentTask) {

            var id = $(currentTask).find("id").text();
            var taskDescription = $(currentTask).find("description").text();

            appendTaskToList(id, taskDescription);

        });

    }, "xml");

}

// Adds a task to the database and the ui
function addTask(taskDescription) {

    /* addTask.php
             - this file will add a new task to the database
       Input - querystring parameter named 'description' that is the description of the new task to be created
       Output - the new task as json */

    // Send get request to add the task to the database (normally might be a post, but server code requires get params)
    $.ajax("addTask.php",
        {"data" : {"description" : taskDescription},
                                         // Render task after json response received
        "success" : function(response) { appendTaskToList(response.id, taskDescription); },
        "error" : function(status, errorMessage) { alert("Problem adding task."); },
        "dataType" : "json"
        });

}

// Removes a task from database and the ui
function removeTask(id) {

    /*  deleteTask.php
        -this file will delete a task from the database
        Input - query parameter named 'id' that is the id of the task to be deleted
        Output - the number of rows affected by the query as plain text */

    // Send get request to delete task from database (normally might be a delete/post, but server code requires get params)
    $.ajax("deleteTask.php",
        {"data" : {"id" : id},
        "error" : function(status, errorMessage) { alert("Problem deleting task."); }
        });

    removeTaskFromList(id);

}

// Create and append a task element to the ui
function appendTaskToList(id, taskDescription) {

    // Create task element (includes delete btn and description label)
    var taskText = $("<label>").append().text(taskDescription);
    var taskDiv = $("<div>").attr("taskId", id).addClass("task");

    // Delete button event handler
    var btnDelete = $("<input>").attr("type", "button").val("X").css("margin-right", "20px").on("click", function() {

        removeTask(id);

    }).hover(function() {

        $(this).css("color", "red");

    }).mouseout(function() {

        $(this).css("color", "black");

    });

    // Append the new elements to the ui
    taskDiv.append(btnDelete);
    taskDiv.append(taskText);
    $("body").append(taskDiv);

}

// Remove the task element from the ui by id
function removeTaskFromList(id) {

    // Retrieve the desired task to delete
    var task = $("[taskId=" + id + "]");

    // Remove it
    task.remove();

}
