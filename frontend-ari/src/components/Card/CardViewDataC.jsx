import React from 'react'

export default function CardViewDataC() {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-cardfont border rounded-lg shadow-md ">
          <h2 className="text-xl font-bold mb-4 text-center">Información Desencriptada</h2>
          <form>
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2 md:mb-0" htmlFor="carnet">
                  Carnet
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  type="text"
                  id="carnet"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2 md:mb-0" htmlFor="nombre">
                  Nombre
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  type="text"
                  id="nombre"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2 md:mb-0" htmlFor="apellido">
                  Apellido
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  type="text"
                  id="apellido"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2 md:mb-0" htmlFor="tarjeta">
                  Tarjeta
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  type="text"
                  id="tarjeta"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="mb-4 md:flex md:items-center">
              <div className="md:w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2 md:mb-0" htmlFor="informacionDemografica">
                  Información<br/>Demográfica
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  id="informacionDemografica"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div className="flex mx-auto gap-3 justify-center">
                    <button className="bg-red-900 hover:bg-red-800 text-white font-semibold p-2 rounded focus:outline-none">
                        Regresar</button>
                    <button className="bg-green hover:bg-emerald-600 text-white font-semibold p-2  rounded focus:outline-none">
                        Guardar</button>
                </div>
          </form>
        </div>
      );
}


