import { Request, Response, Router } from 'express';
import axios from 'axios';
import config from '../config/TripApiConfig.json';
import { Trip } from '../types/trip'

export const router = Router();

const tripServiceAxios = axios.create({
    baseURL: config.baseURL
})

function getTrips(req: Request, res: Response, next): Promise<Trip[]> {
    return tripServiceAxios.get<Trip[]>('/trips')
    .then(response => response.data)
}

export async function getFilteredTrips(req: Request, res: Response, next): Promise<Response> {
    const keywords = (req.query.keyword as string)?.split(' ');
    return await getTrips(req, res, next)
    .then(data => res.send(filterTripsByKeywords(data, keywords)))
    .catch(err => next(err));
}

function filterTripsByKeyword(trips: Trip[], keyword: string): Trip[] {
    keyword = keyword.toLowerCase();

    return trips?.filter( 
        trip => trip.title.toLowerCase().includes(keyword)
        || trip.description.toLowerCase().includes(keyword)
        || trip.tags.map(tag => tag.toLowerCase()).includes(keyword)
    );
}

function filterTripsByKeywords(trips: Trip[], keywords: string[]): Trip[] {
    if (!keywords) { return trips }
    const filteredTripsAllKeyword = keywords.map(keyword => filterTripsByKeyword(trips, keyword));
    const uniqueFilteredTrips = [... new Set(filteredTripsAllKeyword.flat())]

    return uniqueFilteredTrips
}

router.get('/trips', getFilteredTrips);
