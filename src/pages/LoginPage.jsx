import { useState } from "react";
import { Outlet } from "react-router-dom";
import Button from "../components/Button";
import { useAppStore } from "../stores/app-store";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const loginUser  = useAppStore(state => state.loginUser);
  const users = useAppStore(state => state.users)
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  
   function handleSubmit(e) {
    e.preventDefault();
    const logUser = {user, password};
    if (user === "admin" && password === "admin") {
      loginUser(logUser)
      navigate("dashboard")
    } else if (user === "client" && password === "client") {
      loginUser(logUser)
    } else {
      alert("data login tidak di temukan")
    }

  }
  console.log(users)
  return (
    <>
       <h1 className="font-bold text-3xl text-slate-900 text-center mt-14 ">Login</h1>
    <form action="" onSubmit={handleSubmit} className="w-3/4 md:w-1/2 border rounded-lg shadow-md mx-auto flex flex-col p-10 mt-5 gap-3 items-center">
      <div className="flex flex-col mx-auto">
        <label className="mb-1 font-semibold" htmlFor="name">Username</label>

        <input 
          id="name"
          type="text" 
          className="h-10 w-full border px-2 rounded-md" 
          onChange={(e) => setUser(e.target.value)}
        />
         <label className="mt-2 mb-1 font-semibold" htmlFor="quantity">Password</label>
        <input 
          id="quantity"
          type="password" 
          className="h-10 w-full border px-2 rounded-md"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button color="bg-slate-900" type="submit">Login</Button>

    </form>
    </>
  )
}
