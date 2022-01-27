import { useState, useEffect, useContext } from "react";
import { getTrips } from '../gateway.js';
import { ErrorContext } from "../components/common/Error.js";

export function useTrips(keyword) {
    const [trips, setTrips] = useState([]);
    const { errorMessage, setErrorMessage } = useContext(ErrorContext);

    function handleAxiosResponse(axiosResponse, setEffect) {
        axiosResponse.then(res => res.data)
        .then(data => {
            setEffect(data)
        })
        .catch(err => {
          if (err.response){
            console.log(err);
            setErrorMessage(err.message);
          }
          else {
            console.log(err);
            setErrorMessage("Unable to connect to server, please try again in few seconds..")
          }
        })
    }

    useEffect(() => {
        handleAxiosResponse(getTrips(keyword), setTrips);
      }
    , [keyword]);

    return trips;
}