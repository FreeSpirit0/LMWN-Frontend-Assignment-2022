import axios from "axios";

const gatewayAxios = axios.create({
    baseURL: 'http://localhost:3001/api'
}
)

export function getTrips(keywords) {
    return gatewayAxios.get(`/trips?keyword=${keywords}`);
}