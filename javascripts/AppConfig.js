app.run(function (FIREBASE_CONFIG) {
   firebase.initializeApp(FIREBASE_CONFIG);
});


app.config( function($routeProvider) {
  $routeProvider
    .when("/contacts/list", {
      templateUrl: "partials/add-new.html",
      controller: "AddNewCtrl"
    })
    .when("/contacts/new", {
      templateUrl: "partials/contact-list.html",
      controller: "ContactListCtrl"
    })
    .when("/contact/edit/:id", {
      templateUrl: "partials/edit-contact.html",
      controller: "EditContactCtrl"
    })
    .otherwise('/contacts/list');

});