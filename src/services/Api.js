import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com"

const getProducts = async () => {
    const res = await axios.get("/products")
    
    return res.data
}

export default getProducts