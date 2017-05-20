app.run(function (FIREBASE_CONFIG) {
   firebase.initializeApp(FIREBASE_CONFIG);
});


app.config( function($routeProvider) {
  $routeProvider
    .when("/add/new", {
      templateUrl: "partials/add-new.html",
      controller: "AddNewCtrl"
    })
    .when("/contact/list", {
      templateUrl: "partials/contact-list.html",
      controller: "ContactListCtrl"
    })
    .when("/eit/contact/:id", {
      templateUrl: "partials/edit-contact.html",
      controller: "EditContactCtrl"
    })
    .otherwise('/contacts/list');

});