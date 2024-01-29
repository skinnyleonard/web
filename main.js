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
<p>En este sitio ofrezco servicios de desarrollo web Front-end, diseño web, <br>
con los lenguajes conocidos del Front-end, como son HTML, CSS y Javascript, <br>
tambien las librerias del framework de React
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
        <h3>Modalidad de trabajo</h3>
        La modalidad de trabajo es virtual desde la computadora
    </li>
    <li>
        <h3>Plazo de entrega de la web</h3>
        El plazo de entrega lo fija el cliente
    </li>
    <li>
        <h3>Hosting</h3>
        El hosting (en caso de comprar un dominio) queda a cargo del cliente
    </li>
    <li>
        <h3>No se que poner aca</h3>
        Sigo sin saber con que llenar de cosas esta web desconfiable incluso para mi
    </li>
    <li>
        <h3>Diseño</h3>
        El diseño que la web esta manteniendo por ahora es una cagada <br>
        espantosamente desconfiable
    </li>
</ul>
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