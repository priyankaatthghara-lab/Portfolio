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
   
    window.open("https://drive.google.com/file/d/10LUoTy1xq2xFCPXy8zsmUufBYJfwcqz5/view?usp=sharing","blank")
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
  },
  {
    image: "internsetu.png",
    title: "Project 7",
    description:
      "Built **InternSetu**, a university–industry platform for student performance evaluation, internship-readiness comparison, skill-gap analysis, and industry mentorship.",
    link: "https://internsetu-academia-student-bridge.vercel.app/"
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

// --- Added Animations & Interactions ---

// 1. Navbar Glass Effect on Scroll
window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// 2. Cinematic Intro Scene & Parallax
const introScene = document.getElementById("intro-scene");
if (introScene && typeof gsap !== "undefined") {
    const tl = gsap.timeline();
    
    // Disable body scroll while intro is active
    document.body.style.overflow = "hidden";
    gsap.registerPlugin(TextPlugin);
    
    // Fade in girl from a blur/scale effect
    tl.fromTo(".intro-character-img", 
        { scale: 1.2, opacity: 0, filter: "blur(10px)" }, 
        { scale: 1.0, opacity: 1, filter: "blur(0px)", duration: 2, ease: "power3.out" }
    )
    .fromTo(".intro-overlay", 
        { opacity: 0 }, 
        { opacity: 1, duration: 1.5 }, 
        "-=1.5"
    )
    // Ensure text lines are visible but empty before typing
    .set(".intro-text", { opacity: 1 })
    // Typing text reveal
    .fromTo(".intro-text.line-1", { text: "" }, { text: "Hi, I'm Priyanka Kumari.", duration: 1.5, ease: "none" })
    .fromTo(".intro-text.line-2", { text: "" }, { text: "I build thoughtful, interactive experiences for the web.", duration: 2, ease: "none" })
    .fromTo(".intro-text.line-3", { text: "" }, { text: "Frontend Developer • Problem Solver • Software Engineering Enthusiast", duration: 2, ease: "none" })
    .to(".intro-continue", { opacity: 1, duration: 1, ease: "power2.out" }, "+=0.5");

    // Intro Mouse Parallax
    document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 70;
        const y = (window.innerHeight / 2 - e.pageY) / 70;
        gsap.to(".intro-character-img", {
            x: x,
            y: y,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Enter Portfolio
    const enterBtn = document.getElementById("enter-portfolio");
    if (enterBtn) {
        enterBtn.addEventListener("click", () => {
            gsap.to(introScene, {
                y: "-100%",
                duration: 1.2,
                ease: "power4.inOut",
                onComplete: () => {
                    introScene.style.display = "none";
                    document.body.style.overflow = ""; // restore scroll
                    if (typeof ScrollTrigger !== "undefined") {
                        ScrollTrigger.refresh(); // Crucial for fixing project visibility
                    }
                }
            });
        });
    }

    // Return to Intro
    const returnIntroBtn = document.getElementById("floating-intro-btn");
    if (returnIntroBtn) {
        returnIntroBtn.addEventListener("click", (e) => {
            e.preventDefault();
            introScene.style.display = "flex";
            document.body.style.overflow = "hidden";
            gsap.fromTo(introScene, 
                { y: "-100%" }, 
                { y: "0%", duration: 1.2, ease: "power4.inOut" }
            );
        });
    }
}


// 3. Initialize VanillaTilt
if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(document.querySelectorAll(".project-card"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });
    
    VanillaTilt.init(document.querySelectorAll(".achievements"), {
        max: 15,
        speed: 400,
        scale: 1.05
    });
}

// 4. GSAP Scroll Animations
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section
    gsap.from(".homecontent h1", { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
    gsap.from(".homecontent h3", { opacity: 0, y: 30, duration: 1, delay: 0.2, ease: "power3.out" });
    gsap.from(".homecontent p", { opacity: 0, y: 20, duration: 1, delay: 0.4, ease: "power3.out" });
    gsap.from(".btngroup", { opacity: 0, scale: 0.9, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" });
    gsap.from(".profile-wrapper", { opacity: 0, x: 50, duration: 1.2, delay: 0.3, ease: "power3.out" });

    // About Section
    gsap.from(".aboutcontent h2", {
        scrollTrigger: { trigger: ".About", start: "top 80%" },
        opacity: 0, x: -50, duration: 1
    });
    gsap.from(".aboutcontent p", {
        scrollTrigger: { trigger: ".About", start: "top 75%" },
        opacity: 0, y: 30, duration: 1
    });

    // Achievements
    gsap.from(".newachievement .achievements", {
        scrollTrigger: { trigger: ".Achievements", start: "top 80%" },
        y: 50, stagger: 0.1, duration: 0.8, ease: "back.out(1.2)"
    });

    // Academia
    gsap.from(".academia", {
        scrollTrigger: { trigger: ".Academia", start: "top 80%" },
        scale: 0.95, duration: 0.8
    });

    // Projects
    gsap.from(".project-card", {
        scrollTrigger: { trigger: ".Projects", start: "top 80%" },
        y: 50, stagger: 0.15, duration: 0.8, ease: "power3.out"
    });

    // Contact
    gsap.from(".Contact form", {
        scrollTrigger: { trigger: ".Contact", start: "top 80%" },
        opacity: 0, y: 30, duration: 1
    });
}