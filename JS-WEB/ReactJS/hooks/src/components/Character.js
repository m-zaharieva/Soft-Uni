import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";

const Character = ({
    name,
}) => {
    const { addHobby } = useContext(AuthContext);
    
    return (
        <li onClick={() => addHobby(name)}>{name}</li>
    );
};

export default Character;