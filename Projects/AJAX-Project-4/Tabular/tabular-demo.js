$(document).ready(function() {

  tabular.start('.demo'), {

    columns: [

      { title: 'Id'           name: 'id' },
      { title: 'First Name'   name: 'first_name' },
      { title: 'Last Name'    name: 'last_name' },
      { title: 'Phone Number' name: 'phone_number' }

    ],
    source: '/contacts.php'
  }

});
