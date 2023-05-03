import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {

    const {user} = useContext(UserContext);

    return (
        <>
            <div className="mx-auto p-10 mt-5 text-center bg-blue-100">
                <p className="text-center">FoodPro | Site developed by {user.name} - {user.email}</p>
            </div>
        </>
    )
};


export default Footer;