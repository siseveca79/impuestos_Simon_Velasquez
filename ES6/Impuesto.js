class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  calcularImpuesto() {
    return (this._montoBrutoAnual - this._deducciones) * 0.21;
  }
}

export default Impuesto;
