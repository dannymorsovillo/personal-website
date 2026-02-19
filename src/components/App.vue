```vue
<template>
   <div>
        <nav>
            <a href="#about">About Me</a>
            <a href="#languages-and-tools">Languages and Tools</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
        </nav>

        <section class="section-wrapper" id="about">
        <div class="section">
        <div class="header">
        <h1> {{ title }}</h1>
        <div class = "headshot-wrapper">
            <img src="/headshot.png" class="headshot" width="200" height= "200">
             <p>An aspiring software engineer with a passion for mobile development and interests in backend engineering and machine learning.</p>
        </div>
        <div>
            <h2>{{second_title}}</h2>
        <ul>
            <li><a :href="github" target="_blank" class="links">
                <img src="/github.svg" alt="Click me" width="50" height="50">
                </a>
            </li>
            <li><a :href="linkedin" target="_blank" class="links">
                <img src="/linkedin.svg" alt="Click me" width="50" height="50">
                </a>
            </li>
           <li>
                <a href="/resume.pdf" download class="links">
                    <img src="/download.svg" alt="Download Resume" width="50" height="50">
                    <span class="download-text">Resume</span>
                </a>
            </li>
        </ul>
        </div>
        </div>
        </div>
        </section>



        <section class="section-wrapper" id="languages-and-tools">
        <div class="section">
        <h2>{{ third_title }}</h2>
        <ul>
            <li><img src="/swift.svg" alt="Swift" width="50" height="50"></li>
            <li><img src="/C++.svg" alt="C++" width="50" height="50"></li>
            <li><img src="/Java.svg" alt="Java" width="50" height="50"></li>
            <li><img src="/Python.svg" alt="Python" width="50" height="50"></li>
            <li><img src="/vue.svg" alt="Vue.js" width="50" height="50"></li>
            <li><img src="/react.svg" alt="React" width="50" height="50"></li>
        </ul>
        </div>
        </section>

        <section class="section-wrapper" id="projects">
        <div class="section">
        <h2>{{fourth_title }}</h2>
        <h3>More Info on GitHub</h3>
        <ul>
            <li class="project-wrapper">
                <div class="project">
                <h2>fairwayd iOS App</h2>
                <p>A mobile application that helps golfers find new courses, reviews courses, and receive AI based recommendations.</p>
                <ul class="scroll-row">
                    <li><img src="/explore.png" alt="explore" width="250" height="500" class="scroll-row-img"></li>
                    <li><img src="/recommend.png" alt="recommend" width="250" height="500" class="scroll-row-img"></li>
                    <li><img src="/howitworks.png" alt="howItWorks" width="250" height="500" class="scroll-row-img"></li>
                    <li><img src="/coursedetail.png" alt="courseDetail" width="250" height="500" class="scroll-row-img"></li>
                </ul>
            </div>
            </li>
            <li class="project-wrapper">
                <div class="project">
                    <h2><a href="https://makemathcounttoday.com/">Make Math Count </a></h2>
                <p>A website for a math workshop sequence that provides educators with a streamlined process to guide their students to success.</p>
                <img src="/makemathcount.png" alt="makemathcount" class="screenshot">
            </div>
            </li>
            <li class = "project-wrapper">
                <div class="project">
                    <img src="/makemathcountabout.png" alt="makemathcount" class="screenshot">
                </div>
            </li>
            <li class="project-wrapper">
                <div class="project">
                <h2>Raytracing Engine</h2>
                <p>A raytracing engine built in C++ that simulates the way light interacts with objects to create realistic images. Built with Peter Shirley's Ray Tracing in One Weekend. </p>
                    <img src="/output.png" alt ="raytracer-output" class="screenshot">
                </div>
            </li>
            </ul>
        </div>
        </section>

    <section class="section-wrapper" id="contact">
        <div class="section">
        <h3>
            <li>708-270-7899</li>
            <li>Personal: dangino3130@gmail.com</li>
            <li>Educational: dlmorso@ilstu.edu</li>
        </h3>
        <p>Danny Morsovillo 2026</p>
        <p> Created with Vue.js and deployed with Vercel.</p>
        <p>Privacy Policy - This site does not collect any personal data. </p>
        </div>
    </section>
</div>
</template>

<script>
export default{
    data() {
        return {
            // titles and links
            title: "Danny Morsovillo",
            second_title: "Socials and Resume",
            third_title: "Languages and Tools",
            fourth_title: "Projects",
            github: "https://github.com/dannymorsovillo",
            linkedin: "https://www.linkedin.com/in/danielmorsovillo",
        }
    },

    mounted() {
    const wrappers = document.querySelectorAll('.section-wrapper, .project-wrapper');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const inner = entry.target.querySelector('.section, .project');
                if (entry.isIntersecting) {
                    inner.classList.add('visible');
                } else {
                    inner.classList.remove('visible');
                }
            });
        },
        {  threshold: 0 }
    );
    wrappers.forEach(wrapper => {
        observer.observe(wrapper);
    });
}
}

</script>

<style>
    body {
        background: linear-gradient(to right, black, grey);
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }

</style>

<style scoped >
    .header{
        text-align:center;
    }

    nav {
        position:fixed;
        top:0;
        z-index: 100;
        width:100%;
        box-sizing: border-box;
        background-color: #333;
        padding: 15px;
        font-family: 'Arial', sans-serif;
        text-align: center;
    }

    nav a {
        color: white;
        text-decoration: none;
        margin: 0 20px;
    }

    nav a:hover {
        color: #ddd;
    }

    a {
        color:white;
    }

    .links {
        color:white;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        text-align: center;
    }   

  
    li{
        display: inline-block;
        position: relative;
        text-align:center;
        margin-right: 15px;
        margin-left: 15px;
    }

    p {
        font-size: 18px;
        padding: 0 20px;
        color: white;
        font-family: 'Arial', sans-serif;
        text-align: left;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    h1, h2 {
        color: white;
        font-family: 'Arial', sans-serif;
        text-align: center;  
    }

    h3 {
        text-align:center;
        color:white;
        font-family: 'Arial', sans-serif;
    }


    .headshot {
      border-radius: 50%;
    }
    
    .headshot-wrapper {
        margin-bottom:15rem;

    }

    .section-wrapper {
        padding: 60px 20px;
        max-width: 900px;
        margin: 0 auto;
    }

    .section-wrapper, .project-wrapper {
        overflow:hidden;
    }


    .section, .project {
        opacity: 0;
        transform: translateY(100px);
        transition: opacity 0.7s ease, transform 0.7s ease;
    }


    .section.visible, .project.visible {
        opacity: 1;
        transform: translateY(0);
    }


    #projects .section > ul {
        text-align: left;
    }

    #projects .section > ul > li {
        display: block;
        text-align: center;
        margin: 0;
        margin-bottom: 250px;

    }

    #projects .section > ul > li:last-child {
        margin-bottom: 0; 
    }

    .scroll-row {
        display: flex;
        overflow-x: auto;
        gap: 20px;
        padding: 20px;
        justify-content: flex-start;
    }

    .scroll-row-img {
        border-radius: 10px;
    }

    .scroll-row li {
        flex-shrink: 0;
        margin: 0; 
    }

    .screenshot {
        width: 100%;
        height: auto;
        border-radius:10px;
    }

    .download-text {
        display: block;
        color: white;
        font-size: 14px;
        font-family: 'Arial', sans-serif;
        position: absolute;
        top: 55px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
    }


    @media (max-width: 768px) {

    nav a {
        margin: 0 8px;
        font-size: 10px;
    }

    nav {
        display:flex;
        white-space: nonwrap;
        justify-content: center;
        gap:10px;
    }

    .headshot-wrapper {
        margin-bottom: 5rem;
    }

     #languages-and-tools ul {
        display: flex;
        overflow-x: auto;
        gap: 15px;
    }

    #languages-and-tools li {
        flex-shrink: 0;
    }

    #projects .section > ul > li {
        margin-bottom: 100px;
    }

    .scroll-row {
        justify-content: flex-start;
    }

    .scroll-row img {
        width: 200px;
        height: 400px;
    }

     #contact li {
        display: block;
        margin: 10px;
    }

    .section,
    .project {
        transform: scale(0.95);
        transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .section.visible,
    .project.visible {
        transform: scale(1);
    }

   
}


        
</style>