import { NavLink, Outlet } from 'react-router';

const linksRoutes = [
  {
    href: '/dashboard',
    text: 'Inicio',
    icon: 'fa-solid fa-house',
    isEnd: true,
  },
  {
    href: '/dashboard/venta',
    text: 'Venta',
    icon: 'fa-solid fa-bag-shopping',
    isEnd: false,
  },
  {
    href: '/dashboard/caja',
    text: 'Caja',
    icon: 'fa-solid fa-folder-tree',
    isEnd: false,
  },
  {
    href: '/dashboard/empleados',
    text: 'Empleados',
    icon: 'fa-solid fa-person',
    isEnd: false,
  },
  {
    href: '/dashboard/stock',
    text: 'Stock',
    icon: 'fa-solid fa-bucket',
    isEnd: false,
  },
];

export function Layout() {
  return (
    <div className='grid grid-cols-12'>
      <aside className='col-span-2 bg-gray-bg h-screen px-[36px] py-[32px] flex flex-col justify-between overflow-clip shadow'>
        <div>
          <div className='text-white flex items-center gap-2'>
            <img src='/logo.svg' alt='logo' width='80px' />
            <span className='text-2xl font-bold'>REPLUNA</span>
          </div>
          <nav className='text-gray-light pt-8 flex flex-col gap-4 text-xl'>
            {linksRoutes.map((item, index) => (
              <NavLink
                key={index}
                to={item.href}
                end={item.isEnd}
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? 'pending' : '',
                    isActive ? 'text-primary-green' : '',
                    isTransitioning ? 'transitioning' : '',
                  ].join(' block mb-2 font-light text-lg ')
                }
              >
                <i className={item.icon}></i>
                <span className='pl-6'>{item.text}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <button className='outline-none bg-secondary-green hover:opacity-85 transition text-white w-full h-[56px] rounded-sm cursor-pointer'>
          <i className='fa-solid fa-right-from-bracket'></i>
          <span className='pl-4'>Cerrar Sesión</span>
        </button>
      </aside>
      <main className='col-span-8 p-8 max-h-screen overflow-scroll'>
        <Outlet />
      </main>
      <div className='col-span-2 overflow-clip shadow-sm p-8 pt-16'>
        <div className='text-dark-green'>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-xl font-semibold pb-8'>Perfil del Empleado</p>
            <div className='rounded-full w-[80px] overflow-hidden mb-4 border border-dark-green'>
              <img className='w-full' src='/user.png' alt='usuario' />
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-dark-green font-semibold'>Juanito Alimaña</p>
              <p className='text-primary-green'>Admin</p>
            </div>
          </div>
          <div className='pt-16 pb-8 mb-8 border-b-2 border-primary-green/15'>
            <p className='font-semibold pb-6'>Cuenta</p>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between font-light'>
                <p className=''>Ingreso</p>
                <p className='text-primary-green/80'>Junio 22, 2020</p>
              </div>
              <div className='flex justify-between font-light'>
                <p className=''>Codigo Empleado</p>
                <p className='text-primary-green/80'>23839</p>
              </div>
            </div>
          </div>
          <div className=''>
            <p className='font-semibold pb-6'>Ventas por tipo</p>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between font-light'>
                <p>GLP</p>
                <p>300 lt</p>
              </div>
              <div className='flex justify-between font-light'>
                <p>DIESEL</p>
                <p>200 lt</p>
              </div>
              <div className='flex justify-between font-light'>
                <p>GASOLINA</p>
                <p>0 lt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
