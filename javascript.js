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
