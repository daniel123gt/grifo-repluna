import type { Route } from "./+types/login";
import { LoginPage } from "~/login/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login page Repluna" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Login() {
  return <LoginPage />;
}
