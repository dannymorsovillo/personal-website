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
            <li>
                <img src="/swift.svg" alt="Swift" width="50" height="50">
            </li>
            <li>
                <img src="/C++.svg" alt="C++" width="50" height="50">
            </li>
            <li>
                <img src="/Java.svg" alt="Java" width="50" height="50">
            </li>
            <li>
                <img src="/Python.svg" alt="Python" width="50" height="50">
            </li>
            <li>
                <img src="/vue.svg" alt="Vue.js" width="50" height="50">
            </li>
            <li>
                <img src="/react.svg" alt="React" width="50" height="50">
            </li>
        </ul>
        </div>
        </section>

        <section class="section">
        <div id="projects">
            <h2>Projects</h2>

            <li>
                <h2>fairwayd iOS App</h2>
                <p>A mobile application that helps golfers find new courses, reviews courses, and recieve AI based recommendations.</p>
                
                <h2>Website for Math Workshop</h2>
                <p>A website for a math workshop sequence that provides educators with a streamlined process to guide their students to success.</p>
                
            </li>

            <li>
                <h2>Raytracing Engine</h2>
                <p>A raytracing engine built in C++ that simulates the way light interacts with objects to create realistic images.</p>
            </li>
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
        background-color: white;
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

    ul {
        list-style-type: none;
        padding: 0;
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
        color: gray;
        font-family: 'Arial', sans-serif;
         text-align: center;  
    }

    h1 {
        color: black;
        font-family: 'Arial', sans-serif;
        text-align: center;  
    }

    h2 {
        color: black;
        font-family: 'Arial', sans-serif;
        text-align: center;  
    }

    .section {
        padding: 60px 20px;  
        max-width: 900px;    
        margin: 0 auto;     
}
    
</style>


