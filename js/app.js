        /*  BIENVENIDA E INIT  */
const init = () => {
    const bienvenida = document.querySelector("#bienvenidaText");
    const bienvenidaInput = document.querySelector(`.inputNombre`);
    bienvenidaInput.addEventListener("change", ()=> {
        localStorage.setItem("NOMBRE", bienvenidaInput.value);
        bienvenida.innerText = `Hola ${bienvenidaInput.value}, bienvenido a Saky.`;})
    let nombreGuardado = localStorage.getItem("NOMBRE")
    JSON.stringify(nombreGuardado);

    nombreGuardado == null ? nombreGuardado = null : bienvenida.innerText = `Hola ${nombreGuardado}, bienvenido a Kira Sports.`; /* OP TERNARIO */
}


    // PRODUCTOS AL REVERSO
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');
    const img3 = document.querySelector('#img3');
    const img4 = document.querySelector('#img4');
    const img5 = document.querySelector('#img5');
    const img6 = document.querySelector('#img6');
    const img7 = document.querySelector('#img7');
    const img8 = document.querySelector('#img8');
    const img9 = document.querySelector('#img9');
    const img10 = document.querySelector('#img10');
    const img11 = document.querySelector('#img11');
    const img12 = document.querySelector('#img12');

    // ARRAY DE IMAGENES   
const imagenes = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

    // FUNCTION Y BUCLE
const num = (i, e) => {
    e.addEventListener('mouseover', ()=> {
        e.setAttribute('src', `../assets/tienda${i}-${i}.jpg`)
        
    });
        e.addEventListener('mouseout', ()=> {
        e.setAttribute('src', `../assets/tienda${i}.jpg`)
    });
    
}
for (let i = 1; i < imagenes.length; i++) {
    imagenes.forEach(element => {

            num(i, element);
            i++;

        
    });
}


    // CONSTRUCTOR DE TIENDA

    class Tienda {
        constructor (nombre, precio) {
          this.nombre = nombre;
          this.precio = precio;
        }
      }
      
              /* PRODUCTOS DE TIENDA*/
      
      const producto0 =  new Tienda( "Camiseta San Lorenzo", 330);
      const producto1 =  new Tienda( "Camiseta Benfica", 400);
      const producto2 =  new Tienda( "Camiseta Independiente", 300);
      const producto3 =  new Tienda( "Campera A.C Milan", 370);
      const producto4 =  new Tienda( "Camiseta Bayern Munich", 330);
      const producto5 =  new Tienda( "Camiseta Boca Juniors", 400);
      const producto6 =  new Tienda( "Camiseta River Plate", 150);
      const producto7 =  new Tienda( "Camiseta Manchester City", 250);
      const producto8 =  new Tienda( "Camiseta Juventus", 200);
      const producto9 =  new Tienda( "Camiseta Borussia Dortmund", 200);
      const producto10 =  new Tienda( "Camiseta Selecciòn España", 200);
      const producto11 =  new Tienda( "Camiseta Selecciòn Colombia", 250);
      
      
              /* ARRAY DE PRODUCTOS*/
      const productos = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11];
      console.log(productos);

      /* AGREGAR NOMBRES DE PRODUCTOS[] */

const ANP = (producto, x) => {
    let precio = document.createElement("h4");
    precio.innerText = `${producto.nombre}`;
    let divPadre;
    let button;
    precio.setAttribute(`class`, `producto-nombre`);
    if (x === "first") {
        divPadre = document.querySelector(`.productos:${x}-child`);
        divPadre.appendChild(precio);
    }
    else {
        divPadre = document.querySelector(`.productos:nth-of-type(${x})`);
        divPadre.appendChild(precio);
    }
}
ANP(productos[0], "first");

let x = 1;
for (let i = 1; i < productos.length; i++) {
    x++;
    ANP(productos[i], x);
}


// /* AGREGAR PRECIOS DE PRODUCTOS[] */

 const APP = (producto, x) => {
     let precio = document.createElement("h5");
     precio.innerText = `Precio : $${producto.precio}`;
     let divPadre;
     let button;
     precio.setAttribute(`class`, `producto-precio`);
     if (x === "first") {
         divPadre = document.querySelector(`.productos:${x}-child`);
         divPadre.appendChild(precio);
     }
     else {
         divPadre = document.querySelector(`.productos:nth-of-type(${x})`);
         divPadre.appendChild(precio);
     }
 }
 APP(productos[0], "first");

x = 1;
 for (let i = 1; i < productos.length; i++) {
     x++;
     APP(productos[i], x);
 }


  /* ABRIR CARRITO */

let verCarrito = document.querySelector(`#verCarrito`);
let listaCarrito = document.querySelector(`#listaCarrito`);
const imagenCarrito = document.querySelector(`.nav-item-img`);
const buttonCarrito = document.querySelector("#pagar");
imagenCarrito.addEventListener('click', () => {
    verCarrito.setAttribute(`style`, `display: grid;`);
});

    /*CERRAR CARRITO */
const cerrarCarrito = document.querySelector(`#cerrarCarrito`);
cerrarCarrito.addEventListener('click', () => {
    verCarrito.setAttribute(`style`, `display: none;`);
});