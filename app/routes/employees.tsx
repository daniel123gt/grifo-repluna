import { Employee } from '~/dasboard/employee/employee';
import type { Route } from './+types/closecash';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Login page Repluna' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function EmployeeRoute() {
  return <Employee />;
}
