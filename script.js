fetch("./productos.json")
  .then(respu => respu.json())
  .then(productos => miPrograma(productos))
  .catch(error => console.log(error))

// if (localStorage.getItem("carrito")) {
//   let carritoEnJSON = localStorage.getItem("carrito");
//   carrito = JSON.parse(carritoEnJSON);
// }
function miPrograma(productos) {
  let carrito = localStorage.getItem("carrito")
    ? JSON.parse(localStorage.getItem("carrito"))
    : [];

  let ContenedorProductos = document.getElementById("contenedorProductos"); // Uno solo
  let contenedorCarrito = document.getElementById("contenedorCarrito");
  let buscador = document.getElementById("buscador");
  let buscar = document.getElementById("buscar");
  buscar.onclick = filtrar;

  let inputMin = document.getElementById("min");
  let inputMax = document.getElementById("max");

  let comprar = document.getElementById("comprar");
  comprar.addEventListener("click", finalizarCompra);

  renderizarProductos(productos);
  renderizarCarrito(carrito);

  function finalizarCompra() {
    localStorage.removeItem("carrito");
    carrito = [];
    renderizarCarrito(carrito);
    mostrarSweetCompra(
      "Gracias por su compra",
      "success",
      2000,
      false,
      "imagenGiff"
    );
  }

  function filtrar(e) {
    console.log("E", e.target.id);
    let productosFiltrados = productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(buscador.value.toLowerCase()) ||
        producto.categoria.toLowerCase().includes(buscador.value.toLowerCase())
    );
    console.log(productosFiltrados);
    renderizarProductos(productosFiltrados);
  }

  function renderizarProductos(arrayDeProductos) {
    ContenedorProductos.innerHTML = "";
    arrayDeProductos.forEach((producto) => {
      let cardProducto = document.createElement("div");
      cardProducto.classList.add("producto");
      cardProducto.id = `card${producto.id}`;

      cardProducto.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    <button id=${producto.id}> Agregar al carrito</button>
   <img src=${producto.imgUrl} ./Imagenes/ShortDeportivo.png>
    
    `;

      if (producto.stock < 10) {
        cardProducto.classList.add("pocasUnidades");
        let PocasUnidades = document.createElement(`h6`);
        PocasUnidades.innerText = "Pocas unidades";
        cardProducto.appendChild(PocasUnidades);
      }
      ContenedorProductos.append(cardProducto);

      let boton = document.getElementById(producto.id);
      boton.onclick = agregarAlCarrito;
    });
  }
  function agregarAlCarrito(e) {
    let id = e.target.id;
    let productoBuscado = productos.find((producto) => producto.id == id);
    let productosEnCarrito = carrito.find(
      (productos) => productos.id == productoBuscado.id
    );
    mostrarSweetAlert(
      "top-end",
      "Producto agregado",
      "success",
      "Se agrego al carrito " + productoBuscado.nombre,
      false,
      3000,
      productoBuscado.imgUrl
    );

    if (productosEnCarrito) {
      let posicionProducto = carrito.findIndex(
        (producto) => producto == productosEnCarrito
      );
      carrito[posicionProducto].unidades++;
      carrito[posicionProducto].subtotal ==
        carrito[posicionProducto].precio * carrito[posicionProducto].unidades;
    } else {
      //propiedades + unidades + subtotal
      productoBuscado.unidades = 1;
      productoBuscado.subtotal = productoBuscado.precio;
      carrito.push(productoBuscado);
    }
    console.log(carrito);

    //storage JSON 1hora 25min

    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito(carrito);
  }

  function renderizarCarrito(productosEnCarrito) {
    contenedorCarrito.innerHTML = "";
    productosEnCarrito.forEach((producto) => {
      let cardProducto = document.createElement("div");
      cardProducto.classList.add("itemCarrito");
      cardProducto.innerHTML += `<h3>${producto.nombre}</h3>
    <p>${producto.unidades}</P>
    <p>${producto.subtotal}</p>`;
      contenedorCarrito.appendChild(cardProducto);
    });
  }

  function mostrarSweetAlert(
    posicion,
    texto,
    icono,
    titulo,
    mostrarBoton,
    tiempo,
    urlImagen
  ) {
    Swal.fire({
      position: posicion, //'top-end'
      text: texto,
      icon: icono,
      title: titulo,
      showConfirmButton: mostrarBoton,
      timer: tiempo,
      imageUrl: urlImagen,
    });
  }
  function mostrarSweetCompra(titulo, icono, tiempo, mostrarBoton) {
    Swal.fire({
      title: titulo,
      icon: icono,
      timer: tiempo,
      showConfirmButton: mostrarBoton,
    });
  }
}
fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then(resp => resp.json())
  .then(lista => console.log(lista))
  .catch(error => console.log(error));
