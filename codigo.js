let titulo = document.getElementById("hero-title");
let subtitulo = document.getElementById("hero-subtitle");
titulo.innerText="El buen comer";
subtitulo.innerText="Tu restaurante a domicilio en tu ciudad";



//Categorizo arrays
const productos=[
    {
        nombre:"Ensalada Mixta",
        referencia:"refA001",
        categoria: "Entrantes",
        img: "img/a1.jpeg",
        precio: 6.90
    },
    {
        nombre:"Ensalada César",
        referencia:"refA002",
        categoria: "Entrantes",
        img: "img/a2.jpeg",
        precio: 9.90
    },
    {
        nombre:"Saquitos bolettus",
        referencia:"refA003",
        categoria: "Entrantes",
        img: "img/a3.jpeg",
        precio: 16.90
    }

];


//cards
let platos = document.getElementById("platos");
for(const producto of productos){
    let plato = document.createElement("div");
    plato.className="mb-5 col-12 col-md-3";
    plato.innerHTML=`
    <div class="card h-100">
    <!-- Product image-->
    <img class="card-img-top" src="${producto.img}" alt="..." />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${producto.nombre} </h5>
            <!-- Product price-->
            ${producto.precio} €
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Añadir a la cesta</a></div>
    </div>
</div>
</div>
    `;
    platos.append(plato);
}