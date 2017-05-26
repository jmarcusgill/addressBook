app.controller("ContactListCtrl", function($rootScope, $scope, ItemFactory) {

  $scope.contacts = [];

  let getItems = () => {
    ItemFactory.getItemList($rootScope).then((itemz) => {
      $scope.contacts = itemz;
      console.log($scope.contacts);
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getItems();


  $scope.deleteItem = (id) => {
      ItemFactory.deletz(id).then(() => {
        getItems();
      }).catch((error) => {
        console.log("delteItem error", error);
      });
    };


});