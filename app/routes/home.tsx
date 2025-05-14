import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Navigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const user = true;
  if(!user){
    return <Navigate to="login" replace/>
  }else{
    return <Navigate to="dashboard" replace/>
  }
}
