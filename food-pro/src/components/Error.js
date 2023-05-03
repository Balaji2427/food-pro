import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {

    const err = useRouteError();

    return (
        <>
            <Header />
            <div className="container pt-28">
                <h1>{err?.status}:{err?.statusText}!</h1>
                <br />
                <h3>{err?.error?.message}</h3>
            </div>
        </>
    )
};


export default Error;