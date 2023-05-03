import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {

    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <div className="container mx-auto max-w-7xl p-28">
                <h1 className="font-bold text-2xl">
                    This is About page
                </h1>
                <input 
                    type="text" 
                    value={user.name}
                    className="p-2 my-5 border"
                    onChange={(e) => 
                        setUser({
                            ...user,
                            name: e.target.value,
                        })
                    }
                />
                <p>Page Description</p>
            </div>
        </>
    )
};


export default About;