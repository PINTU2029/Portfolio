
const projectList = [
    {
      id: 1,
      number: "01",
      title: "SwiftCart E-commers Website",
      description: "A high-performance, full-stack e-commerce solution engineered to provide a seamless digital shopping experience. The application features a robust backend architecture built with Node.js and Express, ensuring secure data handling and efficient API communication. It incorporates advanced state management in React for fluid UI interactions, a secure authentication layer using JWT, and a scalable database schema in MongoDB to manage complex product catalogs and user orders efficiently.",
      techStack : ["mongoDB" , "Express", "React" , "Node" , "JWT"],
      image: "assets/projects/pro1.png",
      liveLink: "https://swiftcart-com.onrender.com/",
      githubLink : "https://github.com/PINTU2029/SwiftCart.git"
    },

    {
      id: 2,
  number: "02",
  title: "CoverMatch — Insurance Management Platform",
  description: "Developed a full-featured insurance management  portal using the MERN stack, streamlining policy handling, claims processing, and customer interactions , Integrated Redux Toolkit for scalable state management across 8+ insurance modules, reducing component re-renders by ~25% ,Designed a responsive, mobile-first interface serving 500+ daily active users with sub-2s page load times.",       
  techStack: [ "MERN", "Redux Toolkit", "Bootstrap", "HTML/CSS"],
      image: "#",
      liveLink: "#",
      githubLink : "#"
    },  

    {
      id: 3,
  number: "03",
  title: "SkyCast Weather Dashboard",
  description: "A weather application built with React and Material UI that provides real-time weather updates and a clean, responsive user interface.",
  techStack: ["React", "Material UI", "Weather API", "JavaScript"],
      image: "assets/projects/Pro2.png",
      liveLink: "#",
      githubLink : "https://github.com/PINTU2029/weather.git"
    },  
];


const projects = document.querySelector(".projects");

let currentIndex = 0;
const renderProject = (index) =>{
     const projectContent = projectList[index];

     const previousDisabled = currentIndex === 0;
     const nextDisabled = currentIndex === projectList.length - 1 ;

     projects.innerHTML =  ` <div class="project-info">
                        <h3>${projectContent?.number}</h3>
                        <h4>${projectContent?.title}</h4>
                        <p>${projectContent?.description}</p>
                        <div class="tech-stack">
                            ${projectContent?.techStack?.map((tech , i)=>{
                                return ` <span key=${i}>${tech}</span>`;
                            }).join("") };
                        </div>
                        <hr/>
                        <div class="links">
                            <a href=${projectContent?.liveLink}><i class="ph ph-arrow-right"></i></a>
                            <a href=${projectContent?.githubLink}><i class="ph ph-github-logo"></i></a>
                        </div>
                    </div>  

                    <div class="carousel">
                        <img src=${projectContent?.image} alt=${projectContent?.title} />
                        <div class="arrows">
                            <a href="#" id="previous" class=${previousDisabled? "disabled-btn" : ""}>
                                <i class="ph ph-caret-left"></i>
                            </a>
                            <a href="#" id="next" class=${nextDisabled? "disabled-btn" : ""}>
                                <i class="ph ph-caret-right"></i>
                            </a>
                        </div>
                    </div>  `;

        
                    document.getElementById("previous").addEventListener("click" , (e)=>{
                            e.preventDefault();

                            if(currentIndex > 0) {
                                currentIndex--;
                            renderProject(currentIndex);
                            }
                    });

                    document.getElementById("next").addEventListener("click" , (e)=>{
                            e.preventDefault();

                            if(currentIndex < projectList.length - 1) {
                                currentIndex++;
                            renderProject(currentIndex);
                            }
                    });
};

renderProject(currentIndex);
