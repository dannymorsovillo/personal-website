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
        <h1> {{ title }}</h1>
        <div id =contact>
        <div>
            <img src="/headshot.png" width="200" height= "200">
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
            <p>An aspiring software engineer with a passion for iOS development and machine learning.</p>
        </div>

        <section class="section">
        <h2>{{ second_tile }}</h2>
        <div id="languages-and-tools">
        <ul>
            <li><img src="/swift.svg" alt="Swift" width="50" height="50"></li>
            <li><img src="/C++.svg" alt="C++" width="50" height="50"></li>
            <li><img src="/Java.svg" alt="Java" width="50" height="50"></li>
            <li><img src="/Python.svg" alt="Python" width="50" height="50"></li>
            <li> <img src="/vue.svg" alt="Vue.js" width="50" height="50"></li>
            <li>  <img src="/react.svg" alt="React" width="50" height="50"></li>
        </ul>
        </div>
        </section>

        <section class="section">
       <div id="projects">
        <h2>Projects</h2>
        <><ul>
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
</div>
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
            linkedin: "https://www.linkedin.com/in/danielmorsovillo"
        }
    },
    methods: {
        
    }
}

</script>

<style>
    body {
      background: linear-gradient(to right, black, grey);
        margin: 0;
        padding: 0;
    }

</style>

<style scoped >
    nav {
        background-color: #333;
        padding: 15px;
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
        margin-top:1rem;
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

    h1 {
        color: white;
        font-family: 'Arial', sans-serif;
        text-align: center;  
    }

    h2 {
        color: white;
        font-family: 'Arial', sans-serif;
        text-align: center;
        
    }

    .section {
        padding: 60px 20px;  
        max-width: 900px;    
        margin: 0 auto;     
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


