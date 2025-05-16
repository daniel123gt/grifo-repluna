import type { Route } from "./+types/stock";
import StockDashboard from "~/dasboard/stock/stock";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login page Repluna" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Stock() {
  return <StockDashboard />;
}
