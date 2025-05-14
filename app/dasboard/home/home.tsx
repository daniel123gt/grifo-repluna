import Card from '~/components/atoms/Card'

const cards = [
    {
        title: "GLP",
        total: "4,56",
        inputs: "300 s/",
        outputs: "2000 lt"
    },
    {
        title: "GLP",
        total: "4,56",
        inputs: "300 s/",
        outputs: "2000 lt"
    },
    {
        title: "GLP",
        total: "4,56",
        inputs: "300 s/",
        outputs: "2000 lt"
    }
]

export function Home() {
    return (
        <div>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li>Dashboard</li>
                    <li>Inicio</li>
                </ul>
            </div>
            <div className='pt-8'>
                <h1 className='text-4xl text-dark-green font-semibold uppercase'>Tipos de combustibles</h1>
                <div className='flex gap-8 pt-8'>
                    {cards.map((item, index) => (
                        <div className='flex flex-col gap-4'>
                            <span className='text-2xl font-semibold text-dark-green'>{item.title}</span>
                            <Card total={item.total} inputs={item.inputs} outputs={item.outputs} key={index} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='pt-16 flex flex-col gap-8'>
                <h1 className='text-4xl text-dark-green font-semibold uppercase'>Ultimos movimientos</h1>
                <div className="overflow-x-auto rounded-box border border-primary-green/30 bg-white-green text-dark-green! p-6 shadow">
                    <table className="table">
                        <thead className='border-b-2 border-b-primary-green/20'>
                            <tr className='text-dark-green text-lg'>
                                <th>Venta</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Fecha</th>
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
    )
}
