import axios, { AxiosResponse } from 'axios'

const endpoint: String = (process.env.NODE_ENV === 'development') ?
 'http://192.168.1.222:8080/api/v1' : 'NOT IMPLEMENTED'


export const fetchAllUsers = async () : Promise<never[]> => {
    return await axios.get(endpoint + '/users/all').then(response => {
        return response.data;
    }).catch(err => {
        throw err
    });
};

export const fetchSpecifiedUsers = async (search: string) : Promise<never[]> => {
    return await axios.get(endpoint + '/users/search?input=' + search).then(response => {
        return response.data;
    }).catch(err => {
        throw err
    });
};

