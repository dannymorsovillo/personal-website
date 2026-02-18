```vue
<template>
   <div>
        <nav>
            <a href="#about">About Me</a>
            <a href="#languages-and-tools">Languages and Tools</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
        </nav>

        <section class="section">
        <div class="header">
        <h1> {{ title }}</h1>
        <div class = "headshot-wrapper">
            <img src="/headshot.png" class="headshot" width="200" height= "200">
        </div>
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
                    <span class="download-text">Download my resume here</span>
                </a>
            </li>
        </ul>
        </div>
        </section>

        <div>
            <p>An aspiring software engineer with a passion for mobile development and interests in backend engineering and machine learning.</p>
        </div>

        <section class="section" id="languages-and-tools">
        <h2>{{ second_tile }}</h2>
        <ul>
            <li><img src="/swift.svg" alt="Swift" width="50" height="50"></li>
            <li><img src="/C++.svg" alt="C++" width="50" height="50"></li>
            <li><img src="/Java.svg" alt="Java" width="50" height="50"></li>
            <li><img src="/Python.svg" alt="Python" width="50" height="50"></li>
            <li><img src="/vue.svg" alt="Vue.js" width="50" height="50"></li>
            <li><img src="/react.svg" alt="React" width="50" height="50"></li>
        </ul>
        </section>

        <section class="section" id="projects">
        <h2>Projects</h2>
        <ul>
            <li>
                <h2>fairwayd iOS App</h2>
                <p>A mobile application that helps golfers find new courses, reviews courses, and recieve AI based recommendations.</p>
                <ul class="scroll-row">
                    <li><img src="/explore.png" alt="explore" width="250" height="500"></li>
                    <li><img src="/recommend.png" alt="recommend" width="250" height="500"></li>
                    <li><img src="/howitworks.png" alt="howItWorks" width="250" height="500"></li>
                    <li><img src="/coursedetail.png" alt="courseDetail" width="250" height="500"></li>
                </ul>
            </li>
            <li>
                <h2>Website for Math Workshop</h2>
                <p>A website for a math workshop sequence that provides educators with a streamlined process to guide their students to success.</p>
                <img src="/makemathcount.png" alt="makemathcount" class="screenshot">
            </li>
            <li>
                <h2>Raytracing Engine</h2>
                <p>A raytracing engine built in C++ that simulates the way light interacts with objects to create realistic images.</p>
            </li>
            </ul>
        </section>
    <section class="section" id="contact">
        <h3>
            <li>708-270-7899</li>
            <li>Personal: dangino3130@gmail.com</li>
            <li>Educational: dlmorso@ilstu.edu</li>
        </h3>
        <p>Danny Morsovillo 2026</p>
        <p>Privacy Policy - This site does not collect any personal data. </p>
        
    </section>
</div>
</template>

<script>
export default{
    data() {
        return {
            // text and links
            title: "Danny Morsovillo",
            second_tile: "Languages and Tools",
            github: "https://github.com/dannymorsovillo",
            linkedin: "https://www.linkedin.com/in/danielmorsovillo",
        }
    },
    mounted() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        },
        { threshold: 0.15 }
    );
    sections.forEach(section => {
        observer.observe(section);
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
        text-align:center;
        margin-right:15px;
        margin-left: 15px;
        
    }

    P {
        font-size: 18px;
        color: white;
        font-family: 'Arial', sans-serif;
         text-align: center;  
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

    .section {
        padding: 60px 20px;  
        max-width: 900px;    
        margin: 0 auto;
        opacity: 0;
        transform: translateY(100px);
        transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .section.visible {
        opacity: 1;
        transform: translateY(0);
    }


   
    #projects > ul {
        text-align: left;
    }

    #projects > ul > li {
        display: block;
        text-align: center;
        margin: 0;
        margin-bottom: 250px;

    }

    #projects > ul > li:last-child {
        margin-bottom: 0; 
    }

    .scroll-row {
        display: flex;
        overflow-x: auto;
        gap: 20px;
        padding: 20px;
        justify-content: flex-start;
    }

    .scroll-row li {
        flex-shrink: 0;
        margin: 0; 
    }

    .screenshot {
         width: 100%;
        height: auto;
    }

    .download-text {
        display: block;
        color: white;
        font-size: 14px;
        margin-top: -5px;
        font-family: 'Arial', sans-serif;
    }


    


        
</style>


