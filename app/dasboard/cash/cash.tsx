import CardGeneric from '~/components/atoms/CardGeneric';
const cards = [
    {
        text1: 'Estado de la caja',
        text2: 'Abierta',
        text3: 'Abierta hoy a las 7:00 AM',
        variant: 'green'
    },
    {
        text1: 'Monto Inicial',
        text2: 'S/. 500.00',
        text3: 'Registrado por Juan Pérez',
    },
    {
        text1: 'Ventas del Día',
        text2: 'S/. 3,245.50',
        text3: '15 transacciones',
    },
    {
        text1: 'Saldo Actual',
        text2: 'S/. 3,745.50',
        text3: 'Actualizado: 11:25 AM',
    },
];

export default function CashDashboard() {
    return (
        <div>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li>Dashboard</li>
                    <li>Inicio</li>
                    <li>Caja</li>
                </ul>
            </div>
            <div className='pt-12'>
                <div className='flex items-center gap-12 justify-between pb-8'>
                    <h1 className='text-4xl text-dark-green font-semibold uppercase'>
                        Gestion de Caja
                    </h1>
                    <div className="flex gap-4">
                        <button className='btn btn-outline'><i className="fa-solid fa-arrow-left"></i> Volver</button>
                    </div>
                </div>
            </div>
            <div className='w-full pt-12'>
                <div className='stats bg-base-100 border-base-300 border w-full'>
                    {cards.map((item, index) => (
                        <CardGeneric
                            text1={item.text1}
                            text2={item.text2}
                            text3={item.text3}
                            variant={item?.variant}
                            key={index}
                        />
                    ))}
                </div>
                <div className='pt-8 grid grid-cols-2 gap-4'>
                    <div className='border-dark-green/20 border shadow rounded-xl p-6'>
                        <form action="" className='flex flex-col justify-between h-full'>
                            <div>
                                <legend>Apertura de Caja</legend>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Monto Inicial (S/.)</legend>
                                    <input type="number" className="input w-full!" placeholder="0.00" />
                                </fieldset>
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Observaciones</legend>
                                    <input type="text" className="input w-full!" placeholder="Observaciones de apertura" />
                                </fieldset>

                            </div>
                            <div className='pt-8'>
                                <button type='button' className='btn bg-secondary-green text-white w-full!'><i className="fa-solid fa-clock"></i> Abrir Caja</button>
                            </div>
                        </form>

                    </div>
                    <div className='border-dark-green/20 border shadow rounded-xl p-6'>
                        <legend>Cierre de Caja</legend>
                        <form action="" className='grid grid-cols-2 gap-4 '>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Monto en Sistema (S/.)</legend>
                                <input type="number" className="input " placeholder="0.00" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Monto Fisico (S/.)</legend>
                                <input type="number" className="input" placeholder="0.00" />
                            </fieldset>
                            <fieldset className="fieldset col-span-2">
                                <legend className="fieldset-legend">Diferencia (S/.)</legend>
                                <input type="number" className="input w-full!" placeholder="0.00" />
                            </fieldset>
                            <fieldset className="fieldset col-span-2">
                                <legend className="fieldset-legend">Observaciones</legend>
                                <input type="text" className="input w-full!" placeholder="Observaciones de cierre" />
                            </fieldset>
                            <div className='pt-8 col-span-2'>
                                <button type='button' className='btn bg-red-500 text-white w-full!'><i className="fa-solid fa-circle-check"></i> Cerrar Caja</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
