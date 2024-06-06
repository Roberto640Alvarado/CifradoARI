import React from 'react';
import { useNavigate } from "react-router-dom";


const CardHome = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-cardfont w-full max-w-md  md:w-1/2 lg:max-w-2xl xl:max-w-4xl h-auto p-6 md:p-8 lg:p-12 rounded-lg shadow-lg flex flex-col justify-between">
                <div className="text-center text-black font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8">
                    ¡Bienvenidos!
                </div>
                <div className="text-center text-black font-bold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 lg:mb-8">
                    ¿Que desea realizar?
                </div>
                <div className="fflex flex-col sm:flex-row items-center justify-center space-y-4 space-x-4 sm:space-y-0 sm:space-x-4 lg:space-x-8">
                
                    <button onClick={()=>{navigate('/convertirTXT')}} className="bg-green text-white font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded text-sm md:text-base lg:text-lg">
                         Convertir
                    </button>
                    <button onClick={()=>{navigate('/desencriptar')}} className="bg-green text-white font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded text-sm md:text-base lg:text-lg">
                        Descifrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardHome;

