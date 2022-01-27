import axios from "axios";
import config from './config/gateway.json'

const gatewayAxios = axios.create({
    baseURL: config.baseURL
})

export function getTrips(keywords) {
    return gatewayAxios.get(`/trips?keyword=${keywords}`);
}