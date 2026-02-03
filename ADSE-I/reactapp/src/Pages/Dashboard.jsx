import { useContext } from "react";
import UserContext from "../Context/UserContext";
// import { Button } from "@mui/material";

function Dashboard() {
    const {user, setUser} = useContext(UserContext);
  return (
    <>
   <h2>Welcome {user}</h2>
   <button onClick={() => setUser("Admin")}>Click To Chnage User</button>
   </>
  )
}

export default Dashboard