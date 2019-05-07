import axios from "axios";

export default {
  // Functions involving StoreItem collection

  // gets an array of all items in db or for a certain store
  getAllItems: function(storeId) {
    if (storeId !== "0") {
      return axios.get("/api/storeItems", {
        params: { storeId: storeId }
      });
    } else {
      return axios.get("/api/storeItems");
    }
  },
  // gets an array of all the low qty items in the db or for a certain store
  getLowStock: function(storeId) {
    if (storeId !== "0") {
      return axios.get("/api/storeItems/lowStock", {
        params: { storeId: storeId }
      });
    } else {
      return axios.get("/api/storeItems/lowStock");
    }
  },
  // gets an array of all the zero qty items in the db or for a certain store
  getZeroStock: function(storeId) {
    if (storeId !== "0") {
      return axios.get("/api/storeItems/zeroStock", {
        params: { storeId: storeId }
      });
    } else {
      return axios.get("/api/storeItems/zeroStock");
    }
  },
  // gets an array of all non-scannable items in db or for a certain store
  getNoScanItems: function() {
    return axios.get("/api/storeItems/noScan");
  },
  // gets an object by item Id
  findItemId: function(itemId) {
    return axios.get("/api/storeItems/forOne/" + itemId);
  },
  // gets an object by storeId and upc
  findItemUpc: function(storeId, upc) {
    return axios.get("/api/storeItems/upc", {
      params: { storeId: storeId, upc: upc.trim() }
    });
  },
  // create an item document in database
  createItem: function(itemData) {
    return axios.post("/api/storeItems", itemData);
  },
  // deletes the item with the given item Uid
  deleteItem: function(itemId) {
    return axios.delete("/api/storeItems/forOne/" + itemId);
  },
  // updates the item with the given item Uid
  updateItem: function(itemId, itemData) {
    return axios.put("/api/storeItems/forOne/" + itemId, itemData);
  },
  // reduces the current qty of an item by set amount. reduceQty must be positive integer.
  reduceStock: function(storeId, upc, reduceQty) {
    return axios.put("/api/storeItems/upc/reduceStock", {
      storeId: storeId,
      upc: upc,
      reduceQty: reduceQty
    });
  },
  // increases the current qty of an item by set amount. addQty must be positive integer.
  addStock: function(storeId, upc, addQty) {
    return axios.put("/api/storeItems/upc/addStock", {
      storeId: storeId,
      upc: upc,
      addQty: addQty
    });
  },

  // Functions involving Stores collection

  // gets an array of all the stores in the database
  getAllStores: function() {
    return axios.get("/api/stores");
  },
  // create an item document in database
  createStore: function(storeData) {
    return axios.post("/api/stores", storeData);
  },
  // gets an object by store Uid
  findStoreId: function(storeId) {
    return axios.get("/api/stores/" + storeId);
  },
  // updates the store with the given store Uid
  updateStore: function(storeId, storeData) {
    return axios.put("/api/stores/" + storeId, storeData);
  },
  // deletes the item with the given store Uid
  deleteStore: function(storeId) {
    return axios.delete("/api/stores/" + storeId);
  },

  // Functions involving Users collection

  // gets an array of all the users in db or for a certain store
  getAllUsers: function(storeId) {
    if (storeId) {
      return axios.get("/api/users", {
        params: { storeId: storeId }
      });
    } else {
      return axios.get("/api/users");
    }
  },
  // create an user document in database *userData Must contain storeId to create user
  createUser: function(newUser) {
    return axios.post("/api/login/create", newUser);
  },
  // gets an object by user Uid
  findUserId: function(userId) {
    return axios.get("/api/users/forOne/" + userId);
  },
  // gets an object of the current signed in user
  currentUser: function() {
    return axios.get("/api/users/currentUser");
  },
  // updates the user with the given user Uid
  updateUser: function(userId, userData) {
    return axios.put("/api/users/forOne/" + userId, userData);
  },
  // checks the given user email and password and returns one of three: "badPass", "badEmail", or the user document object
  loginUser: function(email, password) {
    return axios.post("/api/login/login", {
      email: email,
      password: password
    });
  },
  // signup user
  signupUser: function() {
    return axios.post("/api/login/signup", {});
  },
  // gets list of stores and storeIds in database
  getSignUpStores: function() {
    return axios.get("/api/login/stores");
  },
  // login user
  authenticate: function() {
    return axios.get("/api/users/authenticate");
  },
  // signout
  signoutUser: function(cb) {
    // return axios.post("/api/users/signout", {
    //   tokenCookie: tokenCookie
    // });
  },
  // sends email with attached file to the specified address
  sendEmail: function(receiveAddress, pdfFile) {
    return axios.post("/api/emails", {
      receiveAddress: receiveAddress,
      pdfFile: pdfFile
    });
  },
  // deletes the user with the given user Uid
  deleteUser: function(userId) {
    return axios.delete("/api/users/forOne/" + userId);
  },
  // save sales order to database
  saveOrder: function(orderBody) {
    return axios.post("api/purchases", orderBody);
  },
  // gets list of all saved orders
  getStoreSales: function(storeId) {
    return axios.get("api/purchases/StoreSales/", {
      params: { storeId: storeId }
    });
  }
};
