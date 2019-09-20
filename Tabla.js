import Articulo from "./Articulo.js";

export default class Tabla {
  constructor(tabla) {
    this._tabla = tabla;
  }
  generarTabla() {
    this._tabla.innerHTML = " ";
    let thead = document.createElement("thead");
    let tr1 = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");
    let th5 = document.createElement("th");
    let th6 = document.createElement("th");
    th1.textContent = "Codigo";
    th2.textContent = "Nombre";
    th3.textContent = "Precio";
    th4.textContent = "Cantidad";
    th5.textContent = "Descripcion";
    th6.textContent = "Acciones";
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    tr1.appendChild(th5);
    tr1.appendChild(th6);
    thead.appendChild(tr1);
    this._tabla.appendChild(thead);
  }
  llenarTabla() {
    let vec = [];
    if (localStorage.getItem("articulos")) {
      vec = JSON.parse(localStorage.getItem("articulos"));
      vec.forEach((e, index) => {
        this.generarFila(e);
      });
    }
  }
  generarFila(objeto) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");

    let btnBorrar = document.createElement("button");
    btnBorrar.type = "button";
    btnBorrar.textContent = "Borrar"
    btnBorrar.className = "btn btn-danger";
    btnBorrar.addEventListener("click", () => {
      let articulo = new Articulo(objeto);
      articulo.borrarDeLocalStorage();
      this.generarTabla();
      this.llenarTabla();
    });

    let btnEditar = document.createElement("button");
    btnEditar.type = "button";
    btnEditar.textContent = "Editar"
    btnEditar.className = "btn btn-success";
    btnEditar.addEventListener("click", () => {
      this.formEdicion(objeto);
      
    });


    td1.textContent = objeto.codigo;
    td2.textContent = objeto.nombre;
    td3.textContent = objeto.precio;
    td4.textContent = objeto.cantidad;
    td5.textContent = objeto.descripcion;
    td6.appendChild(btnBorrar);
    td6.appendChild(btnEditar);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    this._tabla.appendChild(tr);
  }
  formEdicion(objeto) {
    let divBlack = document.createElement('div');
    divBlack.className = "divBlack";
    let container = document.createElement('div');
    container.className = "formRegistro";

    let form = document.createElement('form');
    form.className = "needs-validation p-4";
    form.noValidate = true;

    let formGroup1 = document.createElement('div');
    formGroup1.className = "form-group";
    let inpName = document.createElement('input');
    let lbName = document.createElement('label');
    lbName.style.color = "white"
    lbName.textContent = "Nombre "
    inpName.type = "text";
    inpName.required = true;
    inpName.value = objeto.nombre;
    inpName.placeholder = "Type here";
    inpName.className = "form-control";

    let formGroup2 = document.createElement('div');
    formGroup2.className = "form-group";
    let inpPrecio = document.createElement('input');
    let lbPrecio = document.createElement('label');
    lbPrecio.style.color = "white"
    lbPrecio.textContent = "Precio";
    lbPrecio.type = "number";
    inpPrecio.required = true;
    inpPrecio.value = objeto.precio;
    inpPrecio.className = "form-control";

    let formGroup3 = document.createElement('div');
    formGroup3.className = "form-group";
    let inpCantidad = document.createElement('input');
    let lbCantidad = document.createElement('label');
    lbCantidad.style.color = "white"
    lbCantidad.textContent = "Precio";
    lbCantidad.type = "number";
    inpCantidad.required = true;
    inpCantidad.value = objeto.cantidad;
    inpCantidad.className = "form-control";

    let formGroup4 = document.createElement('div');
    formGroup4.className = "form-group";
    let inpDescripcion = document.createElement('input');
    let lbDescripcion = document.createElement('label');
    lbDescripcion.style.color = "white"
    lbDescripcion.textContent = "Descripcion";
    lbDescripcion.type = "number";
    inpDescripcion.required = true;
    inpDescripcion.value = objeto.descripcion;
    inpDescripcion.className = "form-control";

    let btnSave = document.createElement('input');
    btnSave.className = 'btn btn-success';
    btnSave.value = 'S A V E';
    btnSave.style.marginRight = '10px';
    btnSave.type = 'button';
    btnSave.addEventListener('click', () => {
      let objEdit = {
        codigo: objeto.codigo,
        nombre: inpName.value,
        precio: inpPrecio.value,
        cantidad: inpCantidad.value,
        descripcion: inpDescripcion.value
      }
      document.querySelector('body').removeChild(divBlack);
      let articulo = new Articulo(objEdit);
      articulo.editarLocalStorage();
      this.generarTabla();
      this.llenarTabla();
    });

    let btnDel = document.createElement('input');
    btnDel.className = 'btn btn-danger';
    btnDel.value = 'C A N C E L'
    btnDel.type = 'button';
    btnDel.addEventListener('click', () => {
      document.querySelector('body').removeChild(divBlack);
    });

    formGroup1.appendChild(lbName);
    formGroup1.appendChild(inpName);
    formGroup2.appendChild(lbPrecio);
    formGroup2.appendChild(inpPrecio);
    formGroup3.appendChild(lbCantidad);
    formGroup3.appendChild(inpCantidad);
    formGroup4.appendChild(lbDescripcion);
    formGroup4.appendChild(inpDescripcion);
    form.appendChild(formGroup1);
    form.appendChild(formGroup2);
    form.appendChild(formGroup3);
    form.appendChild(formGroup4);
    form.appendChild(btnSave);
    form.appendChild(btnDel);
    container.appendChild(form);
    divBlack.appendChild(container)
    document.querySelector('body').appendChild(divBlack);

  }
}