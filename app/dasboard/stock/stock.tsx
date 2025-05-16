import CardStock from "~/components/atoms/CardStock"

export default function StockDashboard() {
    return (
        <div>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li>Dashboard</li>
                    <li>Inicio</li>
                    <li>Stock</li>
                </ul>
            </div>
            <div className="pt-12">
                <div className='flex items-center gap-12 justify-between pb-8'>
                    <h1 className='text-4xl text-dark-green font-semibold uppercase'>
                        Inventario
                    </h1>
                    <div className="flex gap-4">
                        <button className='btn btn-outline'><i className="fa-solid fa-arrow-left"></i> Volver</button>
                        <button className='outline-none bg-secondary-green btn text-white'>
                            <i className="fa-solid fa-square-plus"></i> Registrar Ingreso
                        </button>

                    </div>
                </div>
                <div className="pt-8 flex gap-12">
                    <CardStock title="GLP" stock={4500} max={5000} />
                    <CardStock title="GNV" stock={2500} max={5000} />
                    <CardStock title="Gasolina" stock={1000} max={5000} />

                </div>
                <div className='pt-16 flex flex-col gap-8'>
                    <h1 className='text-4xl text-dark-green font-semibold uppercase'>
                        Precios Actuales
                    </h1>
                    <div className='overflow-x-auto rounded-box border border-dark-green/20 bg-white-green text-dark-green! p-6 shadow'>
                        <table className='table'>
                            <thead className='border-b-2 border-b-primary-green/20'>
                                <tr className='text-dark-green text-lg'>
                                    <th>Combustible</th>
                                    <th>Precio de Compra</th>
                                    <th>Precio de Venta</th>
                                    <th>Margen</th>
                                    <th>Ultima Actualizacion</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className='font-light'>
                                <tr>
                                    <th>
                                        GLP
                                    </th>
                                    <td>12,3 s/</td>
                                    <td> 15,3 s/</td>
                                    <td>
                                        15%
                                    </td>
                                    <td>
                                        12/12/2024
                                    </td>
                                    <td>
                                        <button className='btn btn-ghost btn-sm'>Editar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
