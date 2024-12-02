var sliderContents = document.querySelector(".slider");
var innerStyles = 'style="display: block;"';
const start = document.querySelector('.start').innerHTML
const hover = document.querySelector(".logo");

const publicKey = "DYLpMuWmAZt4RmrgD"
const serviceID = "service_7hs2a8f"
const templateID = "template_jv5vcb8"

emailjs.init(publicKey)

const goBack = document.createElement('li')
goBack.innerText = 'Atras'
goBack.onclick = function goback(){
    document.querySelector('.selects').removeChild(this)
    sliderContents.innerHTML = start
    document.body.style.backgroundImage = "url(./Images/prototipo2.png)"
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
    document.body.style.backgroundImage = "url(./Images/bg2.png)"
}

var contacto1 = `
<h1>Contacto</h1>
<h3>¿Por donde establecemos contacto?</h3>
<ul>
    <li>Para contactarme, o saber mas, podes escribir al mail <i class="fa-regular fa-envelope"></i><br>
    Te respondere a la brevedad
    </li>

    <form id="my-form">
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Nombre"
                    required
                />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="ejemplo@mail.com"
                required
              /><br>
        <textarea 
            name="message" 
            id="message" 
            cols="30" 
            rows="7" 
            placeholder="Escribi tu mensaje"
            required>
        </textarea>
        <button type="submit" class="btn">Enviar</button>
    </form>
</ul>
`;

function showContacto() {
    var contacto = `<section class="contacto" ${innerStyles}">${contacto1}</section>`;
    sliderContents.innerHTML = contacto;
    document.querySelector('.selects').prepend(goBack)
    document.body.style.backgroundImage = "url(./Images/bg3.png)"

    const formulario = document.querySelector("#my-form")
    const button = document.querySelector(".btn")
    const subjectInput = document.querySelector("#subject")
    const emailInput = document.querySelector("#email")
    const messageInput = document.querySelector("#message")

    formulario.addEventListener("submit", e =>{
        e.preventDefault();
        button.innerText = "Enviando..."
        button.disabled = true

        const inputFields = {
            subject: subjectInput.value,
            email: emailInput.value,
            message: messageInput.value
        }
    
        emailjs.send(serviceID, templateID, inputFields)
            .then(() => {
                alert("Enviado!")
                button.innerText = "Enviar"
                button.disabled = false
                subjectInput.value = ""
                emailInput.value = ""
                messageInput.value = ""
            }, (error) => {
                console.log(error)
                alert("algo salio mal")
            })
    })
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
    document.body.style.backgroundImage = "url(./Images/prototipo2.png)"
}
