let inputNombre = document.getElementById('input-nombre');
let inputEdad = document.getElementById('input-edad');
let inputEmail = document.getElementById('input-email');
let inputTelefono = document.getElementById('input-telefono');
let fechaNacimiento = document.getElementById('input-fecha');
let inputUsuario = document.getElementById('input-usuario');
let inputPassword = document.getElementById('input-contraseña');
let formularioIngreso = document.getElementById('formulario-2');
let enviarDatos = document.getElementById('input__enviar-dato');
let inputEnviar = document.getElementById('input-enviar');
let form = document.getElementById('formulario');
let object = {};
const informacion = document.querySelector('.informacion');
let entrada = false;
let parceado;  

let pregunta




while (true) {
    let pregunta = prompt('¿Está usted logueado? (si o no)').toLowerCase();
    console.log('Respuesta recibida:', pregunta);

    
  
    if (pregunta === 'si') { 
        console.log('Usuario está logueado.');
        formularioIngreso.classList.toggle('activar');
        form.classList.toggle('opacidad__2'); 
        break; 
    } 
    else if (pregunta === 'no') { 
        console.log('Usuario no está logueado.');
        alert('Por favor, complete el formulario.');
        break; 
    } 

    else{
        alert('escribe si o no !!!! tan dificil es')
    }
}










form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nombreExpresion = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let edadExpresion = /^[0-9]{1,2}$/;
    let correoExpresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let telefonoExpresion = /^\d{7,14}$/;
    let usuarioExpresion = /^[a-zA-Z0-9_\-]{4,16}$/;
    let contraseñaExpresion = /^.{8,20}$/;

    let nombre = inputNombre.value;
    let edad = inputEdad.value;
    let email = inputEmail.value;
    let fecha = fechaNacimiento.value;
    let telefono = inputTelefono.value;
    let usuario = inputUsuario.value;
    let contraseña = inputPassword.value;

    let nuevafecha = fecha.split('-').reverse().join('/');

    if (!nombreExpresion.test(nombre) || !edadExpresion.test(edad) || !correoExpresion.test(email) ||
        !telefonoExpresion.test(telefono) || !usuarioExpresion.test(usuario) || !contraseñaExpresion.test(contraseña)) {
        alert('Completa todos los datos correctamente');
        return;
    }

    object = {
        inputNombre: nombre,
        inputEdad: edad,
        inputEmail: email,
        nuevafecha: nuevafecha,
        inputTelefono: telefono,
        inputUsuario: usuario,
        inputPassword: contraseña
    };

    let dato = localStorage.getItem('objecto');
    parceado = dato ? JSON.parse(dato) : [];

    let existe = parceado.some(exis => exis.inputUsuario === object.inputUsuario || exis.inputEmail === object.inputEmail);

    if (existe) {
        alert(`El usuario ${object.inputUsuario} ya existe`);
        return;
    }

    parceado.push(object);
    localStorage.setItem('objecto', JSON.stringify(parceado));
    alert(`El usuario ${object.inputUsuario}🤣🤣🤣🤣🤣🤣🤣🤣🤣 se a creado correctamente`);

    form.reset();
    formularioIngreso.classList.toggle('activar');
    form.classList.toggle('opacidad__2');
}); 



 function frasesPersona(f) { 

    let sentence=f


     let alternar=Math.floor(Math.random() * sentence.length) 

       let fra=sentence[alternar] 

       return fra

    
 } 

 let frases=['Persona buscada por interpool','Persona en banca rota','Persona muy exictosa','Mejor tenerlo lejos']


    let mostrarFrases=frasesPersona(frases) 




formularioIngreso.addEventListener('submit', (e) => {
    e.preventDefault();

    parceado = JSON.parse(localStorage.getItem('objecto')) || [];

    let inputUser = document.getElementById('input-usuario-1').value;
    let inputContraseña = document.getElementById('input-contraseña-2').value; 

    if(!inputUser || !inputContraseña){
        alert('ingresa un usuario o contraseña')
        return
    } 
   
    let verificado=parceado.find(elemen=>elemen.inputUsuario===inputUser && elemen.inputPassword=== inputContraseña) 

    if(verificado){ 
         alert(`HOLA !!!!${verificado.inputNombre} 😬😬😬😬😬😬😬😬😬😬😬 PONE ACEPTAR!!!!! `) 

          let formularioTitulo=document.getElementById('titulo') 

          formularioTitulo.classList.add('opacidad__2')
          informacion.innerHTML=`
         
        <span class="titulo" id="cerrar">X</span> 
         <h1>${mostrarFrases} </h1>
         <p>Nombre: ${verificado.inputNombre} </p>
         <p>Edad: ${verificado.inputEdad} </p>
         <p>Email: ${verificado.inputEmail} </p>
         <p>Fecha de nacimiento: ${verificado.nuevafecha} </p>
        <p>Telefono: ${verificado.inputTelefono} </p>
        ` 

        document.getElementById('cerrar').addEventListener('click',()=>{

            alert(`🤣🤣🤣🤣🤣🤣🤣🤣😂😂😂😂😂😂PONE DE NUEVO ACEPTAR ${verificado.inputNombre}  `) 

            setTimeout(() => { 
                window.location.reload() 


                
            },1000);

         
            
        })
     
    }  
   

     else{
        alert('no coinciden ni usuario ni contraseña')
     } 


        
        informacion.classList.add('flex') 

    

}) 

 





    
   

 







