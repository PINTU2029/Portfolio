const toggle = document.getElementById("menu-toggle");

if(toggle && toggle.checked ) {
        document.body.classList.add("no-scroll");
}else{
     document.body.classList.remove("no-scroll");
}

const words = [
  "MERN Stack Developer",
  "Software Engineer",
  "Tech Enthusiast"
];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
    const currentWord = words[wordIndex];

    if(!isDeleting) {
       typingText.textContent = currentWord.substring(0, charIndex + 1);
       charIndex++;

       if(charIndex === currentWord.length ) {
        isDeleting = true;
        setTimeout(type , nextWordDelay);
       }else {
        setTimeout(type , typingDelay);
       }
    } else {
      typingText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if(charIndex ===0 ) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type , 500);
      } else {
         setTimeout(type , erasingDelay);
      }

    }

};

document.addEventListener("DOMContentLoaded" , ()=> {
    if(words?.length ) type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link)=> {
    link.addEventListener("click" , (e)=> {
        e.preventDefault();
        link.classList.add("active");

        navlinks.forEach((l) => {
            if(l===link){
               l.classList.add("active");
            } else {
               l.classList.remove("active");
              }
            });

        const tabName = link.dataset.tab;

        tabs.forEach((tab)=>{
            if(tab.id === tabName) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });


        if(tabName === "services") {
            const serviceList = [{
                id: 1,
                icon: "ph-code",
                text: "Full-Stack Development",
                para: "Building comprehensive, end-to-end web applications from scratch using the MERN stack.",
            }, 
            {
                id: 2,
                icon: "ph-browsers",
                text: "Scalable Backend ",
                para: "Developing robust, high-performance server-side logic and secure RESTful APIs to manage complex workflows.",
            }, 

            {
                id: 3,
                icon: "ph-database",
                text: "Database Design",
                para: "Designing efficient and secure NoSQL database schemas using MongoDB Atlas for seamless data management.",
            }, 

            {
                id: 4,
                icon: "ph-layout",
                text: "UI/UX ",
                para: "Crafting responsive, user-centric, and interactive interfaces with React that ensure a premium user experience.",
            }, 

            {
                id: 5,
                icon: "ph-cloud",
                text: "Cloud Integration",
                para: "Managing backend server deployment and cloud integration on platforms like Render to ensure your projects are live and scalable.",
            }, 

            {
                id:6,
                icon: "ph-wrench",
                text: "Technical Debugging",
                para: "Providing expert code reviews, resolving complex bugs, and optimizing existing projects for better performance and maintainability.",
            }, 
           
          ];

          const services = document.getElementsByClassName("service-list"); 
        
          const innerContent = serviceList.map((l)=>{
            return `  <div class="box" key=${l?.id}>
                        <div class="head-icons">
                             <i class="ph ${l?.icon}"></i>
                             <span>  <i class="ph ph-arrow-down-right"></i> </span>
                        </div>
                        <h3>${l?.text}</h3>
                        <span class="spacer"></span>
                        <p>${l?.para}
                        </p>
                    </div> `;
          }).join("");

          Array.from(services).forEach((ele)=> {
            ele.innerHTML = innerContent;
          });   

        } 

        toggle.checked = false;
    });
});
