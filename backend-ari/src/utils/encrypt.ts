import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const ivLength = 16; //Longitud del vector de inicialización

//Funcion para generar una clave de 256 bits (32 bytes) a partir de cualquier cadena
const generateKey = (key: string): Buffer => {
    return crypto.createHash('sha256').update(key).digest();
};

//Funcion para cifrar el numero de tarjeta
export const encryptCreditCard = (creditCard: string, key: string): string => {
    const iv = crypto.randomBytes(ivLength);
    const cipherKey = generateKey(key);
    const cipher = crypto.createCipheriv(algorithm, cipherKey, iv);
    let encrypted = cipher.update(creditCard, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
};

//Funcion para descifrar el numero de tarjeta
export const decryptCreditCard = (encryptedCard: string, key: string): string => {
    const parts = encryptedCard.split(':');
    const iv = Buffer.from(parts.shift() as string, 'hex');
    const encryptedText = Buffer.from(parts.join(':'), 'hex');
    const cipherKey = generateKey(key);
    const decipher = crypto.createDecipheriv(algorithm, cipherKey, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString('utf8');
};





