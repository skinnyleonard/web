var sliderContents = document.querySelector(".slider");
var innerStyles = 'style="display: block;"';
const start = document.querySelector('.start').innerHTML

const goBack = document.createElement('li')
goBack.innerText = 'Atras'
goBack.onclick = function goback(){
    document.querySelector('.selects').removeChild(this)
    sliderContents.innerHTML = start
}

var whatis1 = `
<h1>¿Que es el Front-end?</h1>
<p>Si buscas diseño y funcionalidad para el sitio, el Front-end es eso</p>
<p>El Front-end es la interfaz con la que el usuario interactua en la pagina, <br>
el apartado visual, su diseño, y la funcionalidad del sitio (botones, enrutamiento, animaciones)<br>
La parte Front-end del sitio se encarga de eso <br>
El Back-end mientras tanto se encarga del apartado de servidores, manejo de datos.<br>
<h2>¿Que ofrezco?</h2>
<p>Ofrezco desarrollo web Front-end, puedo diseñar portfolios, darle interctividad,<br>
animacion al sitio, diseñar una web que te presente, (como la que estas viendo ahora), y mas.<br>
Todo lo que sea con interfaz grafica e interaccion del usuario, me dedico
`;
function showWhatis() {
    var whatis = `<section class="whatis" ${innerStyles}">${whatis1}</section>`;
    sliderContents.innerHTML = whatis;
    document.querySelector('.selects').prepend(goBack)
}
var contacto1 = `
<h1>Contacto</h1>
<h3>¿Por donde establecemos contacto?</h3>
<ul>
    <li>Para contactarme, o saber mas, podes escribir al mail <i class="fa-regular fa-envelope"></i><br>
    Te respondere a la brevedad
    </li>

    <form onsubmit="emailSend(); reset(); return false">
        <input type="text" id="name" placeholder="Nombre" name="name" required><br>
        <input type="email" id="email" placeholder="Mail" name="email" required><br>
        <textarea name="alltext" id="alltext" cols="30" rows="7" placeholder="Escribi tu mensaje" required></textarea>
        <button type="submit" class="btn">Enviar</button>
    </form>
</ul>
`;
function showContacto() {
    var contacto = `<section class="contacto" ${innerStyles}">${contacto1}</section>`;
    sliderContents.innerHTML = contacto;
    document.querySelector('.selects').prepend(goBack)
}
var faq1 = `
<h1>Dudas frecuentes</h1>
<ul>
    <li>
        <h3>Hosting</h3>
        El hosting (en caso de comprar un dominio) queda a cargo del cliente
    </li>
    <li>
        <h3>Estructura y diseño web</h3>
        Diseño y desarrollo web a partir de una idea del cliente, algunas sugerencias o<br>
        necesidades especificas <br>
        Diferencia entre estructura y diseño: La estructura es donde van acomodados los objetos:
        botones, cuadros, imagenes, etc. <br> Y el diseño (ya indicado por el cliente), los colores,
        etc. La funcionalidad del sitio tambien sera indicada <br> y personalizada por el cliente. <br>
        La funcionalidad se basa en los botones por ejemplo, las acciones de los botones del sitio, <br>
        las rutas del sitio, las rutas son las paginas que tenga el sitio, una que muestre algo disitinto<br>
        de la otra. <br>Todo esto mediante mail, con imagenes, y descripciones <br>
    </li>
    <li>
        <h3>Mantenimiento</h3>
        El mantenimiento segun necesite el cliente, se va a hacer mensualmente
    </li>
    </ul>
    <h2>Cualquier otro tipo de duda, estare a disposicion !</h2>
`;
function showFaq() {
    var faq = `<section class="faq" ${innerStyles}">${faq1}</section>`;
    sliderContents.innerHTML = faq;
    document.querySelector('.selects').prepend(goBack)
}
function emailSend() {
    var userName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var alltext = document.getElementById('alltext').value
    var messageBody = "Hola soy " + userName + "<br/> Mi mail es " + email + '<br/>' + alltext;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "bachos2007@hotmail.com",
        Password: "B982B680E1B18EAF659875AEBEF60B2D23A7",
        To: "tomibanderas20@gmail.com",
        From: "bachos2007@hotmail.com",
        Subject: "This is the subject",
        Body: messageBody,
    }).then((message) => alert(message));
}