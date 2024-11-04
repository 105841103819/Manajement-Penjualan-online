import Button from "./Button";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import { useAppStore } from "../stores/app-store";


export default function Navbar() {
  const logoutUser = useAppStore(state => state.logoutUser)
  return (
      <nav  className="h-20 w-full bg-slate-900 flex justify-between items-center px-20 text-white text-xl">
        <div>
          <h1 className="font-semibold cursor-pointer">Dashboard</h1>
        </div>
        <ul className="flex gap-5">
          <NavMenu address="/dashboard">Home</NavMenu>
          <NavMenu address="add">Add</NavMenu>
        </ul>
        <Button handler={logoutUser}><Link>Logout</Link></Button>
      </nav>
  )
}
