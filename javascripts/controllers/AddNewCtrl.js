app.controller("AddNewCtrl", function($location, $scope, FIREBASE_CONFIG, ItemFactory) {
$scope.newUser = {};

  $scope.saveNewContact = () => {
    ItemFactory.postNewItem($scope.newUser).then((response) => {
      $scope.newUser = {};
      $location.url("/contact/list");
      ItemFactory.getItemList();
    }).catch((error) => {
      console.log("Add error", error);
    });
  };

});