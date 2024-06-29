import axios from 'axios';
const BASE_API = 'https://cifradoari-3.onrender.com'

const API = axios.create({
  baseURL: BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

const CifrarServices = {

  // Método para convertir y cifrar numero de tarjeta
  convertAndEncrypt: async (inputText, delimiter, encryptionKey) => {
    try {
      const response = await API.post('/conversion/text-to-json', {
        inputText,
        delimiter,
        encryptionKey,
      });
      return response.data;
    } catch (error) {
      console.error('Error al convertir y cifrar:', error);
      throw error;
    }
  },

  // Método para convertir y descifrar numero de tarjeta
  convertAndDecrypt: async (data, decryptionKey, delimiter) => {
    try {
      const response = await API.post('/conversion/json-to-text', {
        data,
        decryptionKey,
        delimiter,
      });
      return response.data;
    } catch (error) {
      console.error('Error al convertir y descifrar:', error);
      throw error;
    }
  },

};

export default CifrarServices;
