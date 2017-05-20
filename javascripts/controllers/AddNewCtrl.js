app.controller("AddNewCtrl", function($location, $scope, FIREBASE_CONFIG, ItemFactory) {

  $scope.saveNewContact = () => {
    console.log("newtask", $scope.newTask);
    ItemFactory.postNewItem($scope.newTask).then((response) => {
      $scope.newTask = {};
      $location.url("/contacts/new");
      // getItems();
    }).catch((error) => {
      console.log("Add error", error);
    });
  };
});