import { Request, Response } from 'express';
import { encryptCreditCard, decryptCreditCard } from '../utils/encrypt';

interface JsonData {
    documento: string;
    nombres: string;
    apellidos: string;
    tarjeta: string;
    tipo: string;
    telefono: string;
    poligono: {
        type: string;
        crs: {
            type: string;
            properties: {
                name: string;
            };
        };
        features: Array<{
            type: string;
            geometry: {
                type: string;
                coordinates: number[][];
            };
            properties: {
                land_Use: string;
            };
        }>;
    };
}

const conversionController = {
    //Convertir archivo de texto a JSON cifrando el número de tarjeta
    convertTextToJson: (req: Request, res: Response) => {
        try {
            const { inputText, delimiter, encryptionKey } = req.body;

            const lines = inputText.split('\n');
            const jsonData = lines.map((line: string) => {
                const [
                    documento,
                    nombres,
                    apellidos,
                    tarjeta,
                    tipo,
                    telefono,
                    coordinatesStr
                ]: string[] = line.split(delimiter);

                const coordinates: number[] = coordinatesStr
                    .replace(/[()]/g, '')
                    .split(', ')
                    .map((coord: string) => parseFloat(coord));

                const encryptedCard: string = encryptCreditCard(tarjeta, encryptionKey);

                return {//Estructura de los datos
                    documento,
                    nombres,
                    apellidos,
                    tarjeta: encryptedCard,
                    tipo,
                    telefono,
                    poligono: {
                        type: 'FeatureCollection',
                        crs: {
                            type: 'name',
                            properties: {
                                name: 'EPSG:4326'
                            }
                        },
                        features: [
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Polygon',
                                    coordinates: [coordinates]
                                },
                                properties: {
                                    land_Use: 'T'
                                }
                            }
                        ]
                    }
                };
            });

            return res.status(200).json({ message: 'Conversion successful', data: jsonData });
        } catch (error: any) {
            return res.status(error.status ?? 400).json({ message: error.message ?? JSON.stringify(error) });
        }
    },

    //Convertir archivo JSON a texto descifrando el número de tarjeta 
    convertJsonToText: (req: Request, res: Response) => {
        try {
            const { data, decryptionKey, delimiter } = req.body;

            const lines = data.map((item: JsonData) => {
                const coordinates: string = item.poligono.features[0].geometry.coordinates[0].join(', ');
                const decryptedCard: string = decryptCreditCard(item.tarjeta, decryptionKey);
                return `${item.documento}${delimiter}${item.nombres}${delimiter}${item.apellidos}${delimiter}${decryptedCard}${delimiter}${item.tipo}${delimiter}${item.telefono}${delimiter}(${coordinates})`;
            }).join('\n');

            return res.status(200).json({ message: 'Conversion successful', data: lines });
        } catch (error: any) {
            return res.status(400).json({ message: error.message ?? JSON.stringify(error) });
        }
    }
};

export default conversionController;

