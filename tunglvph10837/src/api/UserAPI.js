import {axiosClient} from './axiosClient';
const UserAPI = {
    getAll(){
        const url = `/signup`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/signup/${id}`;
        return axiosClient.get(url)

    },
    add(signup){
        const url = `/signup`;
        return axiosClient.post(url , signup)
    },
    signin(signin){
        const url = `/signin`;
        return axiosClient.post(url , signin)
    },
}
export default UserAPI