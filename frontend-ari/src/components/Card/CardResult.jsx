import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CardResult = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const jsonData = location.state?.jsonData || {};
    const data = jsonData.data || null;

    

    const handleSave = async () => {
        if (data) {
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const fileHandle = await window.showSaveFilePicker({
                suggestedName: 'resultado.json',
                types: [
                    {
                        description: 'JSON File',
                        accept: { 'application/json': ['.json'] },
                    },
                ],
            });
            const writable = await fileHandle.createWritable();
            await writable.write(blob);
            await writable.close();
            MySwal.fire({
                icon: "success",
                title: "Guardado",
                text: "Archivo guardado con éxito!",
              });
            navigate('/');
        } else {
            alert('No hay datos para guardar');
        }
    };

    const handleBack = () => {
        navigate('/convertirTXT');
    };

    //console.log('CardResult rendered with data:', data);

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-cardfont w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl h-auto p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg flex flex-col justify-between">
                <div className="text-center text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 md:mb-8">
                    Resultado de conversión:
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md max-h-96 overflow-y-auto">
                    <pre className="text-left text-xs sm:text-sm md:text-base lg:text-lg text-black">
                        {data ? JSON.stringify(data, null, 2) : 'No data available'}
                    </pre>
                </div>
                <div className="flex space-x-4 sm:flex-row items-center justify-center mt-6 sm:space-y-0 sm:space-x-4 lg:space-x-8">
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
