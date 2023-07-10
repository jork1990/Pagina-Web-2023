const carrito =document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector("#lista-carrito body");
const  vaciarCarritoBtn = document-querySelector('vaciar-carrito');

cargarEventlisteners();

function cargarEventlisteners() {
    elementos1.addEventListener('click',comprarElemento);
    carrito.addEventListener('click',eliminarElemento);
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
    
}


function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classlist.contains('agregar-carrito')) {
        const elemento =e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        image: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textcontent,
        precio: elemento.querySelector('precio').textcontent,
        id: elemento.querySelector('a').getAtribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row =document.createElement('tr');
    row.innerHTML= `
    <td>
    <img src="${elemento.img}"width=100>
    <td>

    <td>
    ${elemento.titulo}
    <td>

    <td>
    ${elemento.precio}
    <td>

    <td>
    <a href="#" class="borrar" data-id="${elemento.id}"> x<a>
    <td>
    
    `;
    lista.appendChild(row);

}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
    elementoid;
    if (e.target.classlist.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento =e.target.parentElement.parentElement;

        elementoid =elemento.querySelector('a').getAtribute('data-id');

    }
}

function vaciarCarrito () {
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    return false;
}
