"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Definición de la clase Impuesto
var Impuesto = /*#__PURE__*/function () {
  // Constructor que inicializa los atributos montoBrutoAnual y deducciones
  function Impuesto(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuesto);
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  // Método para calcular el impuesto a pagar
  return _createClass(Impuesto, [{
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this._montoBrutoAnual - this._deducciones) * 0.21;
    }
  }]);
}(); // Exporta la clase Impuesto para que pueda ser utilizada en otros archivos
var _default = exports["default"] = Impuesto;