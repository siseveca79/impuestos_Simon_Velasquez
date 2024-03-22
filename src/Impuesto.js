// Definición de la clase Impuesto
class Impuesto {
  // Constructor que inicializa los atributos montoBrutoAnual y deducciones
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  // Método para calcular el impuesto a pagar
  calcularImpuesto() {
    return (this._montoBrutoAnual - this._deducciones) * 0.21;
  }
}

// Exporta la clase Impuesto para que pueda ser utilizada en otros archivos
export default Impuesto;