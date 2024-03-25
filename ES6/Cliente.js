class Cliente {
  constructor(nombre, rut, montoBrutoAnual, deducciones) {
    this._nombre = nombre;
    this._rut = rut;
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get rut() {
    return this._rut;
  }

  calcularImpuesto() {
    return (this._montoBrutoAnual - this._deducciones) * 0.21;
  }
}

export default Cliente;
