import { axiosPrivate } from './axios';
const calorias = () => {
    return axiosPrivate.get('/calorias/listartodos');
};

export default calorias;
