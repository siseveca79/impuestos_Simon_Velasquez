"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));
var _Impuesto = _interopRequireDefault(require("./Impuesto.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Importa la clase Cliente desde el archivo Cliente.js

// Importa la clase Impuesto desde el archivo Impuesto.js

// Crea una nueva instancia de Cliente con los datos proporcionados
var cliente1 = new _Cliente["default"]('Juan Pérez', '12345678-9', 1000000, 500000);

// Imprime en la consola el nombre del cliente
console.log("Nombre: ".concat(cliente1.nombre));

// Imprime en la consola el rut del cliente
console.log("Rut: ".concat(cliente1.rut));

// Calcula e imprime en la consola el impuesto a pagar por el cliente
console.log("Impuesto a pagar: $".concat(cliente1.calcularImpuesto()));

// Crea una nueva instancia de Impuesto con los datos proporcionados
var impuesto1 = new _Impuesto["default"](1000000, 500000);

// Calcula e imprime en la consola el impuesto calculado
console.log("Impuesto calculado: $".concat(impuesto1.calcularImpuesto()));