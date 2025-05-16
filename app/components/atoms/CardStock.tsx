
export default function CardStock({ title, stock, max }: { title: string, stock: number, max: number }) {
    const calculatePorcentage = (actual: number, maximun: number) => {
        if (maximun === 0) {
            return 0;
        }

        const porcentaje = Math.floor((actual / maximun) * 100);
        return porcentaje;
    }

    const porcentaje = calculatePorcentage(stock, max)
    const calculateTheme = (porcentaje: number) => {

        if(porcentaje >= 60){
            return 'max'
        }else if(porcentaje <= 60 && porcentaje >= 30){
            return 'medium'
        }else {
            return 'low'
        }
    }
    const theme = calculateTheme(porcentaje) == 'max' && 'text-gray-800 bg-gray-50' || calculateTheme(porcentaje) == 'medium' && 'text-yellow-500 bg-yellow-50' || calculateTheme(porcentaje) == 'low' &&  'text-red-500 bg-red-50'

    return (
        <div className="card w-auto bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title text-gray-900">{title}</h2>
                <div
                    className={`radial-progress ${theme}`}
                    style={{ "--value": porcentaje, "--size": "10rem", "--thickness": "1.5rem" } as React.CSSProperties} aria-valuenow={porcentaje} role="progressbar">
                    {stock}L / {max}L
                </div>
                <p>{porcentaje}% de la capacidad</p>
            </div>
        </div>
    )
}
