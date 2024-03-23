// Importa la clase Cliente desde el archivo Cliente.js
import Cliente from './Cliente.js';

// Importa la clase Impuesto desde el archivo Impuesto.js
import Impuesto from './Impuesto.js';

// Crea más instancias de Cliente con diferentes datos
const cliente1 = new Cliente('Juan Pérez', '12345678-9', 1500000, 50000);
const cliente2 = new Cliente('María García', '98765432-1', 800000, 200000);
const cliente3 = new Cliente('Carlos López', '45678901-2', 2000000, 300000);
const cliente4 = new Cliente('Ana Rodríguez', '13579024-3', 1200000, 100000);
const cliente5 = new Cliente('Pedro Ramírez', '24680135-4', 900000, 80000);

// Imprime los datos y el impuesto a pagar para cada cliente
console.log(`Nombre: ${cliente1.nombre}`);
console.log(`Rut: ${cliente1.rut}`);
console.log(`Impuesto a pagar: $${cliente1.calcularImpuesto()}`);
console.log(`Impuesto calculado: $${new Impuesto(cliente1._montoBrutoAnual, cliente1._deducciones).calcularImpuesto()}`);

console.log(`Nombre: ${cliente2.nombre}`);
console.log(`Rut: ${cliente2.rut}`);
console.log(`Impuesto a pagar: $${cliente2.calcularImpuesto()}`);
console.log(`Impuesto calculado: $${new Impuesto(cliente2._montoBrutoAnual, cliente2._deducciones).calcularImpuesto()}`);

console.log(`Nombre: ${cliente3.nombre}`);
console.log(`Rut: ${cliente3.rut}`);
console.log(`Impuesto a pagar: $${cliente3.calcularImpuesto()}`);
console.log(`Impuesto calculado: $${new Impuesto(cliente3._montoBrutoAnual, cliente3._deducciones).calcularImpuesto()}`);

console.log(`Nombre: ${cliente4.nombre}`);
console.log(`Rut: ${cliente4.rut}`);
console.log(`Impuesto a pagar: $${cliente4.calcularImpuesto()}`);
console.log(`Impuesto calculado: $${new Impuesto(cliente4._montoBrutoAnual, cliente4._deducciones).calcularImpuesto()}`);

console.log(`Nombre: ${cliente5.nombre}`);
console.log(`Rut: ${cliente5.rut}`);
console.log(`Impuesto a pagar: $${cliente5.calcularImpuesto()}`);
console.log(`Impuesto calculado: $${new Impuesto(cliente5._montoBrutoAnual, cliente5._deducciones).calcularImpuesto()}`);