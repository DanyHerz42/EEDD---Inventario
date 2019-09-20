export default class Articulo {
  constructor(objCons) {
    this._codigo = objCons.codigo;
    this._nombre = objCons.nombre;
    this._precio = objCons.precio;
    this._cantidad = objCons.cantidad;
    this._descripcion = objCons.descripcion;
  }
  guardarEnLocalStorage() {
    let vec = [];
    let objArt = {
      codigo: this._codigo,
      nombre: this._nombre,
      precio: this._precio,
      cantidad: this._cantidad,
      descripcion: this._descripcion
    }
    if (localStorage.getItem("articulos")) {
      vec = JSON.parse(localStorage.getItem("articulos"));
      vec[vec.length] = objArt;
    } else {
      vec[0] = objArt;
    }
    localStorage.setItem("articulos", JSON.stringify(vec));
  }
  editarLocalStorage(){
    let vec = [];
    vec = JSON.parse(localStorage.getItem("articulos"));
    console.log(vec);
    vec.forEach((e, index) => {
      if (this._codigo === e.codigo) {
        e.nombre = this._nombre;
        e.precio = this._precio;
        e.cantidad = this._cantidad;
        e.descripcion = this._descripcion;
      }
    });
    localStorage.setItem("articulos", JSON.stringify(vec));
  }
  borrarDeLocalStorage() {
    let vec = [];
    vec = JSON.parse(localStorage.getItem("articulos"));
    console.log(vec);
    vec.forEach((e, index) => {
      if (this._codigo === e.codigo) {
        for (let i = index; i <= vec.length - 1; i++) {
          vec[i] = vec[i + 1];
        }
        vec.pop();
      }
    });
    localStorage.setItem("articulos", JSON.stringify(vec));
  }

  get codigo() {
    return this._codigo;
  }
  get nombre() {
    return this._nombre;
  }
  get precio() {
    return this._precio;
  }
  get cantidad() {
    return this._cantidad;
  }
  get descripcion() {
    return this._descripcion;
  }
  set codigo(newCodigo) {
    this._precio = newCodigo;
  }
  set nombre(newNombre) {
    this._precio = newNombre;
  }
  set precio(newPrecio) {
    this._precio = newPrecio;
  }
  set cantidad(newCantidad) {
    this._precio = newCantidad;
  }
  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }
  toString() {
    return `${this._codigo}, ${this._nombre}, ${this._precio}, ${this._cantidad}, ${this._descripcion}`
  }
}