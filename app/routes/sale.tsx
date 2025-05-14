import type { Route } from "./+types/sale";
import { SaleDashboard } from "~/dasboard/sale/sale";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login page Repluna" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Sale() {
  return <SaleDashboard />;
}
