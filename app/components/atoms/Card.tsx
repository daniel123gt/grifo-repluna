import React from 'react'

export default function Card({ total, inputs, outputs }: { total: string, inputs: string, outputs: string }) {
    return (
        <div className="flex flex-col justify-between bg-linear-to-tl from-dark-green to-primary-green/40 rounded-xl p-4 w-[200px] h-[200px] shadow text-white"
        >
            <div className="flex flex-col">
                <span className="text-3xl font-light">s/</span>
                <span className="text-5xl">{total}</span>
            </div>
            <div className="flex justify-between font-light" >
                <div>
                    <p>Entradas</p>
                    <p className="text-green-400">{inputs} s/</p>
                </div>
                <div>
                    <p>Stock</p>
                    <p className="text-red-500">{outputs} s/</p>
                </div>
            </div>
        </div>
    )
}
