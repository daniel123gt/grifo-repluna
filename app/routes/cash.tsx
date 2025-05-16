import type { Route } from "./+types/cash";
import CashDashboard from "~/dasboard/cash/cash";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login page Repluna" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Cash() {
  return <CashDashboard />;
}
