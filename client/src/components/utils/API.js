import axios from "axios";

export default {

  // Functions involving StoreItem collection
  // gets an array of all items in db or for a certain store
  getAllItems: function(storeId) {
    if (storeId) {
      return axios.get("/api/storeItems", { storeId: storeId });
    } else {
      return axios.get("/api/storeItems");
    };
  },
  // gets an array of all the low qty items in the db or for a certain store
  getLowStock: function(storeId) {
    if (storeId) {
      return axios.get("/api/storeItems/lowStock", { storeId: storeId });
    } else {
      return axios.get("/api/storeItems/lowStock");
    };
  },
  // gets an array of all the zero qty items in the db or for a certain store
  getZeroStock: function(storeId) {
    if (storeId) {
      return axios.get("/api/storeItems/zeroStock", { storeId: storeId });
    } else {
      return axios.get("/api/storeItems/zeroStock");
    };
  },
  // gets an object by item Id
  findItemId: function(itemId) {
    return axios.get("/api/storeItems/forOne/" + itemId);
  },
  // gets an object by storeId and upc
  findItemUpc: function(storeId, upc) {
    return axios.get("/api/storeItems/upc", { storeId: storeId, upc: upc });
  },
  // Create an item document in database
  createItem: function(itemData) {
    return axios.post("/api/storeItems", itemData);
  },
  // Deletes the item with the given id
  deleteItem: function(itemId) {
    return axios.delete("/api/storeItems/forOne/" + itemId);
  },
  // Updates the item with the given id
  updateItem: function(itemId, itemData) {
    return axios.put("/api/storeItems/forOne/" + itemId, itemData);
  },
  // Reduces the current qty of an item by set amount
  reduceStock: function(storeId, upc, reduceQty) {
    return axios.put("/api/storeItems/upc/reduceStock", { storeId: storeId, upc: upc, reduceQty: reduceQty });
  },
  // Increases the current qty of an item by set amount
  addStock: function(storeId, upc, addQty) {
    return axios.put("/api/storeItems/upc/addStock", { storeId: storeId, upc: upc, reduceQty: addQty });
  },

  // Functions involving Stores collection
  // gets an array of all the stores in the database
  getAllStores: function() {
    return axios.get("/api/stores");
  },
  // Create an item document in database
  createStore: function(storeData) {
    return axios.post("/api/stores", storeData);
  },
  // gets an object by store Id
  findStoreId: function(storeId) {
    return axios.get("/api/stores/" + storeId);
  },
  // Updates the store with the given id
  updateStore: function(storeId, storeData) {
    return axios.put("/api/stores/" + storeId, storeData);
  },
  // Deletes the item with the given id
  deleteStore: function(storeId) {
    return axios.delete("/api/stores/" + storeId);
  },

  // Functions involving Users collection
  // gets an array of all the users in db or for a certain store
  getAllUsers: function(storeId) {
    if (storeId) {
      return axios.get("/api/users", { storeId: storeId });
    } else {
      return axios.get("/api/users");
    };
  },
  // Create an user document in database *userData Must contain storeId to create user
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // gets an object by user Uid
  findUserId: function(userId) {
    return axios.get("/api/users/" + userId);
  },
  // Updates the user with the given id
  updateUser: function(userId, userData) {
    return axios.put("/api/users/" + userId, userData);
  },
  // Deletes the user with the given id
  deleteUser: function(userId) {
    return axios.delete("/api/stores/" + userId);
  }
};
