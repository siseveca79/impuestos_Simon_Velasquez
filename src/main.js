// Importa la clase Cliente desde el archivo Cliente.js
import Cliente from './Cliente.js';

// Importa la clase Impuesto desde el archivo Impuesto.js
import Impuesto from './Impuesto.js';

// Crea una nueva instancia de Cliente con los datos proporcionados
const cliente1 = new Cliente('Juan Pérez', '12345678-9', 1000000, 500000);

// Imprime en la consola el nombre del cliente
console.log(`Nombre: ${cliente1.nombre}`);

// Imprime en la consola el rut del cliente
console.log(`Rut: ${cliente1.rut}`);

// Calcula e imprime en la consola el impuesto a pagar por el cliente
console.log(`Impuesto a pagar: $${cliente1.calcularImpuesto()}`);

// Crea una nueva instancia de Impuesto con los datos proporcionados
const impuesto1 = new Impuesto(1000000, 500000);

// Calcula e imprime en la consola el impuesto calculado
console.log(`Impuesto calculado: $${impuesto1.calcularImpuesto()}`);