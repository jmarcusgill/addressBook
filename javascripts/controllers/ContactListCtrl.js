app.controller("ContactListCtrl", function($scope, ItemFactory) {

  $scope.contacts = [];

  let getItems = () => {
    ItemFactory.getItemList().then((itemz) => {
      console.log("itemz", itemz);
      $scope.contacts = itemz;
      // console.log($scope.contacts);
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getItems();



});