import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from "@faker-js/faker"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        y: {
            title: {
                display: true,
                text: "Litros"
            }
        },
        x: {
            title: {
                display: true,
                text: "Mes"
            }
        }
    },
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Resumen de Ventas del 2025',
        },

    },

};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

export const data = {
    labels,
    datasets: [
        {
            label: 'GLP',
            data: labels.map(() => faker.number.float({ min: 0, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'GNV',
            data: labels.map(() => faker.number.float({ min: 0, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Gasolina',
            data: labels.map(() => faker.number.float({ min: 0, max: 1000 })),
            borderColor: 'rgb(0, 255, 0)',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
        },
    ],
};
export function SaleDashboard() {
    const showModalHandle = () => {
        (document?.getElementById('my_modal_1') as HTMLDialogElement)?.showModal()
    }
    return (
        <div>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li>Dashboard</li>
                    <li>Inicio</li>
                    <li>Venta</li>
                </ul>
            </div>
            <div className='pt-8'>
                <div className='flex justify-between'>
                    <h1 className='text-4xl text-dark-green font-semibold uppercase'>Ventas</h1>
                    <button className="btn bg-secondary-green text-white" onClick={() => showModalHandle()}>Registrar Nueva Venta</button>
                </div>

                <div className='grid grid-cols-12 pt-8 gap-6'>
                    <div className='col-span-8 border border-primary-green/20 p-6 rounded-lg shadow'>
                        <h2 className='text-2xl text-dark-green'>Resumen del año</h2>
                        <Line options={options} data={data} />
                    </div>
                    <div className='col-span-4 border border-primary-green/20 p-6 rounded-lg shadow'>
                        <h2 className='text-2xl text-dark-green'>Resumen del día</h2>
                        <span className='text-gray-light'>Ventas realizadas hoy</span>
                        <div className='grid grid-cols-5 pt-4 text-sm'>
                            <div className='col-span-3 flex flex-col gap-3'>
                                <span className='font-semibold'>Total Ventas:</span>
                                <span className='font-semibold'>Litros Vendidos:</span>
                                <span className='font-semibold'>Transacciones:</span>
                                <span className='font-semibold'>Ventas por Combustible:</span>
                                <span> Gasolina</span>
                                <span> GLP</span>
                                <span> GNV</span>
                            </div>
                            <div className='col-span-2 flex flex-col gap-3 items-end'>
                                <span className='font-semibold'>S/. 1,123.00</span>
                                <span className='font-semibold'>300 L</span>
                                <span className='font-semibold'>15</span>
                                <span className='invisible'>12</span>
                                <span>45 L</span>
                                <span>30 L</span>
                                <span>20 L</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-4'>
                    <div className="overflow-x-auto rounded-box border border-primary-green/20 bg-white-green text-dark-green! p-6 mt-4 shadow">
                        <h2 className='text-2xl text-dark-green font-semibold uppercase'>Ultimas Ventas</h2>

                        <table className="table">
                            <thead className='border-b-2 border-b-primary-green/20'>
                                <tr className='text-dark-green/80 font-light! text-md'>
                                    <th className='font-normal'>Venta</th>
                                    <th className='font-normal'>Cantidad</th>
                                    <th className='font-normal'>Total</th>
                                    <th className='font-normal'>Fecha</th>
                                </tr>
                            </thead>
                            <tbody className='font-light'>
                                <tr>
                                    <th>GLP</th>
                                    <td>12 lt</td>
                                    <td>100 s/</td>
                                    <td>12/12/2024</td>
                                </tr>
                                <tr>
                                    <th>GLP</th>
                                    <td>12 lt</td>
                                    <td>100 s/</td>
                                    <td>12/12/2024</td>
                                </tr>
                                <tr>
                                    <th>GLP</th>
                                    <td>12 lt</td>
                                    <td>100 s/</td>
                                    <td>12/12/2024</td>
                                </tr>
                                <tr>
                                    <th>GLP</th>
                                    <td>12 lt</td>
                                    <td>100 s/</td>
                                    <td>12/12/2024</td>
                                </tr>
                                <tr>
                                    <th>GLP</th>
                                    <td>12 lt</td>
                                    <td>100 s/</td>
                                    <td>12/12/2024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg text-dark-green">Registrar Nueva Venta</h3>
                    <p className="py-4 text-sm text-gray-light">Ingresa los detalles de la nueva venta</p>
                    <div>
                        <form action="" className='grid grid-cols-2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Tipo de Combustible</legend>
                                <select defaultValue="Seleccionar" className="select">
                                    <option>Seleccionar</option>
                                    <option>GLP</option>
                                    <option>GNV</option>
                                    <option>Gasolina</option>
                                </select>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Cantidad (Litros)</legend>
                                <input type="number" className="input" placeholder="0.00" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Precio Unitario (S/.)</legend>
                                <input type="number" className="input" placeholder="0.00" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Total (S/.)</legend>
                                <input type="number" className="input" placeholder="0.00" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Método de Pago</legend>
                                <select defaultValue="Seleccionar" className="select">
                                    <option>Seleccionar</option>
                                    <option>Efectivo</option>
                                    <option>Tarjeta</option>
                                    <option>QR</option>
                                </select>
                            </fieldset>
                            <div></div>
                            <div className='pt-8'>
                                <button type='button' className='btn bg-secondary-green text-white'>Registrar Venta</button>
                            </div>
                        </form>

                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-error text-white font-normal">Cerrar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
