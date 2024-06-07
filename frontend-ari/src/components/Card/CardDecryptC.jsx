import React from "react";
import { useNavigate } from "react-router-dom";

const DecryptCard = () =>{
    const navigate = useNavigate();
    const handleDecrypt = () => {
        // Conversión de TXT a JSON utilizando key y delimiter
        // Implementa tu lógica aquí
        navigate('/dResultado');
    };
    const handleBack = () => {
        navigate('/');
    };
    
    return(
        <div className="max-w-md mx-auto mt-36 md:mt-40 lg:mt-40 md:max-w-xl p-6 bg-cardfont border rounded-lg shadow-md">
            <button className=" border-solid border-2 focus:outline-none rounded-md p-2 md:text-lg bg-yellow-300 hover:bg-yellow-400 w-full font-medium">FileChooser</button>
                <div className="mx-auto m-5 ">
                    <label className="px-3 md:text-lg">Ingrese la clave:</label>
                    <input type="text" placeholder="Ingrese su clave..." className="p-1 rounded-md md:text-lg" required/>
                </div>
                <div className="mx-auto m-5">
                    <label className=" px-6 md:text-lg">Delimitador:</label>
                    <input type="text" placeholder="Ingrese el delimitador..." className="p-1 rounded-md md:text-lg" required/>
                </div>
                <div className="flex mx-auto gap-3 justify-center">
                    <button onClick={handleBack} className="bg-red-800 hover:bg-pink-700 text-white font-semibold p-2 md:text-lg rounded focus:outline-none">
                        Regresar</button>
                    <button onClick={handleDecrypt} className="bg-green hover:bg-emerald-600 text-white font-semibold p-2 md:text-lg rounded focus:outline-none">
                        Desencriptar</button>
                </div>
        </div>
    );
}
export default DecryptCard;