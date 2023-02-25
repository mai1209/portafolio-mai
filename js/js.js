const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const text1 = document.querySelector(".text1");
const title = document.querySelector(".title");
const Home = document.querySelector(".Home");
const Abilities = document.querySelector(".Abilities");
const Proyects = document.querySelector(".Proyects");
const Contact = document.querySelector(".Contact");


button2.addEventListener ("click",function (){
    text1.innerHTML = "Soy de Santa fe (Capital) - Argentina, tengo 26 años, soy una persona responsable con muchas ganas detrabajar, seguir ganando experiencia y desarrollarme día a día, por lo siguiente me encuentro en la búsqueda de mi primer trabajo de desarrollo web.<br>Mi enfoque actual es en el front aunque tengo conocimientos full stack.<br> Mi nivel de inglés oral y escrito es intermedio.<br> Actualmente me encuentro aprendiendo programación full stack.<br>";
    title.innerHTML="Hola mi nombre es:<br>Maira Coria";
    Home.innerHTML="Inicio";
    Abilities.innerHTML="Habilidades";
    Proyects.innerHTML="Proyectos";
    Contact.innerHTML="Contacto";
});

button1.addEventListener ("click",function(){
    text1.innerHTML = "I am from Santa Fe (Capital) - Argentina, I am 26 years old, I am a responsible person with a great desire to work, continue to gain experience and develop myself day by day, therefore I am looking for my first web development job.<br>My current focus is on the front end although I have full stack knowledge.<br>My level of oral and written English is intermediate.<br>I am currently learning full stack programming.<br>";
    title.innerHTML="Hello my name is:<br>Maira Coria";
    Home.innerHTML="Home";
    Abilities.innerHTML="Abilities";
    Proyects.innerHTML="Proyects";
    Contact.innerHTML="Contact";
});
