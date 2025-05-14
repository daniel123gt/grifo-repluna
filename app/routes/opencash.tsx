import type { Route } from "./+types/opencash";
import { OpenCash } from "~/dasboard/opencash/opencash";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login page Repluna" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function OpenCashRoute() {
  return <OpenCash />;
}
