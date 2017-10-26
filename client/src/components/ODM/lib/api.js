const axios = require('axios');

const apiInfo = {
    url: 'https://api.eu.apiconnect.ibmcloud.com/hella-ventures-car-diagnostic-api/api/v1/',
    clientId: '173f6fd0-3cb2-464d-bc3b-5482896442a5',
    clientSecret: 'xF0lD4gV8tL2uQ7iN6fH5tR4vG2wU1mS3aD0rW0gK0pO7iF1aG',
};

export const lookupCar = (vin) => {
    const url = apiInfo.url + 'vin?';
    const query = `client_id=${apiInfo.clientId}&client_secret=${apiInfo.clientSecret}&vin=${vin}&language=EN`;
    return axios.get(url + query);
}
export const lookupError = (info) => {
    const url = apiInfo.url + 'dtc?';
    const query = `client_id=${apiInfo.clientId}&client_secret=${apiInfo.clientSecret}&code_id=${info.errorCode}&vin=${info.vin}&language=EN`;
    return axios.get(url + query);
}