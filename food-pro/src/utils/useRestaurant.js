import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../constants";

const useRestaurant = (resId) => {

    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        getRestaurantInfo(resId);
    }, []);


    async function getRestaurantInfo(id) {
        try {
            const data = await fetch(RESTAURANT_MENU + id);
            const json = await data.json();

            setRestaurant(json.data)
        }
        catch (error) {
            console.log(error);
        }
    }
    return restaurant;
};


export default useRestaurant;
