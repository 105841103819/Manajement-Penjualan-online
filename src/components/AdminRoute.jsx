import { useAppStore } from "../stores/app-store";
import { useNavigate } from "react-router-dom";
export default function AdminRoute({children}) {
  const users = useAppStore(state => state.users);
  const navigate = useNavigate()
  const isAdmin = users.user === "admin";

  if (isAdmin) {
    return <>{children}</>; 
  } else {
    navigate("/");
    return null;
  }  
}
