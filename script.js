
let productos = [
  {
    id: 1,
    nombre: "Short Deportivo",
    categoria: "Deportiva",
    precio: 1500,
    stock: 20,
    imgUrl: "./Imagenes/ShortDeportivo.png",
  },
  {
    id: 2,
    nombre: "Campera",
    categoria: "Ropa de invierno",
    precio: 1800,
    stock: 10,
    imgUrl: "./Imagenes/Campera.png",
  },
  {
    id: 3,
    nombre: "Musculosa",
    categoria: "Ropa de verano",
    precio: 2000,
    stock: 9,
    imgUrl: "./Imagenes/Musculosa.jpg",
  },
  {
    id: 4,
    nombre: "Remera",
    categoria: "Ropa de Invierno",
    precio: 2500,
    stock: 15,
    imgUrl: "./Imagenes/Remera.png",
  },
];
let carrito = [] 

let ContenedorProductos = document.getElementById("contenedorProductos"); // Uno solo
let contenedorCarrito = document.getElementById("contenedorCarrito");
let buscador = document.getElementById("buscador");
let buscar = document.getElementById("buscar");
buscar.onclick = filtrar;

renderizarProductos(productos);


function filtrar(e) {
  console.log("E", e.target.id)
  let productosFiltrados = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(buscador.value.toLowerCase()) || producto.categoria.toLowerCase().includes(buscador.value.toLowerCase())
  )
  console.log(productosFiltrados)
  renderizarProductos(productosFiltrados)
}

function renderizarProductos(arrayDeProductos) {
  ContenedorProductos.innerHTML = ""
  arrayDeProductos.forEach(producto => {
    let cardProducto = document.createElement("div")
    cardProducto.classList.add("producto")
    cardProducto.id = `card${producto.id}`

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
  let id = e.target.id
  let productoBuscado = productos.find(producto => producto.id == id)
  let productosEnCarrito = carrito.find(productos => productos.id == productoBuscado.id)

  if (productosEnCarrito) {

    let posicionProducto = carrito.findIndex(producto => producto == productosEnCarrito)
    carrito[posicionProducto].unidades++
    carrito[posicionProducto].subtotal == carrito[posicionProducto].precio * carrito[posicionProducto].unidades
  }else{
    //propiedades + unidades + subtotal
    productoBuscado.unidades = 1
    productoBuscado.subtotal = productoBuscado.precio
carrito.push(productoBuscado)
  }
  console.log(carrito)
  renderizarCarrito(carrito)
}

function renderizarCarrito(productosEnCarrito) {
  
  contenedorCarrito.innerHTML =""
  productosEnCarrito.forEach(producto => {
    let cardProducto = document.createElement("div")
    cardProducto.classList.add("itemCarrito")
    cardProducto.innerHTML += `<h3>${producto.nombre}</h3>
    <p>${producto.unidades}</P>
    <p>${producto.subtotal}</p>`
    contenedorCarrito.appendChild(cardProducto);
  })
}
