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
  const [fileName, setFileName] = useState("");
  const [key, setKey] = useState("");
  const [delimiter, setDelimiter] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type !== "text/plain") {
      MySwal.fire({
        icon: "error",
        title: "Formato de archivo no válido",
        text: "Por favor seleccione un archivo .txt.",
      });
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedFileContent(e.target.result);
    };
    reader.readAsText(file);
    setFileName(file.name); // Guardar el nombre del archivo
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

  const handleConvert = async () => {
    if (!key || !delimiter) {
      MySwal.fire({
        icon: "error",
        title: "Campos Obligatorios",
        text: "Los campos de clave y delimitador son obligatorios.",
      });
      return;
    }

    try {
      const response = await CifrarServices.convertAndEncrypt(fileContent, delimiter, key);
      //console.log('Respuesta del servicio:', response);
      navigate("/resultado", { state: { jsonData: response } });
    } catch (error) {
      console.error('Error en la conversión y cifrado:', error);
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al convertir y cifrar los datos.",
      });
    }
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

      {fileName && (
        <div className="mb-5 text-center">
          <p className="font-bold">Archivo seleccionado: {fileName}</p>
        </div>
      )}

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
