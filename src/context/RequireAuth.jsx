import { useContext } from "react";
import Chat from "../pages/Chat";
import AuthContext from "./AuthContext";

export const RequireAuth = ({ children }) => {
    const auth = useContext(AuthContext);

    if (auth.isName() === true) {
        return <Chat />
    }

    return children;
}