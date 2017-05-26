app.factory("ItemFactory", function($http, $q, FIREBASE_CONFIG) {

  let getItemList = (userId) => {
    // this is different from the scope items.
    console.log("getItemList", userId)
    let itemz = [];
    // return new Promise ... would go here, instead you use $q
    return $q((resolve, reject) => {
      // $.ajax().done().fail ... this is what we were using. nad becasue there is another lib you need to put in the argument.
      $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBook.json?orderBy="uid"&equalTo="${userId}"`)
      .then((fbItems)=> {
        let itemCollection = fbItems.data;
        if (itemCollection !== null) {
          Object.keys(itemCollection).forEach((key) => {
              itemCollection[key].id=key;
              itemz.push(itemCollection[key]);
            });
        }
          resolve(itemz);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let postNewItem = (newUser) => {
    return $q ((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/addressBook.json`, JSON.stringify(newUser))
      .then((resultz) => {
        resolve(resultz);
      }).catch((error) => {
        console.log("post error", error);
        reject(error);
      });
    });
  };

  let getSingleContact = (id) => {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBook/${id}.json`)
      .then((resultz) => {
        resultz.data.id = id;
        resolve(resultz);
      }).catch((error) => {
        console.log(error);
      });
    });
  };

  let deletz = (itemId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/addressBook/${itemId}.json`)
      .then((resultz) => {
        resolve(resultz);
      }).catch((error) => {
        console.log("error", error);
      });
    });
  };

  let editItem = (user) => {
    console.log("item", user);
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/addressBook/${user.id}.json`,
        JSON.stringify({
          phone: user.phone,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          address: {
            street: user.street,
            city: user.city,
            state: user.state,
            zipcode: user.zipcode
          }
        })
        ).then((resultz) => {
        resolve(resultz);
      }).catch((error) => {
        console.log("error", error);
      });
    });
  };

return {getItemList:getItemList, postNewItem:postNewItem, deletz:deletz};


});