import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from "../constants";
import { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";


const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();

    }, []);

    async function getRestaurants() {
        try {
            const data = await fetch(RESTAURANT_LIST);
            const json = await data.json();
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        }
        catch (error) {
            console.log(error);
        }
    };

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1> Offline, Please check your internet connection..!!</h1>
    }

    // console.log("render")

    // Early return
    // if(!allRestaurants) return null;

    // if(filteredRestaurants?.length === 0) {
    //     return <h1>No restaurants found.....</h1>
    // }

    return allRestaurants.length === 0 ? ( <Shimmer /> ) : (
        <>
            <div className="container mx-auto max-w-7xl p-10 text-center">
                <div className="search-container">
                    <div className="p-10 inline-flex mx-auto">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = filterData(searchText, allRestaurants)
                                setFilteredRestaurants(data)
                            }}
                            className="flex mr-3"
                        >
                            <input
                                type="text" 
                                placeholder="Search restaurants" 
                                value={searchText}
                                className="placeholder:italic block w-full border rounded-md px-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm mr-2 mt-12"
                                onChange={(e) => {
                                    setSearchText(e.target.value);
                                }}
                            />
                            <button 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-12 px-4 rounded"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                        <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-12 px-4 rounded"
                                onClick={() => {
                                    setFilteredRestaurants(allRestaurants);
                                    setSearchText("");
                                }}
                            >
                                Reset
                        </button>
                    </div>
                </div>

                {filteredRestaurants?.length === 0 ? (
                <div className="container">
                    <h1>No restaurant matches your search</h1>
                </div>
                ) : (
                    <div className="grid grid-cols-4 gap-y-6 gap-x-4">
                        {filteredRestaurants?.map((restaurant) => {
                            return (
                                <Link
                                    to={"restaurant/" + restaurant?.data?.id}
                                    key={restaurant?.data?.id}
                                    className="card"
                                >
                                    <RestaurantCard {...restaurant?.data} />
                                </Link>    
                            )
                        })}
                    </div>
                )}
            </div>
        </>
    )
};


export default Body;