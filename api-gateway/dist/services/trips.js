"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilteredTrips = exports.router = void 0;
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const TripApiConfig_json_1 = __importDefault(require("../config/TripApiConfig.json"));
exports.router = express_1.Router();
const tripServiceAxios = axios_1.default.create({
    baseURL: TripApiConfig_json_1.default.baseURL
});
function getTrips(req, res, next) {
    return tripServiceAxios.get('/trips')
        .then(response => response.data);
}
function getFilteredTrips(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const keywords = (_a = req.query.keyword) === null || _a === void 0 ? void 0 : _a.split(' ');
        return yield getTrips(req, res, next)
            .then(data => res.send(filterTripsByKeywords(data, keywords)))
            .catch(err => next(err));
    });
}
exports.getFilteredTrips = getFilteredTrips;
function filterTripsByKeyword(trips, keyword) {
    keyword = keyword.toLowerCase();
    return trips === null || trips === void 0 ? void 0 : trips.filter(trip => trip.title.toLowerCase().includes(keyword)
        || trip.description.toLowerCase().includes(keyword)
        || trip.tags.map(tag => tag.toLowerCase()).includes(keyword));
}
function filterTripsByKeywords(trips, keywords) {
    if (!keywords) {
        return trips;
    }
    const filteredTripsAllKeyword = keywords.map(keyword => filterTripsByKeyword(trips, keyword));
    const uniqueFilteredTrips = [...new Set(filteredTripsAllKeyword.flat())];
    return uniqueFilteredTrips;
}
exports.router.get('/trips', getFilteredTrips);
//# sourceMappingURL=trips.js.map