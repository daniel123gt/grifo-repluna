import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('dashboard', 'routes/dashboard.tsx', [
    index('routes/homeDashboard.tsx'),
    route('venta', 'routes/sale.tsx'),
    route('abrir-caja', 'routes/opencash.tsx'),
    route('cerrar-caja', 'routes/closecash.tsx'),
    route('empleados', 'routes/employees.tsx'),
  ]),
  route('login', 'routes/login.tsx'),
] satisfies RouteConfig;
