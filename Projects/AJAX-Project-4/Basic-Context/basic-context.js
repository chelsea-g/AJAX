$(document).ready(function() {

  var btn_try_me = $("#btn_try_me");

  var add_friend = function() {
    console.log("Friend added!");
  }

  var update_info = function() {
    console.log("Info Updated!");
  }

  var help = function() {

    console.log("Click menu items to see their output!");

  }

  var log_out = function() {

    alert("You are now logged out.");

  }

  btn_try_me.on("click", function(e) {

    let items = [

      { title: "Add friend", icon: "ion-person", fn: add_friend },
      { title: "Update info", icon: "ion-plus-round", fn: update_info },
      { title: "Help", icon: "ion-help-buoy", fn: help },
      { title: "Do not use", icon: "ion-minus-circled", disabled: true },
      { },
      { title: "Logout", icon: "ion-log-out", fn: log_out },

    ]

    basicContext.show(items, e.originalEvent);

  });

});
