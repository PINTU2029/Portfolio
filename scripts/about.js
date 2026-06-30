const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", ()=>{
    if(aboutTabs){
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab) =>{
    tab.addEventListener("click" , (e)=> {
         e.preventDefault();

         aboutTabs.forEach((a) =>{
            a.classList.remove("active");
         });

         tab.classList.add("active");

         aboutContent.forEach((c) =>{
            c.classList.remove("active");
         });

        const activeTab = tab.dataset.section;

        document.getElementById(activeTab).classList.add("active");

        if(activeTab === "experience"){
             const experiences = document.querySelector(".experience-list");

             const experienceList = [
            {
                id: 1,
                date: "May 2026 ",
                position: "SwiftCart",
                company: "Independent Open Source Contributions",
                details: "Developed a feature-rich software application with a primary focus on secure authentication controllers and backend service reliability.",
             } ,

               {
                id: 2,
                date: "Going On ",
                position: "Software Development Intern  ",
                company: "The Entrepreneurship Network (TEN)",
                details: "Applying industry-standard coding practices to streamline backend processes and improve overall system efficiency.",
             } ,

             ];

             const experienceContent = experienceList.map((ele) =>{
                return ` <div class="experience-box" key=${ele?.id}>
                            <h4>${ele?.date}</h4>
                            <h3>${ele?.position}</h3>
                            <div class="company-name">
                                <span></span>
                                <p>${ele?.company}</p>
                            </div>
                            <p>${ele?.details}</p>
                        </div> `;
             }).join("");

             if(experiences){
               experiences.innerHTML = experienceContent;
             }
        } else if (activeTab === "education"){
           const education = document.querySelector(".education-list");

           const educationList = [
            {
              id: 1,
              date: "2023-2027",
              degree: "B.Tech in Electronics & Communication Engineering",
              institution: "Indian Institute of Information Technology Senapati , Manipur",
              details: "Currently pursuing B.Tech in ECE with a 7.05 CPI till 6th semester."
            },
            {
             id: 2,
             date: "2020 - 2021",
             degree: "Higher Secondary (12th)",
             institution: "Government Senior Secondary School Baharawanda, Dausa Rajasthan",
             details: "Completed Higher Secondary education with 95.50%."
            },
            {
             id: 3,
             date: "2018 - 2019",
             degree: "Secondary (10th)",
             institution: "Govt. Virishtha Upadhyay Sanskrit School Baharawandra, Dausa",
             details: "Completed Secondary education with 89.67%."
}

           ];

           const educationContent = educationList.map((ele) => {
             return `<div class="experience-box" key=${ele?.id}>
                            <h4>${ele?.date}</h4>
                            <h3>${ele?.degree}</h3>
                            <div class="company-name">
                                <span></span>
                                <p>${ele?.institution}</p>
                            </div>
                            <p>${ele?.details}</p>
                        </div> `;
           }).join('');

           if(education){
            education.innerHTML = educationContent;
           }
         } else if (activeTab === "skills"){

            const skills = document.querySelector(".skill-list");

            const skillList = [
               {
                 id: 1,
                 name: "HTML - Hyper Text Markup Language",
                 icon: "assets/skills/html.png",
               },
               {
                 id: 2,
                 name: "CSS",
                 icon: "assets/skills/css.png",
               },
               {
                 id: 3,
                 name: "Javascript",
                 icon: "assets/skills/js.png",
               },
               {
                 id: 4,
                 name: "Bootstrap",
                 icon: "assets/skills/bootstrap.png",
               },
               {
                 id: 5,
                 name: "Tailwind CSS",
                 icon: "assets/skills/Tailwind.png",
               },
               {
                 id: 6,
                 name: "React.js",
                 icon: "assets/skills/react.png",
               },
               {
                 id: 7,
                 name: "node.js",
                 icon: "assets/skills/node.png",
               },
               {
                 id: 8,
                 name: "Express.js",
                 icon: "assets/skills/Express.png",
               },
               {
                 id: 9,
                 name: "MySQL",
                 icon: "assets/skills/MySQL.png",
               },
               {
                 id: 10,
                 name: "MongoDb",
                 icon: "assets/skills/mongodb.png",
               },
               {
                 id: 11,
                 name: "SQL",
                 icon: "assets/skills/SQL.png",
               },
               {
                 id: 12,
                 name: "Redux",
                 icon: "assets/skills/Redux.png",
               },
               {
                 id: 13,
                 name: "C++",
                 icon: "assets/skills/c++.png",
               },
            ];

            const skillContent = skillList.map((ele)=> {
                return `
                   <div class="skill-box" key=${ele?.id}>
                            <img src=${ele?.icon} alt=${ele?.name}" title="${ele?.name}" loading="lazy"/>
                        </div> `;
            }).join("");

            if(skills) {
               skills.innerHTML = skillContent;
            }
         }else if (activeTab ==="about-me" ){
            const myInfo = document.querySelector(".my-info");
            const infoList = [
               { id: 1, key: "Name:", value: "Pintu Saini" },
    { id: 2, key: "Role:", value: "Full-Stack MERN Developer" },
    { id: 3, key: "Degree:", value: "B.Tech in ECE (IIIT Manipur)" },
    { id: 4, key: "Email:", value: "pmsaini577@email.com" },
    { id: 5, key: "Location:", value: "Jaipur, Rajasthan" },
    { id: 6, key: "Languages:", value: "Hindi, English" }
            ];
           
            const infoContent = infoList.map((ele) =>{
               return ` <div class= "info-box" key=${ele?.id}>
               <span>${ele?.key}</span>
                <span>${ele?.value}</span>
               </div>`;
            }).join("");

            if(myInfo){
               myInfo.innerHTML = infoContent;
            }
         }

    });
});


