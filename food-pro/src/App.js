import React, { lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
// import InstaMart from './components/InstaMart';
import {Provider} from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';
import UserContext from './utils/UserContext';
import Shimmer from './components/Shimmer';


const InstaMart = lazy(() => import("./components/InstaMart.js"));

const App = () => {

    const [user, setUser] = useState({
        name: "Balaji",
        email: "balajisreenivas07@gmail.com",
    })

    return (
        <>
        <Provider store={store}>
            <UserContext.Provider
                value={{
                    user: user,
                    setUser: setUser,
                }}
            >
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </Provider>
        </>
    )
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <InstaMart />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);