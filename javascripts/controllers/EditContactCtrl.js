app.controller("EditContactCtrl", function($routeParams, $location, $scope, ItemFactory) {

  $scope.newTask = {};

  ItemFactory.getSingleContact($routeParams.id).then((results) => {
    $scope.newTask = results.data;
  }).catch((error) => {
    console.log("getSingleItem error", error);
  });


  $scope.EditContact = () => {
    ItemFactory.editItem($scope.newUser).then((response) => {
      $scope.newUser = {};
      $location.url("/edit/contact/:id");
      ItemFactory.getItemList();
    }).catch((error) => {
      console.log("Add error", error);
    });
  };


});