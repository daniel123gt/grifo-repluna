import CardGeneric from '~/components/atoms/CardGeneric';

const cards = [
  {
    text1: 'Total Empleados',
    text2: '12',
    text3: '4 administradores',
  },
  {
    text1: 'Turno Actual',
    text2: 'Mañana',
    text3: '07:00 - 15:00',
  },
  {
    text1: 'Empleados Activos',
    text2: '4',
    text3: 'En turno actual',
  },
  {
    text1: 'Próximo Turno',
    text2: 'Tarde',
    text3: '15:00 - 23:00',
  },
];
export function Employee() {
  return (
    <div>
      <div className="breadcrumbs text-sm">
        <ul>
          <li>Dashboard</li>
          <li>Inicio</li>
          <li>Empleados</li>
        </ul>
      </div>
      <div className='pt-12'>
        <div className='flex items-center gap-12 justify-between pb-8'>
          <h1 className='text-4xl text-dark-green font-semibold uppercase'>
            Empleados
          </h1>
          <div className='flex gap-4'>
            <button className='btn btn-outline'><i className="fa-solid fa-arrow-left"></i> Volver</button>
            <button className='outline-none bg-secondary-green btn text-white'>
              <i className="fa-solid fa-user-plus"></i> Nuevo Empleado
            </button>
          </div>

        </div>
        <div className='w-full pt-12'>
          <div className='stats bg-base-100 border-base-300 border w-full'>
            {cards.map((item, index) => (
              <CardGeneric
                text1={item.text1}
                text2={item.text2}
                text3={item.text3}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className='pt-16 flex flex-col gap-8'>
          <h1 className='text-4xl text-dark-green font-semibold uppercase'>
            Lista de Empleados
          </h1>
          <div className='overflow-x-auto rounded-box border border-dark-green/20 bg-white-green text-dark-green! p-6 shadow'>
            <table className='table'>
              <thead className='border-b-2 border-b-primary-green/20'>
                <tr className='text-dark-green text-lg'>
                  <th>Empleado</th>
                  <th>Cargo</th>
                  <th>Turno</th>
                  <th>Contacto</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className='font-light'>
                <tr>
                  <th>
                    Juan Pérez
                    <span className=''> ID: EMP001</span>
                  </th>
                  <td>Administrador</td>
                  <td> Mañana</td>
                  <td>
                    juan.perez@ejemplo.com
                    <span>+51 987 654 321</span>
                  </td>
                  <td>
                    <div className='badge badge-soft badge-success'>Activo</div>
                  </td>
                  <td>
                    {' '}
                    <button className='btn btn-ghost btn-sm'>Ver</button>
                    <button className='btn btn-ghost btn-sm'>Editar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
