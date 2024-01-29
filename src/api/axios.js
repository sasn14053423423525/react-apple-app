import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params: {
        api_key:"825b1730cfc67dae114884f15a0afdf0",
        language:"ko-KR"
    },
});

export default instance;