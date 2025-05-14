import type { Route } from "./+types/closecash";
import { CloseCash } from "~/dasboard/closecash/closecash";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login page Repluna" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function CloseCashRoute() {
  return <CloseCash />;
}
