import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import useRestaurant from '../utils/useRestaurant';
import Shimmer from './Shimmer';
import { addItem } from '../utils/cartSlice.';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {

    const { resId } = useParams();

    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }
    
    return !restaurant ? (
        <Shimmer />
    ) : (
        <div className="container mx-auto max-w-7xl p-10 text-left">
            <div className="flex">
                <div className="resDetails px-5 mt-24">
                    <img 
                        src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} 
                    />
                </div>
                <div className="resDetails mt-24">
                    <h1>Restaurant Id: {resId}</h1>
                    <h2 className="font-bold text-2xl my-2">
                        {restaurant?.cards[0]?.card?.card?.info?.name}
                    </h2>
                    <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
                    <h4>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h4>
                    <br />
                    <h4 className="font-bold">
                        Delivery in:{" "}
                        {/* {restaurant?.cards[0]?.card?.card?.info?.sla?.slaString}{" "} */}
                        {restaurant?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString}{" "}
                        away
                    </h4>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-y-6 gap-x-4 mt-10">
                {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
                    (menu) => {
                        return (
                            <div className="my-2 p-4" key={menu?.card?.info?.id}>
                                <div className="mb-2">
                                    <img src={IMG_CDN_URL + menu?.card?.info?.imageId} alt="" />
                                </div>
                                <div>
                                    {menu?.card?.info?.name}
                                </div>
                                <div>
                                    Rs:{menu?.card?.info?.price/100}
                                </div>
                                <button
                                    onClick={() => addFoodItem(menu?.card?.info)}
                                    className="bg-slate-800 text-white px-4 py-1 mt-1 rounded-lg"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
};  


export default RestaurantMenu;
