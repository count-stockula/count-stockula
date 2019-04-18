import axios from "axios";

export default {
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
  // updates the item with the given id
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
  }
};
