import {createContext} from 'react';

const UserContext = createContext({
    user: {
        name: "Balaji",
        email: "balajisreeniva07@gmail.com"
    }
});



export default UserContext;