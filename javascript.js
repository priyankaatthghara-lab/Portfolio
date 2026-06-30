let btn = document.querySelector(".gradient-btn");

btn.addEventListener("click", function(){

    document.querySelector("#contactme").scrollIntoView({
        behavior: "smooth"
    });

});
let linkedin=document.querySelector(".linkedin");
linkedin.addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/priyanka-kumari-1b537037a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BF2qUnMO2RXajaZ7pE9ZDQg%3D%3D","_blank");
})

let github=document.querySelector(".github");
github.addEventListener("click",function(){
    window.open("https://github.com/priyankaatthghara-lab","_blank");
})

let instagram=document.querySelector(".instagram");
instagram.addEventListener("click",function(){
    window.open("https://www.instagram.com/priyankaatthghara/","_blank");
})

let discord=document.querySelector(".discord");
discord.addEventListener("click",function(){
    window.open("https://discord.com/channels/@me","_blank");
})


let hirebtn=document.querySelector("#Hire");
hirebtn.addEventListener("click",function(){
   
    window.open("https://drive.google.com/file/d/1rRqBHB3siSBimZ_0I6RmOZ4XTzzK0LRP/view?usp=sharing","blank")
   })
function sendMail(event){
    event.preventDefault();
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        number:document.getElementById("number").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    };
    emailjs.send("service_e500516","template_et4szvl",params).then(alert("Message sent successfully 🚀"));
    document.getElementById("contact-form").reset();
}
let menuIcon = document.querySelector("#menuicon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
}
let projectsbox=document.querySelector(".projectsbox");
const projects=[{ image: "Project1.png",
    title: "Project 1",
    description:
      "AutoMob-Mechanics is a responsive web-based car service website built using HTML, CSS, and animations. It features a modern landing page with smooth UI effects, structured service sections, and an interactive design that simulates a real automobile workshop experience. The project focuses on building visually appealing and user-friendly web interfaces.", link: "https://priyankaatthghara-lab.github.io/Automob-mechanics/"},{ image: "campusconnect.png",
    title: "Project 2",
    description:
      "College Fusion (Campus Connect) is a responsive web-based college extracurricular platform built using HTML, CSS, JavaScript, and React. It enables students to explore clubs, register for events, stay updated with campus activities, and provides role-based access for students, companies, and administrators.",
    link: "https://priyankaatthghara-lab.github.io/Collegefusion/"},{
    image: "project2.png",
    title: "Project 3",
    description:
      "A responsive Tic Tac Toe game developed using HTML, CSS, and JavaScript, featuring interactive gameplay, win/draw detection, and a reset option.",
    link: "https://priyankaatthghara-lab.github.io/TicTacToe/"
  }, {
    image: "todo.png",
    title: "Project 4",
    description:
      "A responsive task management web app built with HTML, CSS, and JavaScript featuring an intuitive UI to organize tasks across To Do, In Progress, and Done sections.",
    link: "https://priyankaatthghara-lab.github.io/Portfolio/"
  },{
    image: "portfolio.png",
    title: "Project 5",
    description:
      "A responsive personal portfolio website built using HTML, CSS, and JavaScript to showcase projects, skills, and achievements.",
    link: "https://priyankaatthghara-lab.github.io/Portfolio/"
  },{
    image: "weatherskycast.png",
    title: "Project 6",
    description:
      "A feature-rich weather app delivering live weather updates, air quality insights, and local time with a clean, responsive user experience.",
    link: "https://priyankaatthghara-lab.github.io/Skycast-web/"
  }

]
projectsbox.innerHTML=projects.map((project)=>{
    return`
    <div class="project-card">
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">
          Review Project
        </a>
      </div>
      `
})
.join("");