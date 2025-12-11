import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd97499c5f22149cebba51ece80378eda'
    }
})