import axios from 'axios';

const SERVICE = {
    getCategories: async () => {
        const { data } = await axios.get('/categories')
        return data;
    },
    getProducts: async () => {
        const { data } = await axios.get('/suppliers')
        return data;
    },


}

export default SERVICE

