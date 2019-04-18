import axios from "axios";

export default {
     reduceStockByOne : function(body) {
          return axios.put("api/storeItems/upc/reduceStock", body);
     }
};
