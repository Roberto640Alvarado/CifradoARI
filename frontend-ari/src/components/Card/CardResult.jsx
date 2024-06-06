import React from 'react';
import { useNavigate } from "react-router-dom";

const CardResult = ({ jsonData }) => {
    const navigate = useNavigate();
    const handleSave = () => {
        alert('Tu archivo ha sido encriptado y guardado!');
        navigate('/');
    };
    const handleBack = () => {
        // Conversión de TXT a JSON utilizando key y delimiter
        // Implementa tu lógica aquí
        navigate('/convertirTXT');
    };
    console.log('CardResult rendered with jsonData:', jsonData);
    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-cardfont w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl h-auto p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg flex flex-col justify-between">
                <div className="text-center text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 md:mb-8">
                    Resultado de conversión:
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md max-h-96 overflow-y-auto">
                    <pre className="text-left text-xs sm:text-sm md:text-base lg:text-lg text-black">
                        {jsonData ? JSON.stringify(jsonData, null, 2) : 'No data available'}
                    </pre>
                </div>
                <div className="flex space-x-4 sm:flex-row items-center justify-center  mt-6  sm:space-y-0 sm:space-x-4 lg:space-x-8">
                    <button onClick={handleBack} className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded text-sm sm:text-base md:text-lg lg:text-xl">
                        Regresar
                    </button>
                    <button onClick={handleSave} className="bg-green hover:bg-emerald-600 text-white font-bold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded text-sm sm:text-base md:text-lg lg:text-xl">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardResult;

