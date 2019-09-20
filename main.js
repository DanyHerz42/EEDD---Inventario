import Tabla from "./Tabla.js";
import Articulo from "./Articulo.js"
class Main{
  constructor(){
    // localStorage.clear();
    this.iniciarTabla();
    let btn = document.querySelector("#btnAdd").addEventListener("click", () => {
      this.agregarNuevoProducto();
    })
    document.querySelector("#busqueda").addEventListener("click", () => {
      console.log("jojo");
    })
  }
  iniciarTabla(){
    let tabla = document.querySelector("#table");
    let tabla1 = new Tabla(tabla);
    tabla1.generarTabla();
    tabla1.llenarTabla();
  }
  agregarNuevoProducto(){
    let objProducto = {
      codigo: document.querySelector("#codigo").value,
      nombre: document.querySelector("#nombre").value,
      precio: document.querySelector("#precio").value,
      cantidad: document.querySelector("#cantidad").value,
      descripcion: document.querySelector("#descripcion").value,
    }
    let articulo = new Articulo(objProducto);
    articulo.guardarEnLocalStorage();
    this.iniciarTabla();
  }
}

let m = new Main();