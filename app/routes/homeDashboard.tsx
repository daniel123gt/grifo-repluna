import type { Route } from "./+types/homeDashboard";
import { Home } from "~/dasboard/home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Pagce" },
    { name: "description", content: "Welcome to about page" },
  ];
}

export default function HomeDashboard() {
  return <Home/>;
}
