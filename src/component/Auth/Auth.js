import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import "./Auth.css";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <span>
          <div className="img-container">
            <img
              onClick={logOut}
              src={
                user?.photoURL
              }
              alt="Placeholder"
            />
          </div>
        </span>
      ) : (
        <span className="LogOut-img">
          <div className="img-container">
            <img 
              onClick={logIn}
              src={
                user?.photoURL ||
                "https://static.thenounproject.com/png/3549890-200.png"
              }
              alt="Placeholder"
            />
          </div>
        </span>
      )}
    </div>
  );
}