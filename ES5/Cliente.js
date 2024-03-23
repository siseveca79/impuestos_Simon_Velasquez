// Definición de la clase Cliente
class Cliente {
  // Constructor que inicializa los atributos nombre, rut, montoBrutoAnual y deducciones
  constructor(nombre, rut, montoBrutoAnual, deducciones) {
    this._nombre = nombre;
    this._rut = rut;
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  // Getter para obtener el nombre del cliente
  get nombre() {
    return this._nombre;
  }

  // Setter para modificar el nombre del cliente
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  // Getter para obtener el rut del cliente
  get rut() {
    return this._rut;
  }

  // Método para calcular el impuesto a pagar por el cliente
  calcularImpuesto() {
    return (this._montoBrutoAnual - this._deducciones) * 0.21;
  }
}

// Exporta la clase Cliente para que pueda ser utilizada en otros archivos
export default Cliente;