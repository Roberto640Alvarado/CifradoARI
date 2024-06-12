import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function CardViewDataC() {
    const navigate = useNavigate();
    const location = useLocation();
    const { textData } = location.state || {};

    const handleSave = async () => {
        try {
            if (textData) {
                const encoder = new TextEncoder();
                const uint8Array = encoder.encode(textData);
                const blob = new Blob([uint8Array], { type: 'text/plain' });

                const fileHandle = await window.showSaveFilePicker({
                    suggestedName: 'resultado.txt',
                    types: [
                        {
                            description: 'Archivo de Texto',
                            accept: { 'text/plain': ['.txt'] },
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
        } catch (error) {
            console.error('Error al guardar el archivo:', error);
            alert('Ocurrió un error al guardar el archivo.');
        }
    };

    const handleBack = () => {
        navigate('/desencriptar');
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-cardfont border rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center">Información Desencriptada</h2>
            <textarea
                className="w-full h-40 border rounded p-2"
                readOnly
                value={textData || ''}
            />
            <div className="flex mx-auto gap-3 justify-center">
                <button onClick={handleBack} className="bg-red-900 hover:bg-red-800 text-white font-semibold p-2 rounded focus:outline-none">
                    Regresar
                </button>
                <button onClick={handleSave} className="bg-green hover:bg-emerald-600 text-white font-semibold p-2 rounded focus:outline-none">
                    Guardar
                </button>
            </div>
        </div>
    );
}

