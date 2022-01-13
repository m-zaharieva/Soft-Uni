import AuthContext from "../contexts/AuthContext";
import { useEffect, useContext } from "react";

const Counter = () => {
    const { count } = useContext(AuthContext);
    useEffect(() => {
        return () => {
            console.log('Unmount')
        }
    }, []);

    return (
        <h3>{count}</h3>
    );
}

export default Counter;