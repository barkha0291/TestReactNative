// const BASE_API = LOCAL_BASE_API;
import axios from "axios";
var qs = require('qs');
import { 
    BASE_URL, 
    PARSER_URL
} from '../../Config/WMConstants';

import { OCP_APIM_SUBSCRIPTION_KEY } from '../../Config/key';
class Api {
    static headers() {
        return {
           /*  */
        }
    }
    static parserHeaders(){
        return {
            'Content-Type': 'application/json',
            'Cache-Control':'no-cache',
          }
    }

    static get(route, params) {
        return this.request(route, params, 'GET');
    }

    static put(route, params) {
        return this.request(route, params, 'PUT')
    }

    static post(route, params) {
        return this.request(route, params, 'POST')
    }

    static delete(route, params) {
        return this.request(route, params, 'DELETE')
    }

    static request(route, params, verb) {
console.log("here is request",route, params, verb)
        switch(params.type){
            case 'API':
        
                let optionsAPI = {
                    'method': verb,        
                };
                optionsAPI.headers = Api.parserHeaders()
                return axios(PARSER_URL, optionsAPI);  
            default:
                
                const options = {
                    'method': verb,
        
                };
                options.headers = Api.parserHeaders();
                return axios(PARSER_URL, options); 
        }
      
    }
}
export default Api;