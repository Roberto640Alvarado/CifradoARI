import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CifrarServices from "../../services/CifrarServices";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CardConverter = () => {
  const navigate = useNavigate();
  const [fileContent, setFileContent] = useState("");
  const [uploadedFileContent, setUploadedFileContent] = useState("");
  const [key, setKey] = useState("");
  const [delimiter, setDelimiter] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => setUploadedFileContent(e.target.result);
    reader.readAsText(file);
  };

  const handleLoadFile = () => {
    if (!uploadedFileContent) {
      MySwal.fire({
        icon: "error",
        title: "Archivo no seleccionado",
        text: "Por favor seleccione un archivo antes de cargar.",
      });
      return;
    }
    setFileContent(uploadedFileContent);
  };

  const handleConvert = () => {
    if (!key || !delimiter) {
      MySwal.fire({
        icon: "error",
        title: "Campos Obligatorios",
        text: "Los campos de clave y delimitador son obligatorios.",
      });
      return;
    }
    // Conversión de TXT a JSON utilizando key y delimiter
    //Esto solo es una prueba, se debe implementar la lógica correcta y validaciones necesarias
    const inputText =
      "031110567-7;Jaime Roberto;Climaco Navarrete;2346570012456;GOLD;227799898;(17.817752830134766, -90.7695083618164)\n08111567-7;Juan Rodolfo;Perez;68934657001245;ELITE;22551004;(14.907752830134766, -90.6795083618164, -89.12396514892578)";
    const encryptionKey = "prueba";
    const delimiterValue = ";";
    CifrarServices.convertAndEncrypt(inputText, delimiterValue, encryptionKey);
    // Implementa tu lógica aquí
    navigate("/resultado");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-5 border rounded-lg shadow-lg bg-gray-200">
      <div className="flex flex-col sm:flex-row justify-between mb-5">
        <label className="flex items-center justify-center bg-yellow-500 p-2 rounded-lg cursor-pointer mb-2 sm:mb-0 w-full h-full">
          <span className="font-bold text-white text-lg">FileChooser</span>
          <input
            type="file"
            accept=".txt"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
        <button
          className="bg-blue-700 p-3 rounded-lg text-lg text-white font-bold ml-4"
          onClick={handleLoadFile}
        >
          Cargar
        </button>
      </div>

      <div className="mb-5">
        <h2 className="text-center font-bold mb-2">Visualización Origen</h2>
        <textarea
          className="w-full h-40 border rounded p-2"
          value={fileContent}
          readOnly
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 font-bold">Ingrese Clave:</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Ingrese su clave..."
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 font-bold">Delimitador:</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Ingrese delimitador..."
          value={delimiter}
          onChange={(e) => setDelimiter(e.target.value)}
        />
      </div>

      <div className="flex justify-center mb-7">
        <button
          className="bg-red-900 text-white font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded text-sm md:text-base lg:text-lg mr-4"
          onClick={handleBack}
        >
          Regresar
        </button>
        <button
          className="bg-green text-white font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded text-sm md:text-base lg:text-lg"
          onClick={handleConvert}
        >
          Convertir
        </button>
      </div>
    </div>
  );
};

export default CardConverter;
