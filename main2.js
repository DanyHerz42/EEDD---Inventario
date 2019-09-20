class Main{
  constructor(){
    let resultado = document.querySelector("#resultado");
    document.querySelector("#busqueda").addEventListener("keyup", () => {
      let busqueda = document.querySelector("#busqueda").value;
      this.buscar(busqueda,resultado);
    });
  }
  buscar(busqueda,resultado){
    let vec = [];
    vec = JSON.parse(localStorage.getItem("articulos"));
    vec.forEach((e,index) => {
      if(e.codigo == busqueda){
        resultado.textContent = `CODIGO: ${e.codigo} || NOMBRE: ${e.nombre} || PRECIO: ${e.precio} || CANTIDAD: ${e.cantidad} || DESCRIPCION: ${e.descripcion}`
      }
    });
  }
}
let m = new Main();