import axios from "axios";

const API_URL="http://localhost:8080";

class ProductService {

      saveProduct(product) { //For post data on server
            return axios.post(API_URL+"/saveProduct",product);
      }
      getAllProduct() { //get All Data those present on server
            return axios.get(API_URL + "/");
      }

      getProductById(id) { //get data those present on server by perticular ID
            return axios.get(API_URL+"/" + id);
      }

      deleteProduct(id) {
            return axios.get(API_URL+ "/deleteProduct/" + id);//URL Path & Dynamic value(id)
      }

      editProduct(product) {
            return axios.post(API_URL + "/editProduct/" + product.id, product);//URL Path & Dynamic value(id)
      }
}

export default new ProductService;