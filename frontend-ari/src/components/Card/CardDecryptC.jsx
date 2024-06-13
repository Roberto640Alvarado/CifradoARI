import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CifrarServices from "../../services/CifrarServices";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const DecryptCard = () => {
  const navigate = useNavigate();
  const [fileContent, setFileContent] = useState(null);
  const [fileName, setFileName] = useState("");
  const [key, setKey] = useState("");
  const [delimiter, setDelimiter] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type !== "application/json") {
      MySwal.fire({
        icon: "error",
        title: "Formato de archivo no válido",
        text: "Por favor seleccione un archivo .json.",
      });
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => setFileContent(JSON.parse(e.target.result));
    reader.readAsText(file);
    setFileName(file.name); // Guardar el nombre del archivo
  };

  const handleDecrypt = async () => {
    if (!key || !delimiter || !fileContent) {
      MySwal.fire({
        icon: "error",
        title: "Campos Obligatorios",
        text: "Los campos de clave, delimitador y archivo son obligatorios.",
      });
      return;
    }

    try {
      const response = await CifrarServices.convertAndDecrypt(
        fileContent,
        key,
        delimiter
      );
      //console.log('Respuesta del servicio:', response.data);
      navigate("/dResultado", { state: { textData: response.data } });
    } catch (error) {
      console.error("Error en la conversión y desencriptación:", error);
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al convertir y desencriptar los datos.",
      });
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleDelimiterChange = (e) => {
    const value = e.target.value;
    if (value === ".") {
      MySwal.fire({
        icon: "error",
        title: "Delimitador no válido",
        text: "El delimitador no puede ser el caracter punto.",
      });
      setDelimiter("");
    } else {
      setDelimiter(value);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-36 md:mt-40 lg:mt-40 md:max-w-xl p-6 bg-cardfont border rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between mb-5">
        <label className="flex items-center justify-center bg-yellow-500 p-2 rounded-lg cursor-pointer mb-2 sm:mb-0 w-full h-full">
          <span className="font-bold text-white text-lg">FileChooser</span>
          <input
            type="file"
            accept=".json"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>

      {fileName && (
        <div className="mb-5 text-center">
          <p className="font-bold">Archivo seleccionado: {fileName}</p>
        </div>
      )}

      <div className="mx-auto m-5">
        <label className="px-3 md:text-lg">Ingrese la clave:</label>
        <input
          type="text"
          placeholder="Ingrese su clave..."
          className="p-1 rounded-md md:text-lg"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          required
        />
      </div>

      <div className="mx-auto m-5">
        <label className="px-6 md:text-lg">Delimitador:</label>
        <input
          type="text"
          placeholder="Ingrese el delimitador..."
          className="p-1 rounded-md md:text-lg"
          value={delimiter}
          onChange={handleDelimiterChange}
          required
        />
      </div>

      <div className="flex mx-auto gap-3 justify-center">
        <button
          onClick={handleBack}
          className="bg-red-800 hover:bg-pink-700 text-white font-semibold p-2 md:text-lg rounded focus:outline-none"
        >
          Regresar
        </button>
        <button
          onClick={handleDecrypt}
          className="bg-green hover:bg-emerald-600 text-white font-semibold p-2 md:text-lg rounded focus:outline-none"
        >
          Desencriptar
        </button>
      </div>
    </div>
  );
};

export default DecryptCard;
