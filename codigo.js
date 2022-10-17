
const contenedor= document.querySelector(".flex-container");

let llaves= ["imagenes/llave2.jpg","imagenes/llave.jpg","imagenes/llave3.jpg"];

const crearllave = (img,nombre, modelo, precio)=>{
    img= `<img class="llave-img" src="${img}">`;
    nombre= `<h2>${nombre}</h2>`;
    modelo= `<h3>Modelo : ${modelo}</h3>`;
    precio= `<h3>Precio: <b>$${precio}</b></h3>`;

    return [img,nombre, modelo, precio];
}

const cambiarvalor = number=>{
    document.getElementById("key-data").value= number
}

let documentfragment = document.createDocumentFragment(); 
for (let i = 1; i <=20; i++) {
    let aleatorio = Math.floor(Math.random()*llaves.length);
    let imag = llaves[aleatorio];
    let modelollave= Math.round(Math.random()*10+30);
    let preciollave= (Math.random()*20).toFixed(2);
    let llaveamostrar= crearllave(`${imag}`,`llave ${i}`,`${modelollave}`, `${preciollave}`);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{cambiarvalor(modelollave)})
    div.tabIndex =i;
    div.classList.add(`flex-item`,`item${i}`);
    div.innerHTML= llaveamostrar[0]+ llaveamostrar[1]+llaveamostrar[2]+llaveamostrar[3];
    documentfragment.appendChild(div);
}

contenedor.appendChild(documentfragment);

/* let llave = crearllave("llave 1", "ree333", "35");

contenedor.innerHTML= llave[0]+llave[1]+llave[2]+llave[3];
document.write(...llave); */